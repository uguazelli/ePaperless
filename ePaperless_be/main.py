import os
import uvicorn
from typing import List, Dict
from fastapi import FastAPI, UploadFile, Depends
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from util.auth import validate_api_key
from util.aws_boto3 import get_object_url
from util.mili_search import search_with_pagination

app = FastAPI()

# @app.on_event("startup")
# async def startup_event():
#     asyncio.create_task(start_periodic_upload_check())



# Configure CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",  # Allow requests from your React application
    "*"
    
]



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*", "OPTIONS"],  # Add OPTIONS
    allow_headers=["X-API-Key", "Authorization", "Content-Type"],
)



@app.get("/")
def read_root():
    return {"Message": "ePaperless, status ok"}



@app.get("/test-api-key")
async def protected_endpoint(api_key: str = Depends(validate_api_key)):
    return {"message": "Access granted!"}



@app.get("/object/{obj_name}")
def get_object(obj_name: str):
    return get_object(obj_name)



@app.get("/objects")
def get_objects(limit: int = 10, offset: int = 0, api_key: str = Depends(validate_api_key)):

    mili_result = search_with_pagination(limit, offset)

    for obj in mili_result:
        obj['url'] = get_object_url(obj['doc_name'])
        thumb = "thumbnail_" + obj['doc_name']
        basename, extension = os.path.splitext(thumb)
        thumb = basename + ".jpg"
        obj['thumbnail_url'] = get_object_url(thumb)
    
    return mili_result




# @app.post("/uploadfiles", dependencies=[Depends(validate_api_key)])
@app.post("/uploadfiles")
async def create_upload_files(files: List[UploadFile]):
    
    # Save the files to a folder
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
            # No need to close file as it's opened using synchronous open
            filenames.append(file.filename)

    return {"filenames": filenames}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)