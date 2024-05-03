import meilisearch_python_sdk
import os
import requests
import uuid
import time
import json

# client = meilisearch_python_sdk.AsyncClient('http://localhost:7700', 'masterkey')
client = meilisearch_python_sdk.AsyncClient("http://localhost:7700")


async def post_values(
    file_name,
    sin="N/A",
    extracted_text="N/A",
    content_type="N/A",
    tags="N/A",
    meta="N/A",
    description="N/A",
):
    # An index is where the documents are stored.
    index = client.index("epaperless")
    data = [
        {
            "id": str(uuid.uuid4()),
            "doc_name": file_name,
            "sin": sin,
            "extracted_text": extracted_text,
            "content_type": content_type,
            "upload_date": time.time(),
            "creator": "",
            "tags": tags,
            "meta": meta,
            "description": description,
        }
    ]

    # If the index 'movies' does not exist, Meilisearch creates it when you first add the documents.
    await index.add_documents(data)  # => { "uid": 0 }
