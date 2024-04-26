import uvicorn
import os
import asyncio
import util.upload_to_s3 as s3
from typing import List

from fastapi import FastAPI, UploadFile
from fastapi.responses import HTMLResponse
from util.text_extraction import extract_text_from_document
from util.task_scheduler import periodic_upload_check



app = FastAPI()


@app.on_event("startup")
async def startup_event():
    asyncio.create_task(periodic_upload_check())


@app.get("/")
def read_root():
    return {"Message": "ePaperless, status ok"}


@app.get("/s3")
def upload_aws_s3():
    # file_path ="./uploads/1713442948981.pdf"

    # Path to the file
    file_path = 'myfile.jpg'

    file_path = os.path.join(os.getcwd(), file_path)
    file_name = os.path.basename(file_path)
    file_extension = os.path.splitext(file_name)[1]
    file_size = os.path.getsize(file_path)
    file_metadata = os.path.getmtime(file_path)

    ocr = extract_text_from_document(file_path)
  

    return {"Message": "Upload to S3 finished", "OCR": ocr}


@app.post("/uploadfiles/")
async def create_upload_files(files: List[UploadFile]):
    # Save the files to a folder
    folder = "uploads/"
    os.makedirs(folder, exist_ok=True)  #
        
    for file in files:
        try:
            print(file)
            file_path = os.path.join(folder, file.filename)
            with open(file_path, "wb") as buffer:
                buffer.write(await file.read())

        except Exception as error:
            print("An error occurred:", error) # An error occurred: name 'x' is not defined

        finally:
            file.file.close()
    return {"filenames": [file.filename for file in files]}

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