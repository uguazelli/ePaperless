import os

from PIL import Image, ImageDraw, ImageFont
from pdf2image import convert_from_path
from pdf2image.exceptions import PDFPageCountError
from dotenv import load_dotenv

load_dotenv()
LOG_FILE = os.getenv("LOG_FILE")
UPLOADS_DIR = os.getenv("UPLOADS_DIR")
PLACEHOLDER_PATH = os.getenv("PLACEHOLDER_PATH")


async def process_file(filename, file_path):
    try:
        extension = os.path.splitext(filename.lower())[1]
        match extension:
            case '.png' | '.jpg' | '.jpeg':
                thumbnail_path = create_image_thumbnail(file_path)
            case '.pdf':
                thumbnail_path = create_pdf_thumbnail(file_path)
            case '.txt' | '.json' | '.yaml' | '.env':
                thumbnail_path = create_text_thumbnail(file_path)
            case _:
                thumbnail_path = PLACEHOLDER_PATH
    except PDFPageCountError:
        thumbnail_path = PLACEHOLDER_PATH

    thumbnail_filename = "thumbnail_" + os.path.splitext(filename)[0] + ".jpg"
    return thumbnail_path, thumbnail_filename
       
        
def create_image_thumbnail(image_path):
    with Image.open(image_path) as img:
        img.thumbnail((128, 128))  # Resize the image to 128x128 pixels
        img = img.convert("RGB")  # Convert the image to RGB mode
        filename_without_ext = os.path.splitext(os.path.basename(image_path.lower()))[0]
        thumbnail_path = os.path.join(UPLOADS_DIR, f"thumbnail_{filename_without_ext}.jpg")
        img.save(thumbnail_path, "JPEG")
    return thumbnail_path


def create_pdf_thumbnail(pdf_path):
    pages = convert_from_path(pdf_path, 500)
    filename_without_ext = os.path.splitext(os.path.basename(pdf_path.lower()))[0]
    thumbnail_path = os.path.join(UPLOADS_DIR, f"thumbnail_{filename_without_ext}.jpg")
    pages[0].thumbnail((128, 128))
    pages[0].convert("RGB").save(thumbnail_path, "JPEG")
    return thumbnail_path


def create_text_thumbnail(text_path):
    with open(text_path, 'r') as file:
        lines = file.readlines()[:5]  # Get the first 5 lines
    filename_without_ext = os.path.splitext(os.path.basename(text_path.lower()))[0]
    thumbnail_path = os.path.join(UPLOADS_DIR, f"thumbnail_{filename_without_ext}.jpg")
    img = Image.new('RGB', (200, 200), color=(0, 0, 0))  # Black background
    d = ImageDraw.Draw(img)
    text = '\n'.join(lines)
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)  # Use a larger font size
    text_bbox = d.textbbox((0, 0), text, font=font)  # Get the bounding box of the text
    text_w = text_bbox[2] - text_bbox[0]  # Width of the text
    text_h = text_bbox[3] - text_bbox[1]  # Height of the text
    w, h = img.size
    x = (w - text_w) / 2
    y = (h - text_h) / 2
    d.text((x, y), text, fill=(255, 255, 255), font=font)  # White text
    img.save(thumbnail_path, "JPEG")
    return thumbnail_path