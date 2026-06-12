from sqlalchemy import Column, String, Integer
from database import Base

class Preferences(Base):
    __tablename__ = "preferences"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    interests = Column(String)
