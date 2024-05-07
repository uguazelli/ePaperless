import os
import sys
from typing import List
from fastapi import APIRouter, UploadFile, Depends
# import modules from the parent directory
from dependencies import validate_api_key
from util.aws_boto3 import get_object_url
from util.mili_search import search_with_pagination

# Add the parent directory to the Python path
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.abspath(os.path.join(current_dir, os.pardir))
sys.path.append(parent_dir)





router = APIRouter()



@router.get("/test-api-key")
async def protected_endpoint(api_key: str = Depends(validate_api_key)):
    print(os.path.abspath(os.path.dirname(__file__)))
    return {"message": "Access granted!"}



@router.get("/object/{obj_name}")
def get_object(obj_name: str):
    return get_object(obj_name)



@router.get("/objects")
def get_objects(limit: int = 10, offset: int = 0, api_key: str = Depends(validate_api_key)):

    mili_result = search_with_pagination(limit, offset)

    for obj in mili_result:
        obj['url'] = get_object_url(obj['doc_name'])
        thumb = "thumbnail_" + obj['doc_name']
        basename, extension = os.path.splitext(thumb)
        thumb = basename + ".jpg"
        obj['thumbnail_url'] = get_object_url(thumb)
    
    return mili_result



@router.post("/uploadfiles", dependencies=[Depends(validate_api_key)])
async def create_upload_files(files: List[UploadFile]):
    
    folder = "uploads/"
    os.makedirs(folder, exist_ok=True)  # Ensure the folder exists, create if not

    filenames = []
    for file in files:
        try:
            print(file)
            file_path = os.path.join(folder, file.filename)
            with open(file_path, "wb") as buffer:  # Use synchronous context manager
                buffer.write(await file.read())  # Await reading from the file and write to buffer

        except Exception as error:
            print("An error occurred:", error)

        finally:
            filenames.append(file.filename)

    return {"filenames": filenames}