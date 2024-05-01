import os
import uvicorn
from typing import List, Dict
from fastapi import FastAPI, UploadFile, Depends
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from util.auth import validate_api_key
from util.aws_boto3 import get_objects, get_objects_with_presigned_urls


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
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["X-API-Key"],
)



@app.get("/")
def read_root():
    return {"Message": "ePaperless, status ok"}



@app.get("/test-api-key")
async def protected_endpoint(api_key: str = Depends(validate_api_key)):  # Use the dependency if you have auth.py
    return {"message": "Access granted!"}



@app.get("/get_objects", response_model=List[Dict[str, str]])
async def get_s3_objects():
    objects = await get_objects()  # Call fetch_objects instead of get_objects
    return objects



@app.get("/objects", response_model=List[Dict[str, str]])
def read_objects():
    return get_objects_with_presigned_urls()



@app.post("/uploadfiles", dependencies=[Depends(validate_api_key)])
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



@app.get("/upload")
async def main():
    content = """
        <form action="/uploadfiles/" enctype="multipart/form-data" method="post">
        <input name="files" type="file" multiple>
        <input type="submit">
        </form>
        </body>
    """
    return HTMLResponse(content=content)





if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)