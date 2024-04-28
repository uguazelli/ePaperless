import os
import asyncio

from datetime import datetime
from util.aws_boto3 import upload

# Load environment variables from .env file
from dotenv import load_dotenv
load_dotenv()


LOG_FILE = os.getenv("LOG_FILE")
UPLOADS_DIR = os.getenv("UPLOADS_DIR")


def log_result(timestamp, filename, result):
    with open(LOG_FILE, "a") as f:
        f.write(f"{timestamp} {filename} {result}\n")

async def periodic_upload_check():
    while True:
        if not os.path.exists(LOG_FILE):
            with open(LOG_FILE, "w") as f:
                f.write("")

        for filename in os.listdir(UPLOADS_DIR):
            file_path = os.path.join(UPLOADS_DIR, filename)
            if os.path.isfile(file_path):
                timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
                result = upload(file_path, filename)
                log_result(timestamp, filename, result)
                os.remove(file_path)

        await asyncio.sleep(5)  # Check every 5 seconds