import os
from fastapi import Depends, HTTPException, status
from fastapi.security import APIKeyHeader

# Load environment variables from .env file
from dotenv import load_dotenv
load_dotenv()

API_KEY = os.getenv("API_KEY")

async def get_api_key(api_key_header: str = Depends(APIKeyHeader(name="X-API-Key"))):
    return api_key_header

async def validate_api_key(api_key: str = Depends(get_api_key)):
    # Replace with your actual validation logic (e.g., database lookup)
    if api_key != API_KEY:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Unauthorized",  # Generic error message
        )
    return api_key