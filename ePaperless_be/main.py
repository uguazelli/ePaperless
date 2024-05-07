import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user_routes, object_routes


app = FastAPI()

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


app.include_router(user_routes.router, prefix="/api")
app.include_router(object_routes.router, prefix="/api")


@app.get("/")
def read_root():
    return {"Message": "ePaperless, status ok"}



if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)