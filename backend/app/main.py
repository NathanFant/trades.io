from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import user, listings, requests

app = FastAPI()

app.include_router(user.router)
app.include_router(listings.router)
app.include_router(requests.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
