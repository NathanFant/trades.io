from pydantic import BaseModel, EmailStr, Field
from datetime import date

# USER


class UserBase(BaseModel):
    username: str = Field(..., max_length=50)
    email: EmailStr


class UserCreate(UserBase):
    password: str


class UserLogin(BaseModel):  # Nathan added this to solve login endpoints
    email: EmailStr
    password: str


class UserOut(UserBase):
    user_id: int
    is_admin: bool = False
    created_at: date

    class Config:
        from_attributes = True


# LISTING


class ListingBase(BaseModel):
    title: str
    description: str
    latitude: float = 1
    longitude: float = 1
    price: float
    required_skill: str = "undefined"


class ListingCreate(ListingBase):
    poster_id: int


class ListingOut(ListingBase):
    listing_id: int
    completed: bool = False
    pending: bool = False
    created_at: date
    poster_id: int

    class Config:
        from_attributes = True


# REQUEST


class RequestBase(BaseModel):
    listing_id: int
    # message: str
    worker_id: int


class RequestCreate(RequestBase):
    pass


class RequestOut(RequestBase):
    request_id: int
    status: str = "pending"
    created_at: date

    class Config:
        from_attributes = True


# SKILL


class SkillCreate(BaseModel):
    skill_name: str


class SkillOut(SkillCreate):
    skill_id: int

    class Config:
        from_attributes = True


# USER SKILL


class UserSkillCreate(BaseModel):
    user_id: int
    skill_id: int


class UserSkillOut(UserSkillCreate):

    class Config:
        from_attributes = True
