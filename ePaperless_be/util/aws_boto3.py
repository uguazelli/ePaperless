import boto3
from botocore.exceptions import ClientError
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
    try:
        response = get_s3_client().upload_file(file_path, AWS_S3, file_name)
        return response['Body']
    
    except ClientError as e:
        print(e)



def get_object_url(obj_name):
  try:
    presigned_url = get_s3_client().generate_presigned_url(
      ClientMethod='get_object',
      Params={'Bucket': AWS_S3, 'Key': obj_name},
      ExpiresIn= 60 * 60 #expiration_time_in_seconds
    )
    return presigned_url
  
  except ClientError as e:
    print(e)
