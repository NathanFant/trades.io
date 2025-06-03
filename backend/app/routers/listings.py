from fastapi import APIRouter, Depends, HTTPException, status
from app.models import DB_Listings
from sqlalchemy.orm import Session
from app.schema import ListingCreate, ListingOut
from app.database import get_db

router = APIRouter(tags=["listings"])


@router.get("/users/{poster_id}/listings", response_model=list[ListingOut])
async def get_listings_by_user(poster_id: int, db: Session = Depends(get_db)):

    return [
        ListingOut.model_validate(listing)
        for listing in db.query(DB_Listings)
        .filter(DB_Listings.poster_id == poster_id)
        .all()
    ]


@router.get("/listings", response_model=list[ListingOut])
async def get_listings(db: Session = Depends(get_db)):
    return [
        ListingOut.model_validate(listing) for listing in db.query(DB_Listings).all()
    ]


@router.post("/listings", response_model=ListingOut)
async def create_listing(listing: ListingCreate, db: Session = Depends(get_db)):
    db_listing = DB_Listings(**listing.model_dump())
    db.add(db_listing)
    db.commit()
    db.refresh(db_listing)
    return ListingOut.model_validate(db_listing)


@router.get("/listings/{listing_id}", response_model=ListingOut)
async def get_listing_by_id(listing_id: int, db: Session = Depends(get_db)):
    return ListingOut.model_validate(
        db.query(DB_Listings).filter(DB_Listings.listing_id == listing_id).first()
    )


@router.delete("/listings/{listing_id}")
async def delete_listing(listing_id: int, db: Session = Depends(get_db)):
    listing = db.query(DB_Listings).filter(DB_Listings.listing_id == listing_id).first()
    if not listing:
        raise HTTPException(status_code=404, detail="Listing not found")

    db.delete(listing)
    db.commit()
    return {"detail": "Listing deleted successfully"}


@router.get("/listings/skill/{skill_name}", response_model=list[ListingOut])
async def get_listings_by_skill(skill_name: str, db: Session = Depends(get_db)):
    listings = (
        db.query(DB_Listings).filter(DB_Listings.required_skill == skill_name).all()
    )

    if not listings:
        raise HTTPException(status_code=404, detail="No listings found for this skill")

    return [ListingOut.model_validate(listing) for listing in listings]
