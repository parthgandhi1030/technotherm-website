export const companyDetails = {
  name: "TechnoTherm Industries LLP",
  groupName: "Thermo-Tech Industries",
  establishedYear: 1971,
  legacyYears: 53,
  tagline: "The Stamp of Quality & Professionalism",
  vision: "To be recognized for Quality and Quick response with embracement of changes by upgrading technology.",
  mission: "To exceed our customers' expectations in quality, delivery and cost through continuous improvement and customer interaction.",
  coreValue: "To maintain a healthy, viable company & workplace positioned to serve our Customers, Employees and Community.",
  certifications: [
    { title: "ISO 9001:2015 Certified", desc: "Quality Management System Certified Organization" },
    { title: "CSIR-CIMFR Approved", desc: "Zone II Area Certified (T1 to T5 Gas Classification)" },
    { title: "IS/IEC/IEEE Standard", desc: "Manufactured per IS/IEC/IEEE6079-30 : 2015 Standards" }
  ],
  chairman: {
    name: "Ramesh Gandhi",
    title: "Chairman",
    company: "TechnoTherm Industries LLP",
    quote: "Sustainable business success cannot be achieved through shortcuts. Integrity, ethics, honesty, commitment, and hard work are the foundation of any successful organization.",
    message: `First and foremost, I would like to sincerely thank you for visiting our website and taking the time to learn more about our organization.

At TechnoTherm Industries LLP, our guiding philosophy is "The Stamp of Quality & Professionalism." This is not merely a tagline; it represents the values, commitment, and standards that we strive to uphold in every aspect of our business. Every member of our organization is committed to delivering excellence and ensuring that our customers experience the quality and professionalism that define us.

I firmly believe that sustainable business success cannot be achieved through shortcuts. Integrity, ethics, honesty, commitment, and hard work are the foundation of any successful organization. We place great emphasis on understanding our customers' needs, fulfilling our commitments, delivering quality work, and building relationships based on trust and mutual respect.

Our vision is to continuously strengthen and expand our business by investing in the right people, infrastructure, technology, and processes, thereby creating a financially strong, professionally managed, and future-ready organization. We offer a wide range of solutions and services designed to meet the requirements of small, medium, and large organizations, whether established businesses or new ventures.`
  },
  contact: {
    address: "129 Vora Industrial Estate No 04, Navghar, Vasai (East), Dist. Palghar - 401 210. Maharashtra (INDIA)",
    phones: ["+91 99209 70209", "+91 70661 10066"],
    whatsapp: "919920970209",
    email: "thermojacket@yahoo.com",
    website: "teamthermotech.co.in",
    workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM IST"
  },
  exportCountries: [
    "India", "Middle East", "USA", "UK", "Russia", "Kazakhstan", 
    "South Africa", "Thailand", "Kenya", "Bangladesh", "Sri Lanka", "Nepal"
  ],
  stats: [
    { value: "53+", label: "Years Group Legacy", desc: "Est. 1971" },
    { value: "5,000+", label: "Projects Completed", desc: "Worldwide" },
    { value: "15+", label: "Product Lines", desc: "Custom & Standard" },
    { value: "12+", label: "Export Destinations", desc: "Global Footprint" }
  ]
};

export const productCategories = [
  {
    id: "slsr",
    title: "Self-Regulating Heating Cable (SLSR)",
    category: "Heating Cables",
    shortDesc: "Automatic PTC heat output adjustment relative to ambient temperature. Prevents overheating and saves energy.",
    fullDesc: "THERMO-FLEX® Self-Regulating Heating Cable (SLSR) is engineered with a PTC (Positive Temperature Coefficient) semi-conductive polymer matrix that automatically adjusts power output as surface temperature changes. As ambient temperature drops, power output increases; as temperature rises, heat output reduces automatically.",
    badge: "Most Popular",
    images: [
      "/assets/images/slsr_cable_1.jpg",
      "/assets/images/slsr_cable_2.jpg",
      "/assets/images/slsr_cable_3.jpg"
    ],
    features: [
      "Self-regulating PTC core automatically prevents overheating",
      "Can be cut to length at job site without altering W/m rating",
      "Energy efficient - reduces power consumption when warm",
      "Available in Low (105°C), Medium (135°C), & High (200°C) temp classes",
      "Suitable for hazardous (Ex) and non-hazardous industrial areas"
    ],
    techSpecs: [
      { label: "Rated Voltage", value: "110V / 220V - 230V AC" },
      { label: "Power Ratings @ 10°C", value: "12W, 15W, 25W, 35W, 45W, 50W, 60W / meter" },
      { label: "Low Temp Class", value: "Maintain up to 65°C, Max exposure 105°C" },
      { label: "Medium Temp Class", value: "Maintain up to 105°C, Max exposure 135°C" },
      { label: "High Temp Class", value: "Maintain up to 125°C, Max exposure 200°C" },
      { label: "Max Circuit Length", value: "Up to 100 meters per power feed" },
      { label: "Outer Jacket", value: "UV-resistant Polyolefin or Fluoropolymer (FEP)" }
    ],
    applications: [
      "Freeze protection of water & process piping",
      "Process temperature maintenance for chemical/petroleum lines",
      "Roof & gutter de-icing systems",
      "Tank & vessel heating in ordinary and hazardous locations"
    ]
  },
  {
    id: "cwsr",
    title: "Constant Wattage Heating Cable (CWSR)",
    category: "Heating Cables",
    shortDesc: "Series resistance heat tracer delivering constant, predictable heat output along entire circuit length. CIMFR & Zone II Approved.",
    fullDesc: "THERMO-FLEX® CWSR Constant Wattage Heat Tracer is constructed using high-temperature PTFE (Teflon) primary insulation, glass-fibre secondary insulation, and SS 304 protective sheathing. Certified by CSIR-CIMFR for Zone II hazardous area classification with T1 to T5 gas rating as per IS 5571:1979.",
    badge: "Zone II Approved",
    images: [
      "/assets/images/cwsr_cable_1.jpg",
      "/assets/images/cwsr_cable_2.jpg"
    ],
    features: [
      "Constant series-resistance heat output regardless of temperature",
      "PTFE (Teflon) primary & glass-fibre secondary insulation",
      "SS 304 stainless steel protective outer braid for high mechanical strength",
      "Approved by CSIR-CIMFR (TSP/0256/24-25) for Zone II hazardous areas",
      "Supplied ready-to-use with 1000mm cold end & PG11 glands"
    ],
    techSpecs: [
      { label: "Nominal Loading", value: "25 W/m & 45 W/m" },
      { label: "Nominal Voltage", value: "230 V AC" },
      { label: "Design Standard", value: "IS/IEC/IEEE6079-30 : 2015" },
      { label: "Approval Agency", value: "CSIR-CIMFR (TSP/0256/24-25)" },
      { label: "Area Classification", value: "Zone II Area (Gas T1 to T5, IS 5571)" },
      { label: "Max Safe Temp", value: "200°C (Not Energized), 150°C (Energized)" },
      { label: "Cross Section", value: "12 mm × 4 mm Max" }
    ],
    applications: [
      "Long distance pipeline temperature maintenance",
      "Industrial refrigeration & cold storage facilities",
      "Drain and drainage line freeze protection",
      "Process plant piping in Zone II explosive environments"
    ]
  },
  {
    id: "ctl",
    title: "Cut-to-Length Heating Cable (CTL)",
    category: "Heating Cables",
    shortDesc: "Silicone rubber parallel resistance heating cable with 0.5m node spacing. Rapid heat transfer up to 150°C.",
    fullDesc: "THERMO-FLEX® Silicone Rubber Constant Power Heating Cable features nickel-alloy heating wire wound around bus conductors with parallel nodes every 0.5 meters. Enclosed in heavy-duty silicone rubber, it operates from -60°C to +200°C with maximum maintained temperature of 150°C.",
    badge: "Silicone Rubber",
    images: [
      "/assets/images/ctl_cable_1.jpg",
      "/assets/images/ctl_cable_2.jpg"
    ],
    features: [
      "Parallel resistance design - cut to length every 0.5m node",
      "High temperature silicone rubber body (-60°C to +200°C)",
      "Copper-Nickel / Nickel-Cadmium alloy heating elements",
      "Integrated cold-tail construction for joint-free installation",
      "Extreme flexibility for tight bending around valves and pumps"
    ],
    techSpecs: [
      { label: "Power Options", value: "25 W/m, 40 W/m, 50 W/m" },
      { label: "Voltage Range", value: "36V to 240V AC (Standard 220V)" },
      { label: "Max Heating Length", value: "65m (25W), 50m (40W), 44m (50W)" },
      { label: "Dimensions", value: "5 mm × 7 mm Profile" },
      { label: "Node Spacing", value: "0.5 meters" },
      { label: "Max Maintained Temp", value: "Up to 150°C" }
    ],
    applications: [
      "Industrial flow meters and instrument freeze protection",
      "Tank & vessel thermal preservation",
      "Outdoor chemical and water pipelines",
      "Industrial processing equipment requiring tight routing"
    ]
  },
  {
    id: "drain-pipe",
    title: "Silicone Rubber Drain Pipe Defrost Heater",
    category: "Industrial Heaters",
    shortDesc: "Flexible waterproof defrost heating cable for cold room, freezer cabinet, and HVAC condensate drain lines.",
    fullDesc: "Specially engineered to eliminate ice blockages in cold storage drain pipes, condensate lines, and commercial refrigeration units. Silicone rubber insulation provides complete moisture sealing and extreme cold resistance down to -60°C.",
    badge: "Cold Room Special",
    images: [
      "/assets/images/drain_pipe_heater_1.jpg",
      "/assets/images/drain_pipe_heater_2.jpg"
    ],
    features: [
      "100% waterproof silicone rubber insulation",
      "Operating temp range from -60°C to +220°C",
      "Available power outputs: 40 W/m and 50 W/m",
      "Standard lengths from 1m to 20m + custom lengths",
      "Optional digital temperature controller for auto regulation"
    ],
    techSpecs: [
      { label: "Cross Section", value: "5 mm × 7 mm" },
      { label: "Voltage", value: "220 V AC" },
      { label: "Power Density", value: "40 W/m or 50 W/m" },
      { label: "Available Lengths", value: "1m, 2m, 3m, 5m, 9m, 10m, 12m, 15m, 18m, 20m" },
      { label: "Customization", value: "Drawing-based, sample-based, or full custom" }
    ],
    applications: [
      "Commercial refrigeration & freezer drain lines",
      "HVAC condensate drainage pipes",
      "Cold room floor drainage defrosting",
      "Outdoor exposed pipes in freezing climates"
    ]
  },
  {
    id: "insulation-jacket",
    title: "Power Saving Thermal Insulation Jacket",
    category: "Insulation Jackets",
    shortDesc: "Removable thermal insulation jackets for plastic injection molding machines, extruders & T-dies. 20% - 45% electricity savings.",
    fullDesc: "Custom-tailored thermal insulation jackets designed for plastic processing machinery (Injection Molding, Extruders, Blow Molding, T-Dies). By retaining heat within heater bands, these jackets reduce ambient heat loss into the shop floor by up to 45%, providing payback in just 4 to 8 months.",
    badge: "20%-45% Energy Saver",
    images: [
      "/assets/images/insulation_jacket_1.jpg",
      "/assets/images/insulation_jacket_2.jpg"
    ],
    features: [
      "20% to 45% reduction in plastic processing machine power consumption",
      "Lowers barrel heating warm-up time by up to 30%",
      "Reduces shop floor ambient temperature, improving worker comfort & AC load",
      "Removable & reusable with high-grade quick-release straps & ceramic/glass fiber fabric",
      "Tailor-made precise fit with cutouts for thermocouples and wiring"
    ],
    techSpecs: [
      { label: "Outer Fabric", value: "Silicone/PTFE Coated Glass Cloth" },
      { label: "Insulation Core", value: "High-Density Ceramic Fiber / Glass Wool Matrix" },
      { label: "Temp Limit", value: "Up to 600°C continuous" },
      { label: "Power Savings", value: "20% - 45% Verified ROI" },
      { label: "Fastening", value: "High-temp Velcro, Kevlar thread, D-rings & quick buckles" }
    ],
    applications: [
      "Plastic Injection Moulding Machine Barrels",
      "Plastic Extruder Barrels & Feed Sections",
      "T-Dies and Blow Moulding Heads",
      "Industrial Valves, Flanges & Heat Exchangers"
    ]
  },
  {
    id: "door-heater",
    title: "Cold Storage Door Heaters",
    category: "Industrial Heaters",
    shortDesc: "Prevents door frame gasket freezing, ice buildup, and seal damage in blast freezers & cold storage rooms.",
    fullDesc: "Designed to be embedded or surface-mounted along cold room and walk-in freezer door frames. By maintaining the perimeter temperature above dew point, it prevents rubber gaskets from freezing shut and tearing.",
    badge: "Refrigeration Essential",
    images: [
      "/assets/images/door_heater_1.jpg"
    ],
    features: [
      "Prevents gasket freezing and ice accumulation around door seals",
      "Extends lifespan of expensive cold room door rubber seals",
      "Low energy consumption with constant controlled heating",
      "Flexible, moisture-sealed silicone construction"
    ],
    techSpecs: [
      { label: "Operating Voltage", value: "230 V AC / 24 V AC options" },
      { label: "Wattage", value: "10W/m to 30W/m customized" },
      { label: "Outer Sheath", value: "Silicone Rubber / SS Braid options" }
    ],
    applications: [
      "Blast freezer door perimeter frames",
      "Cold room slide and swing doors",
      "Refrigerated vehicle door seals"
    ]
  },
  {
    id: "fdh",
    title: "Flexible Drum Heaters (FDH)",
    category: "Industrial Heaters",
    shortDesc: "Silicone rubber heating blanket with adjustable thermostat for 200L / 55-gallon chemical & oil drums.",
    fullDesc: "THERMO-FLEX® FDH Flexible Drum Heaters wrap tightly around 200-liter metal or plastic drums to heat viscous fluids (oils, resins, chemicals, adhesives, lard) to lower viscosity and facilitate pumping or pouring.",
    badge: "Viscosity Control",
    images: [
      "/assets/images/flexible_drum_heater_1.jpg",
      "/assets/images/flexible_drum_heater_2.jpg"
    ],
    features: [
      "Uniform heat distribution over 200L (55 gal) drum surface",
      "Built-in adjustable capillary thermostat (30°C to 150°C)",
      "Durable silicone rubber construction resistant to chemicals & moisture",
      "Quick spring-clamp or buckle fastening system"
    ],
    techSpecs: [
      { label: "Standard Size", value: "200L / 55 Gallon Drum (1740mm × 250mm standard)" },
      { label: "Voltage", value: "230 V AC Single Phase" },
      { label: "Power Rating", value: "1000W, 1500W, 2000W options" },
      { label: "Thermostat Range", value: "30°C to 150°C Digital / Capillary" }
    ],
    applications: [
      "Heating heavy oils, wax, grease, and resins in drums",
      "Chemical viscosity reduction prior to dispensing",
      "Preventing crystallization in honey, molasses, and syrups"
    ]
  },
  {
    id: "mdh",
    title: "Metallic Drum Heaters (MDH)",
    category: "Industrial Heaters",
    shortDesc: "Heavy-duty rigid insulated metal jacket drum heating station for intense high-temperature industrial heating.",
    fullDesc: "Designed for rugged factory environments where heavy drum heating is required continuously. Features insulated outer metal housing with internal heating elements and high-precision digital control box.",
    badge: "Heavy Industrial",
    images: [
      "/assets/images/metallic_drum_heater_1.jpg",
      "/assets/images/metallic_drum_heater_2.jpg"
    ],
    features: [
      "Rigid double-walled insulated metallic casing",
      "High thermal efficiency with minimal outer shell surface temp",
      "Digital PID temperature control panel with sensor input",
      "Hinged door access for easy drum loading and unloading"
    ],
    techSpecs: [
      { label: "Drum Capacity", value: "200 Litres (Custom sizes for 50L / 100L)" },
      { label: "Power Rating", value: "3.0 kW to 6.0 kW 3-Phase / 1-Phase" },
      { label: "Max Temp", value: "Up to 300°C" }
    ],
    applications: [
      "High temperature melting of asphalt, bitumen, and waxes",
      "Chemical processing plants requiring rapid drum pre-heating"
    ]
  },
  {
    id: "base-heater",
    title: "Heavy-Duty Base Heater for Drums",
    category: "Industrial Heaters",
    shortDesc: "Bottom platen heater for 200L drums providing direct underside heat for dense, settled materials.",
    fullDesc: "Placed directly underneath 200L drums, the Base Heater applies concentrated thermal energy to the bottom surface, melting heavy residues that settle at the bottom of drums.",
    badge: "Bottom Heating",
    images: [
      "/assets/images/base_heater_1.jpg",
      "/assets/images/base_heater_2.jpg"
    ],
    features: [
      "Heavy load-bearing steel base structure designed for full 200L drums",
      "Tapered top surface ensures full contact with drum bottom indent",
      "Can be combined with FDH flexible drum jackets for total heating"
    ],
    techSpecs: [
      { label: "Power Rating", value: "900W to 1500W" },
      { label: "Temp Range", value: "0°C to 150°C" },
      { label: "Base Diameter", value: "550 mm" }
    ],
    applications: [
      "Bottom heating of thick tar, bitumen, tallow, and dense resins"
    ]
  },
  {
    id: "hopper-pad",
    title: "ESP & BF Hopper Heating Pads",
    category: "Industrial Heaters",
    shortDesc: "Black-heat region electrical heating pads for ESP & BF hoppers. Operating safe temp up to 350°C.",
    fullDesc: "THERMO-FLEX® Hopper Heating Pads are engineered for uniform, controlled heating of ESP (Electrostatic Precipitator) and BF (Bag Filter) hoppers in power and cement plants. Operates in the black-heat region to prevent ash compaction, moisture condensation, and hopper choking.",
    badge: "Power & Cement Special",
    images: [
      "/assets/images/hopper_pad_1.jpg",
      "/assets/images/hopper_pad_2.jpg"
    ],
    features: [
      "Operates in black-heat region preventing localized hotspots & thermal stress",
      "Nichrome wire elements insulated with Class F yarn and woven glass cloth",
      "Maximum safe temperature up to 350°C",
      "ESP Hopper rating 0.325 kW/m², BF Hopper rating 0.500 kW/m²",
      "Peripheral eyelets and M10 × 20mm studs for secure mounting"
    ],
    techSpecs: [
      { label: "Safe Max Temp", value: "350 °C" },
      { label: "Power Density (ESP)", value: "0.325 kW/m²" },
      { label: "Power Density (BF)", value: "0.500 kW/m²" },
      { label: "Working Voltage", value: "230V 1-Phase / 415V 2-Phase AC" },
      { label: "Mounting Hardware", value: "M10 × 20mm studs, nuts, washers (200mm pitch)" }
    ],
    applications: [
      "Thermal Power Station ESP Hoppers",
      "Cement Plant Bag Filter (BF) Hoppers",
      "Steel Plant Dust Collection Hoppers"
    ]
  },
  {
    id: "floor-heater",
    title: "Radiant Underfloor Floor Heating Cable",
    category: "Industrial Heaters",
    shortDesc: "Underfloor warming and snow melting cables for commercial, residential, and industrial cold storage floors.",
    fullDesc: "Provides comfortable radiant warmth under tile, marble, or concrete floors, while also serving as sub-floor frost heave prevention under walk-in cold storage rooms.",
    badge: "Radiant Warmth",
    images: [
      "/assets/images/floor_heater_1.jpg",
      "/assets/images/floor_heater_2.jpg"
    ],
    features: [
      "Prevents sub-floor soil freezing & concrete upheaval in cold storage",
      "Silent, invisible indoor floor warming for hotels and residences",
      "Tough outer insulation with metallic earth braid shield"
    ],
    techSpecs: [
      { label: "Power Output", value: "10 W/m to 18 W/m" },
      { label: "Supply Voltage", value: "230 V AC" }
    ],
    applications: [
      "Cold room sub-floor frost heave prevention",
      "Hotel & luxury residence floor warming"
    ]
  },
  {
    id: "control-panel",
    title: "Custom Thermal Control Panels",
    category: "Controls & Accessories",
    shortDesc: "Custom engineered electrical control panels with PID controllers, SSRs, contactors, and Ex-proof enclosures.",
    fullDesc: "Complete industrial control cabinets engineered to monitor and regulate multi-circuit heat tracing systems, hopper pads, and drum heaters. Features digital temperature controllers, alarm relays, current monitoring, and hazardous area enclosures.",
    badge: "Automation & Safety",
    images: [
      "/assets/images/control_panel_1.jpg",
      "/assets/images/control_panel_2.jpg"
    ],
    features: [
      "Microprocessor-based PID digital temperature control",
      "Solid State Relay (SSR) or Contactor switching with heat sinks",
      "Ground fault current monitoring & over-temperature safety cutoffs",
      "Available in IP65 outdoor weatherproof or Ex-d Flameproof enclosures"
    ],
    techSpecs: [
      { label: "Control Channels", value: "1-Circuit to 48-Circuit Custom Panels" },
      { label: "Enclosure Ratings", value: "IP55, IP65, IP66, Ex-d IIB/IIC Flameproof" },
      { label: "Sensors Supported", value: "Pt100 RTD, Thermocouple Type J/K" }
    ],
    applications: [
      "Turnkey heat tracing system master control",
      "ESP hopper heater multi-zone panels",
      "Process plant centralized thermal automation"
    ]
  },
  {
    id: "accessories",
    title: "Heat Tracing Accessories & Connection Kits",
    category: "Controls & Accessories",
    shortDesc: "CSIR-CIMFR certified cable glands, power junction boxes, end seal termination kits & aluminum mounting tapes.",
    fullDesc: "Comprehensive range of certified installation hardware for electric heat tracing systems. Includes PG11 / PG13.5 glands, Ex-d junction boxes, silicone end seals, heat shrink tubes, glass cloth tape, and conductive aluminum fixing tape.",
    badge: "Certified Accessories",
    images: [
      "/assets/images/accessories_1.jpg",
      "/assets/images/accessories_2.jpg"
    ],
    features: [
      "Complete end-seal and power connection kits for SLSR & CWSR cables",
      "CSIR-CIMFR approved Ex-d hazardous area cable glands",
      "High thermal conductivity aluminum fixing tape",
      "Fiberglass high-temp adhesive fixing tape"
    ],
    techSpecs: [
      { label: "Gland Sizes", value: "PG11, PG13.5, M20, M25 Ex-d / Weatherproof" },
      { label: "Junction Boxes", value: "GRP, Cast Aluminum, SS 316 1-in / 4-out" }
    ],
    applications: [
      "Heat tracing cable field termination",
      "Hazardous area Ex-d power wiring"
    ]
  },
  {
    id: "turnkey",
    title: "Turnkey Project Solutions & Engineering Consultancy",
    category: "Turnkey & Consultancy",
    shortDesc: "End-to-end engineering consultancy, thermal heat loss calculation, system design, supply, installation, and AMC.",
    fullDesc: "TechnoTherm Industries LLP offers complete turnkey heat tracing and thermal project execution. Our specialized engineering panel evaluates pipe diameters, fluid properties, ambient low temps, and insulation thickness to design custom heat tracing systems, followed by site execution and Annual Maintenance Contracts (AMC).",
    badge: "End-to-End Solutions",
    images: [
      "/assets/images/turnkey_1.jpg",
      "/assets/images/turnkey_2.jpg"
    ],
    features: [
      "Detailed thermal loss calculation & engineering design",
      "Selection of optimal technology (SLSR vs CWSR vs Skin-Effect)",
      "Supply of certified cables, panels, junction boxes & accessories",
      "On-site installation, insulation wrapping, and testing",
      "Commissioning and Annual Maintenance Contracts (AMC)"
    ],
    techSpecs: [
      { label: "Project Scope", value: "Design -> Calculations -> Supply -> Install -> AMC" },
      { label: "Compliance", value: "IEEE 515, IS/IEC 6079-30, CIMFR Certified" }
    ],
    applications: [
      "Refinery & Petrochemical long pipelines",
      "Edible oil & food processing viscous fluid lines",
      "Power plant ESP hopper heating overhauls",
      "Offshore & marine vessel freeze protection"
    ]
  }
];

export const clientReferences = [
  { client: "LUKOIL Oil & Gas", project: "Usinskoye Field", country: "Russia", scope: "Self-regulating cables, junction boxes, control cabinets", year: "2007" },
  { client: "Rosneft Oil & Gas", project: "Prirazlomnoye Field", country: "Russia", scope: "Series-resistance heating cables & turnkey commissioning", year: "2007" },
  { client: "Transneft", project: "ESPO-1 Pipeline System", country: "Russia", scope: "SLSR cables, long-line skin effect systems, control cabinets", year: "2007" },
  { client: "Schlumberger / M-I SWACO", project: "Chaivo Wellsite", country: "Russia", scope: "Self-regulating heating cables & control systems", year: "2005" },
  { client: "Gazprom Neft", project: "Peschanoye Field", country: "Russia", scope: "Self-regulating heat tracing, junction boxes & sensors", year: "2003" },
  { client: "Rosneft Refinery", project: "Novokuibyshevsk Refinery", country: "Russia", scope: "Mazout storage tank heat tracing system", year: "2002" },
  { client: "ALROSA Infrastructure", project: "Mirny Town Children's Center", country: "Russia", scope: "Building frost protection & roof de-icing", year: "2003" },
  { client: "Indian Petrochemical Plants", project: "Polymer Processing Lines", country: "India", scope: "CWSR & SLSR heat tracing with CIMFR panels", year: "Recent" },
  { client: "Plastic Processing Majors", project: "Injection Moulding Power Saving", country: "India & Middle East", scope: "Energy Saving Insulation Jackets (35% ROI achieved)", year: "Recent" }
];

export const industriesServed = [
  { name: "Petroleum, Oil & Gas", icon: "Flame", desc: "Pipeline temperature maintenance, crude oil viscosity control, refinery mazout tank heating." },
  { name: "Chemical Processing", icon: "TestTube", desc: "Corrosive fluid heating, caustic soda anti-crystallization, reactor vessel heating." },
  { name: "Plastic Processing", icon: "Cpu", desc: "Energy saving insulation jackets for injection moulding, extruders, blow moulding & T-dies." },
  { name: "Power Generation", icon: "Zap", desc: "ESP & BF hopper heating pads for thermal power stations to prevent ash choking." },
  { name: "Food & Beverage", icon: "Apple", desc: "Edible oil, chocolate, milk, syrup, dates, and biscuit ingredient temperature control." },
  { name: "Marine & Offshore", icon: "Anchor", desc: "Shipboard pipeline freeze protection, deck de-icing, cold-room deck heating." },
  { name: "Cold Storage & HVAC", icon: "Snowflake", desc: "Silicone drain pipe defrost heaters, door gasket frame heaters, sub-floor frost heave protection." },
  { name: "Rubber & Cement", icon: "Factory", desc: "Bag filter hopper pads, vulcanizing mold heaters, heavy raw material drum heating." }
];

export const turnkeySteps = [
  { step: "01", title: "Requirement & Site Survey", desc: "We review pipe dimensions, fluid properties, target maintain temp, ambient min temp, and insulation thickness." },
  { step: "02", title: "Thermal Loss Calculation", desc: "Our engineering panel calculates heat loss per meter (W/m) and evaluates total electrical power required." },
  { step: "03", title: "Technology & Cable Sizing", desc: "We select between SLSR, CWSR, CTL, or custom jackets, matching hazardous zone Ex ratings (CIMFR Zone II)." },
  { step: "04", title: "Panel & System Design", desc: "Design custom digital control panels with PID controllers, SSRs, RTD sensors, and ground fault safety." },
  { step: "05", title: "Supply & Site Installation", desc: "On-site wrapping, aluminum tape fixing, junction box mounting, insulation jacket installation, and megger testing." },
  { step: "06", title: "Commissioning & AMC", desc: "System energization, heat load trial run, hand-over documentation, and long-term Annual Maintenance Contracts." }
];

export const faqList = [
  {
    question: "What is the difference between Self-Regulating (SLSR) and Constant Wattage (CWSR) heating cables?",
    answer: "Self-Regulating (SLSR) cables automatically adjust their heat output based on surrounding temperature using a PTC polymer core (more heat when cold, less when warm). They can be cut to length anywhere on site. Constant Wattage (CWSR) cables produce a constant, fixed wattage per meter regardless of temperature, making them ideal for uniform long-distance pipeline heating and higher temperature applications."
  },
  {
    question: "How much energy do Energy Saving Insulation Jackets save on plastic injection moulding machines?",
    answer: "Our tailor-made thermal insulation jackets reduce electricity consumption of plastic processing machine heater bands by 20% to 45%. They also reduce warm-up time by 30% and significantly lower ambient room temperature, providing payback within 4 to 8 months."
  },
  {
    question: "Are TechnoTherm heating cables certified for explosive and hazardous Zone II areas?",
    answer: "Yes! Our CWSR series-resistance heat tracers are tested and approved by CSIR-CIMFR (Approval TSP/0256/24-25) for Zone II hazardous area classification with T1 to T5 gas ratings as per IS 5571:1979 and IS/IEC/IEEE6079-30 standard."
  },
  {
    question: "Why are electrical Hopper Heating Pads essential for ESP and BF hoppers?",
    answer: "ESP (Electrostatic Precipitator) and Bag Filter hoppers in power and cement plants suffer from moisture condensation, which causes fly ash to cake and choke the hopper outlet. Our Nichrome-based black-heat hopper heating pads maintain surface temperatures up to 350°C, ensuring continuous ash flow without localized hot spots."
  },
  {
    question: "Do you offer turnkey installation and Annual Maintenance Contracts (AMCs)?",
    answer: "Yes, TechnoTherm Industries LLP provides complete end-to-end turnkey project execution—from thermal heat loss calculations and system design to manufacturing, on-site installation, commissioning, and AMC maintenance support."
  }
];
