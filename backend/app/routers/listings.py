from fastapi import APIRouter, Depends, HTTPException
from app.models import DB_Listings
from sqlalchemy.orm import Session
from app.schema import ListingCreate, ListingOut
from app.database import get_db

router = APIRouter(prefix="/listings", tags=["Listings"])


@router.get("/user/{poster_id}", response_model=list[ListingOut])
async def get_listings_by_user(poster_id: int, db: Session = Depends(get_db)):

    return [
        ListingOut.model_validate(listing)
        for listing in db.query(DB_Listings)
        .filter(DB_Listings.poster_id == poster_id)
        .all()
    ]


@router.get("/", response_model=list[ListingOut])
async def get_listings(db: Session = Depends(get_db)):
    return [
        ListingOut.model_validate(listing) for listing in db.query(DB_Listings).all()
    ]


@router.post("/create", response_model=ListingOut)
async def create_listing(listing: ListingCreate, db: Session = Depends(get_db)):
    db_listing = DB_Listings(**listing.model_dump())
    db.add(db_listing)
    db.commit()
    db.refresh(db_listing)
    return ListingOut.model_validate(db_listing)


@router.get("/id/{listing_id}", response_model=ListingOut)
async def get_listing_by_id(listing_id: int, db: Session = Depends(get_db)):
    return ListingOut.model_validate(
        db.query(DB_Listings).filter(DB_Listings.listing_id == listing_id).first()
    )
