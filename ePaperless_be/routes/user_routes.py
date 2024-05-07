from fastapi import APIRouter

router = APIRouter()

@router.get("/users/")
async def get_users():
    return {"message": "List of users"}

@router.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"message": f"User with ID {user_id}"}
