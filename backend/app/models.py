from sqlalchemy import (
    Column,
    Integer,
    String,
    ForeignKey,
    Text,
    Boolean,
    Float,
    Date,
    UniqueConstraint,
)
from sqlalchemy.ext.declarative import declarative_base
from datetime import date

Base = declarative_base()


class DB_User(Base):
    __tablename__ = "users"
    user_id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), nullable=False, unique=True)
    email = Column(String(100), nullable=False, unique=True)
    password = Column(Text, nullable=False)
    is_admin = Column(Boolean, default=False)
    created_at = Column(Date, default=date.today)


class DB_Listings(Base):
    __tablename__ = "listings"
    listing_id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    description = Column(Text, nullable=False)
    latitude = Column(Float, default=1)
    longitude = Column(Float, default=1)
    price = Column(Float, nullable=False)
    completed = Column(Boolean, default=False)
    pending = Column(Boolean, default=False)
    required_skill = Column(String(50), nullable=False)
    poster_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"))
    created_at = Column(Date, default=date.today)


class DB_Requests(Base):
    __tablename__ = "requests"
    request_id = Column(Integer, primary_key=True, index=True)
    listing_id = Column(Integer, ForeignKey("listings.listing_id", ondelete="CASCADE"))
    worker_id = Column(Integer, ForeignKey("users.user_id", ondelete="CASCADE"))
    # message = Column(Text, nullable=False)
    # status = Column(String(50), default="pending")
    created_at = Column(Date, default=date.today)


class DB_user_skills(Base):
    __tablename__ = "user_skills"
    user_id = Column(
        Integer, ForeignKey("users.user_id", ondelete="CASCADE"), primary_key=True
    )
    skill_id = Column(Integer, ForeignKey("skills.skill_id"), primary_key=True)

    __table_args__ = (
        UniqueConstraint("user_id", "skill_id", name="unique_skill_pair"),
    )


class DB_skills(Base):
    __tablename__ = "skills"
    skill_id = Column(Integer, primary_key=True, index=True)
    skill_name = Column(String(50), nullable=False, unique=True)
