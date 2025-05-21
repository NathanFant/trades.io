from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import DB_User
from app.schema import UserCreate, UserOut, UserLogin
from app.database import get_db
import bcrypt
from datetime import datetime


router = APIRouter(prefix="/users", tags=["users"])


@router.post("/", response_model=UserOut)
def create_user(user: UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(DB_User).filter(DB_User.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    bytes_pw = user.password.encode("utf-8")
    salt = bcrypt.gensalt()
    unhashed_pw = bcrypt.hashpw(bytes_pw, salt)
    hashed_pw = unhashed_pw.decode("utf-8")

    db_user = DB_User(
        username=user.username,
        email=user.email,
        password=hashed_pw,
        # is_admin defaults to False
        created_at=datetime.now().strftime("%m-%d-%Y %H:%M:%S"),
    )

    db.add(db_user)
    db.commit()
    db.refresh(db_user)

    return db_user


@router.post("/login", response_model=UserOut)
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(DB_User).filter(DB_User.email == user.email).first()
    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid email or password")

    if not bcrypt.checkpw(
        user.password.encode("utf-8"), db_user.password.encode("utf-8")
    ):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return db_user

@router.get("/@{user_name}", response_model=UserOut)
def get_user_by_name(user_name: str, db: Session = Depends(get_db)):
    user = db.query(DB_User).filter(DB_User.username == user_name).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@router.get("/{user_id}", response_model=UserOut)
def get_user_by_id(user_id: int, db: Session = Depends(get_db)):
    user = db.query(DB_User).filter(DB_User.user_id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user
