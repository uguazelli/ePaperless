import boto3
import os

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

def upload(file_path, file_name):
    print('Upload started')
    response = get_s3_client().upload_file(file_path, AWS_S3, file_name)
    print(f'upload_log_to_aws response: {response}')
    return response


def get_objects():
    try:
        response = get_s3_client().list_objects_v2(Bucket="epaperless", Prefix='', Delimiter='/')
        object_keys = [obj['Key'] for obj in response.get('Contents', []) if not obj['Key'].startswith("thumbnail_")]
    except Exception as e:
        print(f"Error retrieving objects from bucket epaperless: {e}")
        return []
    return object_keys


def generate_presigned_url(object_key, expiration=3600):
    try:
        url = get_s3_client().generate_presigned_url(
            'get_object',
            Params={'Bucket': AWS_S3, 'Key': object_key},
            ExpiresIn=expiration
        )
        return url
    except Exception as e:
        print(f"Error generating presigned URL for object {object_key}: {e}")
        return None
    

def get_objects_with_presigned_urls():
    object_keys = get_objects()
    object_urls = []
    for object_key in object_keys:
        url = generate_presigned_url(object_key)
        # Generating thumbnail key with original extension
        thumbnail_key = f"thumbnail_{object_key.rsplit('.', 1)[0]}.jpg"
        thumbnail_url = generate_presigned_url(thumbnail_key)
        if url and thumbnail_url:
            object_urls.append({"object_key": object_key, "url": url, "thumbnail_url": thumbnail_url})  
    return object_urls


