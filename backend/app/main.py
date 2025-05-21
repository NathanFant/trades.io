from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import user, listings

app = FastAPI()

app.include_router(user.router)
app.include_router(listings.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
