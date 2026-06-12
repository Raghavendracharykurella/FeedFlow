# FeedFlow

FeedFlow is a mobile application that helps users personalize their Instagram feed by selecting interests and automating engagement.

## 🚀 Features
- Connect Instagram account
- Select content preferences (boost/reduce topics)
- Activate feed personalization
- Monitor automation status and analytics
- Lightweight, modern UI

## 🛠️ Tech Stack
- **Frontend:** React Native (Expo)
- **Backend:** FastAPI + PostgreSQL
- **Automation:** Puppeteer (JS), Selenium (Python), Postman tests
- **Deployment:** Microsoft Azure DevOps pipelines

## 📂 Project Structure
FeedFlow/
├── frontend/ (React Native app)
├── backend/ (FastAPI + PostgreSQL + automation)
├── devops/ (Azure pipeline)
└── README.md

Code

## ⚙️ Setup

### Frontend
```bash
cd frontend
npm install
expo start
Backend
bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
Automation
bash
cd backend/automation
npm install puppeteer
python selenium_tests.py
