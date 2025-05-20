from pydantic import BaseModel, EmailStr, Field
from typing import List
from datetime import datetime

# USER


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


# LISTING


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


# REQUEST


class RequestBase(BaseModel):
    listing_id: int
    # message: str
    worker_id: int


class RequestCreate(RequestBase):
    pass


class RequestOut(RequestBase):
    request_id: int
    # status: str = "pending"
    created_at: str

    class Config:
        orm_mode = True


# SKILL


# class SkillBase(BaseModel):
# skill_name: str = Field(..., max_length=50)


# class SkillCreate(SkillBase):
# pass


# class SkillOut(SkillBase):
# skill_id: int

# class Config:
# orm_mode = True


# USER SKILL


class UserSkillCreate(BaseModel):
    user_id: int
    skill_id: int


class UserSkillOut(UserSkillCreate):

    class Config:
        orm_mode = True
