import os
import requests
import uuid
import time

# Load environment variables from .env file
from dotenv import load_dotenv
load_dotenv()
SOLR_URL = os.getenv("SOLR_URL")

def post(file_name, sin="N/A", extracted_text="N/A", content_type="N/A", tags="N/A", meta="N/A", description="N/A"):
    result = requests.post(SOLR_URL, json=[{
                "id": str(uuid.uuid4()),
                "doc_name": file_name,
                "sin": sin,
                "extracted_text": extracted_text,
                "content_type": content_type,
                "upload_date": time.time(),
                "creator": "",
                "tags": tags,
                "meta": meta,
                "description": description
    }])
    print(result)
    return result