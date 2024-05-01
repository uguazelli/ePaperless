import boto3
import os
import asyncio
import datetime

# Load environment variables from .env file
from dotenv import load_dotenv
load_dotenv()
AWS_S3 = os.getenv("AWS_S3")
AWS_REGION = os.getenv("AWS_REGION")
AWS_ACCESS_KEY = os.getenv("AWS_ACCESS_KEY")
AWS_SECRET_KEY = os.getenv("AWS_SECRET_KEY")


def get_s3_client():
    return boto3.client(
        service_name='s3',
        region_name=AWS_REGION,
        aws_access_key_id=AWS_ACCESS_KEY,
        aws_secret_access_key=AWS_SECRET_KEY
    )


async def upload_to_s3(file_path, file_name):
    print('Upload started')
    s3_client = get_s3_client()
    timestamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    try:
        await asyncio.to_thread(s3_client.upload_file, file_path, AWS_S3, file_name)
        print(f'✅ {timestamp} Upload completed successfully\n🎉 {file_name}')
        return True  # Indicate success
    except Exception as e:
        print(f'❌ {timestamp} Upload failed: {e}')
        return False  # Indicate failure

