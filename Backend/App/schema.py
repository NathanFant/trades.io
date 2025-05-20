from Pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

# User


class UserBase(BaseModel):
    username: str = Field(..., max_length=50)
    email: EmailStr


class UserCreate(UserBase):
    password: str


class UserOut(UserBase):
    user_id: int
    is_admin: bool = False
    created_at: str

    class Config:
        orm_mode = True


# Listing


class ListingBase(BaseModel):
    title: str
    description: str
    latitude: float
    longitude: float
    price: float


class ListingCreate(ListingBase):
    poster_id: int


class ListingOut(ListingBase):
    listing_id: int
    completed: bool = False
    pending: bool = False
    created_at: str
    poster_id: int

    class Config:
        orm_mode = True
