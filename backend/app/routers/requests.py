from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import DB_Requests
from app.schema import RequestCreate, RequestOut
from app.database import get_db

router = APIRouter(prefix="/requests", tags=["requests"])


@router.post("/", response_model=RequestOut)
async def create_request(request: RequestCreate, db: Session = Depends(get_db)):
    existing = (
        db.query(DB_Requests)
        .filter_by(listing_id=request.listing_id, worker_id=request.worker_id)
        .first()
    )
    if existing:
        raise HTTPException(status_code=400, detail="Request already exists")

    db_request = DB_Requests(**request.model_dump())
    db.add(db_request)
    db.commit()
    db.refresh(db_request)
    return db_request


@router.get("/", response_model=list[RequestOut])
async def get_all_requests(db: Session = Depends(get_db)):
    return db.query(DB_Requests).all()


@router.get("/listing/{listing_id}", response_model=list[RequestOut])
async def get_requests_by_listing(listing_id: int, db: Session = Depends(get_db)):
    return db.query(DB_Requests).filter(DB_Requests.listing_id == listing_id).all()


@router.get("/worker/{worker_id}", response_model=list[RequestOut])
async def get_requests_by_worker(worker_id: int, db: Session = Depends(get_db)):
    return db.query(DB_Requests).filter(DB_Requests.worker_id == worker_id).all()


@router.put("/{request_id}/status", response_model=RequestOut)
async def update_request_status(
    request_id: int, status: str, db: Session = Depends(get_db)
):
    db_request = (
        db.query(DB_Requests).filter(DB_Requests.request_id == request_id).first()
    )
    if not db_request:
        raise HTTPException(status_code=404, detail="Request not found")

    db_request.status = status
    db.commit()
    db.refresh(db_request)
    return db_request
