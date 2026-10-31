import os
import urllib.request
import urllib.parse

BASE_URL = "https://www.uiuxdesignschool.in/"

images_to_download = [
    # Logos
    "images/assets/allpagelogo/5548logo.png",
    "images/assets/allpagelogo/long-black.png",
    "images/assets/allpagelogo/long-65c5ed74607b2.webp",
    "images/assets/home/block-6598ed7463f87.webp",
    
    # Recruiters
    "images/assets/home/amazon.png",
    "images/assets/home/cabgemini.png",
    "images/assets/home/cognizant.svg",
    "images/assets/home/dell.png",
    "images/assets/home/google.svg",
    "images/assets/home/ibm.png",
    "images/assets/home/infi.png",
    "images/assets/home/intel.png",
    "images/assets/home/lenovo.png",
    "images/assets/home/lti.png",
    "images/assets/home/micro.png",
    "images/assets/home/oracle.png",
    "images/assets/home/paypal.png",
    "images/assets/home/sap.webp",
    "images/assets/home/vm.png",
    "images/assets/home/wipro.jpg",

    # Tools
    "images/assets/services/ai-logo-659909916e430.webp",
    "images/assets/services/css-logo-65990991730e1.webp",
    "images/assets/services/figma-logo-6599099260b1f.webp",
    "images/assets/services/html-logo-65990992656e8.webp",
    "images/assets/services/jslogo-6599099365048.webp",
    "images/assets/services/ps-logo-6599099368107.webp",
    "images/assets/services/xd-logo-6599099456f15.webp",

    # Placed students
    "images/assets/home/pro1-6598ed834d8c9.webp",
    "images/assets/home/pro2-6598ed83b5cc2.webp",
    "images/assets/home/pro3-6598ed85d0566.webp",
    "images/assets/home/pro4-6598ed8646d90.webp",
    "images/assets/home/pro6-6598ed8816e35.webp",
    "images/assets/home/pro8-6598ed8840cd7.webp",
    "images/assets/home/pro9-6598ed89254e0.webp",
    "images/assets/home/pro10-6598ed8a1a8d4.webp",
    "images/assets/home/pro11-6598ed8a208f5.webp",
    "images/assets/home/pro12-6598ed8b08cb0.webp",
    "images/assets/home/pro13-6598ed8b1241e.webp",

    # Certificates
    "images/assets/home/cer2-1-6598ed76cad60.webp",
    "images/assets/home/whatsapp-image-2023-12-28-at-174228-560a1546-6598ed8be458d.webp",

    # Project Works
    "images/assets/services/1-65991ba1857e2.webp",
    "images/assets/services/2-65991ba2461b7.webp",
    "images/assets/services/3-65991ba37927f.webp",
    "images/assets/services/4-65991ba5deb2c.webp",

    # IIT Bombay event
    "images/assets/home/IMG-20240506-WA0046.webp",
    "images/assets/home/IMG-20240506-WA0042.webp",
    "images/assets/home/IMG-20240506-WA0043.webp",

    # Branches
    "images/assets/home/download11-6598ed7a6810e.webp",
    "images/assets/home/download-1-6598ed76e4705.webp",
    "images/assets/home/download-2-6598ed7819cc5.webp",
    "images/assets/home/download-2-6598ed77ac7cc.webp",
    "images/assets/home/download-4-6598ed792a0f4.webp",
    "images/assets/home/download-5-6598ed79961e9.webp",
    "images/assets/home/download-6598ed79ef30f.webp",
    "images/assets/home/download-3-6598ed78d3cc8.webp",

    # Hero / Course cards
    "images/cardd1-min-65c5ebf144571.webp",
    "images/cardd33-min-65c5ebf472ee5.webp",
    "images/cardd22-min-65c5ebf260a67.webp",
    "images/assets/home/ezgif.com-gif-to-webp-converter1.webp"
]

target_dir = os.path.abspath("public/downloaded")
os.makedirs(target_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for rel_path in images_to_download:
    url = BASE_URL + rel_path
    filename = os.path.basename(rel_path)
    dest_path = os.path.join(target_dir, filename)
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as response, open(dest_path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Downloaded: {filename}")
    except Exception as e:
        print(f"Failed {filename}: {e}")
