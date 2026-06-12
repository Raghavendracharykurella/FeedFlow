from fastapi import FastAPI
from routes import router

app = FastAPI(title="FeedFlow API")
app.include_router(router)
