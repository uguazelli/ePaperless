import requests
import os


from dotenv import load_dotenv
load_dotenv()
MILI_SEARCH_BASE_URL = os.getenv("MILI_SEARCH_BASE_URL")
MILI_SEARCH_INDEX = os.getenv("MILI_SEARCH_INDEX")



def search_with_pagination(limit=10, offset=0):
    
    endpoint = f"{MILI_SEARCH_BASE_URL}/indexes/{MILI_SEARCH_INDEX}/search"
    headers = {"Content-Type": "application/json"}
    data = { "offset": offset, "limit": limit}

    response = requests.post(endpoint, headers=headers, json=data)
    result = response.json()
    
    return result['hits']

