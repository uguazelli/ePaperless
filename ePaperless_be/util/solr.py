import os
import requests
import uuid
import time

# Load environment variables from .env file
from dotenv import load_dotenv
load_dotenv()
SOLR_URL = os.getenv("SOLR_URL")

def solr(file_name, OCR, tags,meta):
    result = requests.post(SOLR_URL, json={
                "id": uuid.uuid4(),
                "doc_name": file_name,
                "extracted_text": OCR,
                "content_type": "",
                "upload_date": time.time(),
                "creator": "",
                "tags": "",
                "description": ""
    })
    print(result)