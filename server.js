const express = require('express');
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Path to site data JSON
const DATA_FILE = path.join(__dirname, 'data', 'siteData.json');
const UPLOADS_DIR = path.join(__dirname, 'public', 'uploads');

// Ensure uploads directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Helpers for data reading and writing
function getSiteData() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading siteData.json:', e);
    return {};
  }
}

function saveSiteData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (e) {
    console.error('Error writing siteData.json:', e);
    return false;
  }
}

// Setup Multer Storage for Uploaded Product Images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
    cb(null, 'prod-' + uniqueSuffix + ext);
  }
});
const upload = multer({ storage: storage });

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static assets from public and src
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')));

// Session Middleware
app.use(session({
  secret: 'technotherm-secret-key-2026',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Admin Auth Middleware
function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) {
    return next();
  }
  res.redirect('/admin/login');
}

// ================= PUBLIC ROUTES =================

// Main Landing Page
app.get('/', (req, res) => {
  const data = getSiteData();
  res.render('index', { data });
});

// Calculate Heat Loss API (Live formula calculation using admin settings)
app.post('/api/calculate-heat-loss', (req, res) => {
  const data = getSiteData();
  const settings = data.calculatorSettings || { safetyFactor: 1.25, formulaMultiplier: 1.0, kValues: { glasswool: 0.038 } };
  
  const { pipeDiameter, insulationThickness, maintainTemp, ambientTemp, pipeLength, insulationType } = req.body;
  
  const pipeOdMap = {
    '0.5': 21.3, '1': 33.4, '1.5': 48.3, '2': 60.3, '3': 88.9, '4': 114.3, '6': 168.3, '8': 219.1, '10': 273.0, '12': 323.8
  };

  const dInner = (pipeOdMap[pipeDiameter] || 60.3) / 1000.0;
  const insThickM = (parseFloat(insulationThickness) || 50) / 1000.0;
  const dOuter = dInner + (2 * insThickM);
  
  const deltaT = parseFloat(maintainTemp) - parseFloat(ambientTemp);
  const k = (settings.kValues && settings.kValues[insulationType]) ? settings.kValues[insulationType] : 0.038;

  if (deltaT <= 0 || dInner <= 0 || insThickM <= 0) {
    return res.json({ qPerMeter: 0, totalPower: 0, recommendedCable: 'N/A' });
  }

  // Formula: Q (W/m) = 2 * pi * k * deltaT / ln(dOuter / dInner) * SafetyFactor * FormulaMultiplier
  const qRaw = (2 * Math.PI * k * deltaT) / Math.log(dOuter / dInner);
  const safetyFactor = settings.safetyFactor || 1.25;
  const formulaMult = settings.formulaMultiplier || 1.0;

  const qPerMeter = Math.round(qRaw * safetyFactor * formulaMult);
  const totalPower = Math.round(qPerMeter * (parseFloat(pipeLength) || 30));

  let recommendedCable = 'SLSR-12 (Self-Regulating 12W/m)';
  if (qPerMeter > 12 && qPerMeter <= 22) {
    recommendedCable = 'SLSR-25 (Self-Regulating 25W/m)';
  } else if (qPerMeter > 22 && qPerMeter <= 32) {
    recommendedCable = 'SLSR-35 (Self-Regulating 35W/m)';
  } else if (qPerMeter > 32 && qPerMeter <= 45) {
    recommendedCable = 'CWSR-45 / CTL-40 (Constant Wattage 45W/m)';
  } else if (qPerMeter > 45) {
    recommendedCable = 'Double Run SLSR-35 or Spiral CWSR (Custom Multi-Tracing)';
  }

  res.json({ qPerMeter, totalPower, recommendedCable, deltaT, safetyFactorUsed: safetyFactor });
});


// ================= ADMIN ROUTES =================

// Admin Login GET
app.get('/admin/login', (req, res) => {
  if (req.session.isAdmin) return res.redirect('/admin/dashboard');
  res.render('admin/login', { error: null });
});

// Admin Login POST
app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    req.session.isAdmin = true;
    return res.redirect('/admin/dashboard');
  }
  res.render('admin/login', { error: 'Invalid Admin ID or Password. Try admin / admin123' });
});

// Admin Logout
app.get('/admin/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/admin/login');
});

// Admin Dashboard
app.get('/admin/dashboard', requireAdmin, (req, res) => {
  const data = getSiteData();
  res.render('admin/dashboard', { data });
});

// Admin Products List
app.get('/admin/products', requireAdmin, (req, res) => {
  const data = getSiteData();
  res.render('admin/products', { products: data.productCategories || [] });
});

// Admin Edit Product GET
app.get('/admin/products/edit/:id', requireAdmin, (req, res) => {
  const data = getSiteData();
  const product = (data.productCategories || []).find(p => p.id === req.params.id);
  if (!product) return res.redirect('/admin/products');
  res.render('admin/edit-product', { product });
});

// Admin Edit Product POST (with image upload)
app.post('/admin/products/edit/:id', requireAdmin, upload.single('productImage'), (req, res) => {
  const data = getSiteData();
  const index = (data.productCategories || []).findIndex(p => p.id === req.params.id);
  
  if (index !== -1) {
    const p = data.productCategories[index];
    p.title = req.body.title || p.title;
    p.category = req.body.category || p.category;
    p.badge = req.body.badge || p.badge;
    p.shortDesc = req.body.shortDesc || p.shortDesc;
    p.fullDesc = req.body.fullDesc || p.fullDesc;

    if (req.body.features) {
      p.features = req.body.features.split('\n').map(f => f.trim()).filter(Boolean);
    }
    if (req.body.applications) {
      p.applications = req.body.applications.split('\n').map(a => a.trim()).filter(Boolean);
    }

    if (req.file) {
      const newImgPath = '/uploads/' + req.file.filename;
      p.images.unshift(newImgPath);
    }

    saveSiteData(data);
  }
  
  res.redirect('/admin/products');
});

// Admin Calculator Formula Settings GET
app.get('/admin/calculator-settings', requireAdmin, (req, res) => {
  const data = getSiteData();
  res.render('admin/calculator-settings', { settings: data.calculatorSettings || {} });
});

// Admin Calculator Formula Settings POST
app.post('/admin/calculator-settings', requireAdmin, (req, res) => {
  const data = getSiteData();
  data.calculatorSettings = data.calculatorSettings || {};
  
  data.calculatorSettings.safetyFactor = parseFloat(req.body.safetyFactor) || 1.25;
  data.calculatorSettings.formulaMultiplier = parseFloat(req.body.formulaMultiplier) || 1.0;
  
  data.calculatorSettings.kValues = {
    glasswool: parseFloat(req.body.k_glasswool) || 0.038,
    rockwool: parseFloat(req.body.k_rockwool) || 0.042,
    polyurethane: parseFloat(req.body.k_polyurethane) || 0.024,
    calcium_silicate: parseFloat(req.body.k_calcium_silicate) || 0.055
  };

  saveSiteData(data);
  res.render('admin/calculator-settings', { settings: data.calculatorSettings, success: 'Calculator formula settings updated successfully!' });
});

// Admin Company Info GET
app.get('/admin/company-info', requireAdmin, (req, res) => {
  const data = getSiteData();
  res.render('admin/company-info', { company: data.companyDetails || {} });
});

// Admin Company Info POST
app.post('/admin/company-info', requireAdmin, (req, res) => {
  const data = getSiteData();
  data.companyDetails = data.companyDetails || {};
  
  data.companyDetails.name = req.body.name || data.companyDetails.name;
  data.companyDetails.vision = req.body.vision || data.companyDetails.vision;
  data.companyDetails.mission = req.body.mission || data.companyDetails.mission;
  
  if (data.companyDetails.chairman) {
    data.companyDetails.chairman.name = req.body.chairmanName || data.companyDetails.chairman.name;
    data.companyDetails.chairman.quote = req.body.chairmanQuote || data.companyDetails.chairman.quote;
    data.companyDetails.chairman.message = req.body.chairmanMessage || data.companyDetails.chairman.message;
  }

  if (data.companyDetails.contact) {
    data.companyDetails.contact.address = req.body.address || data.companyDetails.contact.address;
    data.companyDetails.contact.email = req.body.email || data.companyDetails.contact.email;
  }

  saveSiteData(data);
  res.render('admin/company-info', { company: data.companyDetails, success: 'Company details updated successfully!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`TechnoTherm Express EJS server running on http://localhost:${PORT}`);
  console.log(`Admin Panel accessible at http://localhost:${PORT}/admin`);
});
