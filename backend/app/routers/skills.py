from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import DB_skills, DB_User, DB_user_skills
from app.schema import SkillCreate, SkillOut, UserSkillCreate, UserSkillOut
from app.database import get_db
from sqlalchemy import and_

router = APIRouter(prefix="/skill", tags=["skills"])


# Later, to add new skills to the database
# @router.post("/", response_model=SkillCreate)
# def create_skill(skill_name: str, db: Session = Depends(get_db)):

#     existing_skill = db.query(DB_skills).filter(DB_skills.skill_name == skill_name).first()
#     if existing_skill:
#         raise HTTPException(status_code=400, detail="Skill already in database")


# output skill information
@router.get("/id/{id}", response_model=SkillOut)
async def get_skill_by_skill_id(id: int, db: Session = Depends(get_db)):
    skill = db.query(DB_skills).filter(DB_skills.skill_id == id).first()

    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")

    skill_out = SkillOut(skill_id=skill.skill_id, skill_name=skill.skill_name)

    return skill_out


@router.get("/{name}", response_model=SkillOut)
async def get_skill_by_name(name: str, db: Session = Depends(get_db)):
    skill = db.query(DB_skills).filter(DB_skills.skill_name == name).first()

    if not skill:
        raise HTTPException(status_code=404, detail="Skill not found")

    skill_out = SkillOut(skill_id=skill.skill_id, skill_name=skill.skill_name)

    return skill_out


@router.post("/", response_model=UserSkillOut)
async def assign_user_skill(user_skill: UserSkillCreate, db: Session = Depends(get_db)):

    db_user_skill = DB_user_skills(**user_skill.model_dump())

    db.add(db_user_skill)
    db.commit()
    db.refresh(db_user_skill)

    user = UserSkillOut.model_validate(
        {"user_id": user_skill.user_id, "skill_id": user_skill.skill_id}
    )

    return user


@router.delete("/")
async def delete_user_skill(user_skill: UserSkillCreate, db: Session = Depends(get_db)):

    db_user_skill = (
        db.query(DB_user_skills)
        .filter(
            and_(
                DB_user_skills.skill_id == user_skill.skill_id,
                DB_user_skills.user_id == user_skill.user_id,
            )
        )
        .first()
    )

    if not db_user_skill:
        raise HTTPException(status_code=404, detail="User does not have skill assigned")
    print(db_user_skill)
    db.delete(db_user_skill)
    db.commit()

    return {
        "Internal Message": f"User with id of {user_skill.user_id} had skill with id {user_skill.skill_id} removed!"
    }
