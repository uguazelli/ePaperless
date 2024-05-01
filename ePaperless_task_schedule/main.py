import os
import asyncio
from datetime import datetime
from util.extract_metadata import parse_filename
from util.extract_text import extract_text_from_document
from util.mili_search import post_values
from util.thumbnails import process_file
from util.aws_boto3 import upload_to_s3

from dotenv import load_dotenv
load_dotenv()
LOG_FILE = os.getenv("LOG_FILE")
UPLOADS_DIR = os.getenv("UPLOADS_DIR")


def log(message):
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    with open(LOG_FILE, "a") as f:
        f.write(f"{timestamp} {message}\n")


async def periodic_upload_check():
    print("System is now listening to the folder for new files...\n")
    while True:
        if not os.path.exists(LOG_FILE):
            with open(LOG_FILE, "w") as f:
                f.write("")


        for file_name in os.listdir(UPLOADS_DIR):
            original_file_path = os.path.join(UPLOADS_DIR, file_name)

            sin, tags, metadata, file_path, new_file_name = await parse_filename(original_file_path)
            print(f'sin: {sin}\n tags: {tags}\n meatadata: {metadata}\n new file_path: {file_path}\n new_file_name: {new_file_name}\n')

            thumbnail_path, thumbnail_filename = await process_file(new_file_name, file_path)
            print('Thumbnail Path: ', thumbnail_path)
            print('Thumbnail Name: ', thumbnail_filename)

            ocr = extract_text_from_document(file_path)
            #print('Text extracted: \n', ocr)

            milisearch_result = post_values(file_name, sin, ocr, "N/A", tags, metadata, "N/A")
            print("Milisearch result: ", milisearch_result)

            result_file = await upload_to_s3(file_path, new_file_name)
            result_thumb = await upload_to_s3(thumbnail_path, thumbnail_filename)
            print(f'S3 resut file: {result_file}')
            print(f'S3 resut thumb: {result_thumb}')
            

            log(f'{file_name} {result_file}')
            log(f'{thumbnail_filename} {result_thumb}')

            os.remove(file_path)
            os.remove(thumbnail_path)
            
        await asyncio.sleep(5)  # Check every 5 seconds


async def start_periodic_upload_check():
    while True:
        await periodic_upload_check()


if __name__ == "__main__":
    asyncio.run(start_periodic_upload_check())


# @@SIN=12345~TAGS=mytag1,mytag2~METADATA=meta1=example1,meta2=example2~FILENAME=myfile.pdf
