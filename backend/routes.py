from fastapi import APIRouter
from database import SessionLocal
from models import Preferences

router = APIRouter()

@router.post("/preferences")
def save_preferences(user_id: str, interests: list[str]):
    db = SessionLocal()
    pref = Preferences(user_id=user_id, interests=",".join(interests))
    db.add(pref)
    db.commit()
    return {"status": "Preferences saved"}

@router.post("/automation/start")
def start_automation(user_id: str):
    # Trigger Puppeteer/Selenium scripts
    return {"status": "Automation started"}
