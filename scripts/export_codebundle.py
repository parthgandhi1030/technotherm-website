import os
import shutil

def export_code_bundle():
    base_dir = r"c:\Users\Parth Gandhi\Desktop\TECHNO THERM\KT MEDIA\Web Data"
    export_dir = os.path.join(base_dir, "code_bundle")
    os.makedirs(export_dir, exist_ok=True)

    # Directories & files to bundle
    include_files = [
        "package.json",
        "vite.config.js",
        "index.html",
        "public/sitemap.xml",
        "public/robots.txt",
        "src/main.jsx",
        "src/App.jsx",
        "src/index.css",
        "src/data/companyData.js",
        "src/components/Header.jsx",
        "src/components/Hero.jsx",
        "src/components/About.jsx",
        "src/components/ProductCatalog.jsx",
        "src/components/ProductModal.jsx",
        "src/components/HeatCalculator.jsx",
        "src/components/TurnkeyProcess.jsx",
        "src/components/Industries.jsx",
        "src/components/ClientReferences.jsx",
        "src/components/FaqSection.jsx",
        "src/components/ContactSection.jsx",
        "src/components/Footer.jsx",
        "src/components/Chatbot.jsx",
        "src/components/CableExplorer.jsx",
        "src/components/EnergyRoiCalculator.jsx",
        "src/components/ProductCompareModal.jsx"
    ]

    single_file_path = os.path.join(export_dir, "ALL_PROJECT_SOURCE_CODES.txt")
    
    with open(single_file_path, "w", encoding="utf-8") as out_all:
        out_all.write("=====================================================\n")
        out_all.write("TECHNOTHERM INDUSTRIES LLP - COMPLETE WEBSITE SOURCE CODE\n")
        out_all.write("=====================================================\n\n")

        for rel in include_files:
            src = os.path.join(base_dir, rel)
            if os.path.exists(src):
                # Copy file into code_bundle/ keeping relative subfolder structure
                dest = os.path.join(export_dir, rel)
                os.makedirs(os.path.dirname(dest), exist_ok=True)
                shutil.copy2(src, dest)

                # Append to single master code text file
                out_all.write(f"/*** FILE: {rel} ***/\n")
                with open(src, "r", encoding="utf-8") as f:
                    out_all.write(f.read())
                out_all.write("\n\n" + "="*50 + "\n\n")
                print(f"Bundled: {rel}")
            else:
                print(f"Skipped missing file: {rel}")

    print(f"\nCode bundle export successfully created at: {export_dir}")
    print(f"Single master source file created at: {single_file_path}")

if __name__ == '__main__':
    export_code_bundle()
