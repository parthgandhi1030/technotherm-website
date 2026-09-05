import os
import shutil
from PIL import Image

def process_images():
    base_dir = r"c:\Users\Parth Gandhi\Desktop\TECHNO THERM\KT MEDIA\Web Data"
    out_dir = os.path.join(base_dir, "public", "assets", "images")
    os.makedirs(out_dir, exist_ok=True)
    
    mapping = {
        r"Base Heater": "base_heater",
        r"Cold Storage Door Heaters": "door_heater",
        r"Control Panels": "control_panel",
        r"Drum Heater\Flexible Drum Heaters (FDH)": "flexible_drum_heater",
        r"Drum Heater\Metallic Drum Heaters (MDH)": "metallic_drum_heater",
        r"Energy Saving Insulation Jacket": "insulation_jacket",
        r"Floor Heater": "floor_heater",
        r"Heating Cables\Constant Wattage Heating Cable (CWSR)": "cwsr_cable",
        r"Heating Cables\Cut-to-Length Heating Cable (CTL)": "ctl_cable",
        r"Heating Cables\Self-Regulating Heating Cable (SLSR)": "slsr_cable",
        r"Hopper Heating Pads": "hopper_pad",
        r"Product Accessories": "accessories",
        r"Silicone Rubber Insulated Drain Pipe Heater": "drain_pipe_heater",
        r"Turn Key Project": "turnkey"
    }

    count = 0
    copied_summary = {}

    for folder_rel, prefix in mapping.items():
        folder_path = os.path.join(base_dir, folder_rel)
        if not os.path.exists(folder_path):
            continue
        
        idx = 1
        copied_summary[prefix] = []
        for root, dirs, files in os.walk(folder_path):
            for f in sorted(files):
                if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                    src_file = os.path.join(root, f)
                    out_filename = f"{prefix}_{idx}.jpg"
                    out_path = os.path.join(out_dir, out_filename)
                    
                    try:
                        with Image.open(src_file) as img:
                            img = img.convert('RGB')
                            # Resize if very large
                            if img.width > 1200 or img.height > 1200:
                                img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
                            img.save(out_path, 'JPEG', quality=85, optimize=True)
                            copied_summary[prefix].append(f"/assets/images/{out_filename}")
                            idx += 1
                            count += 1
                    except Exception as e:
                        print(f"Error processing {src_file}: {e}")

    print(f"Successfully processed {count} product images into {out_dir}")
    for k, v in copied_summary.items():
        print(f"  {k}: {len(v)} images -> {v[:2]}")

if __name__ == '__main__':
    process_images()
