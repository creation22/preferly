# Deployment Configuration

## Backend (Render)
- URL: https://preferly.onrender.com
- MongoDB: Connected to MongoDB Atlas
- CORS: Configured to allow Vercel frontend

## Frontend (Vercel)
- URL: https://preferly.vercel.app
- API Endpoint: https://preferly.onrender.com/api

## Environment Variables Required

### Backend (.env)
```
PORT=5000
MONGO_URI=mongodb+srv://...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

### Frontend
No environment variables needed - API URL is hardcoded in api.js

## Deployment Steps

1. **Backend (Render)**
   - Push code to GitHub
   - Connect Render to repository
   - Set environment variables in Render dashboard
   - Deploy

2. **Frontend (Vercel)**
   - Push code to GitHub
   - Connect Vercel to repository
   - Deploy (automatic)

## CORS Configuration
Backend allows requests from:
- http://localhost:5173 (local dev)
- http://localhost:5174 (local dev)
- https://preferly.vercel.app (production)
