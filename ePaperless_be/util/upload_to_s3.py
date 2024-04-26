import boto3
import os

# Load environment variables from .env file
from dotenv import load_dotenv
load_dotenv()
AWS_S3 = os.getenv("AWS_S3")
AWS_REGION = os.getenv("AWS_REGION")
AWS_ACCESS_KEY = os.getenv("AWS_ACCESS_KEY")
AWS_SECRET_KEY = os.getenv("AWS_SECRET_KEY")


# Create an S3 client
s3 = boto3.client('s3')


def upload(file_path, file_name):
    print('Upload started')

    s3_client = boto3.client(
        service_name='s3',
        region_name=AWS_REGION,
        aws_access_key_id=AWS_ACCESS_KEY,
        aws_secret_access_key=AWS_SECRET_KEY
    )

    response = s3_client.upload_file(file_path, AWS_S3, file_name)

    print(f'upload_log_to_aws response: {response}')
    return response