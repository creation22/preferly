# Deployment Configuration

## Backend (Render)
- URL: https://preferly.onrender.com
- MongoDB: Connected to MongoDB Atlas
- CORS: Configured to allow Vercel frontend

### Render Dashboard Settings
**IMPORTANT:** You must configure these settings in the Render dashboard:

1. Go to https://dashboard.render.com
2. Select your `preferly` service
3. Go to **Settings** → **Build & Deploy**
4. Set the following:
   - **Build Command**: `npm run install-backend`
   - **Start Command**: `npm start`
   - **Root Directory**: Leave empty (or set to `.`)

### Environment Variables (Render Dashboard)
Set these in the Render dashboard under **Environment**:
```
PORT=5000
MONGO_URI=mongodb+srv://...
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

## Frontend (Vercel)
- URL: https://preferly.vercel.app
- API Endpoint: https://preferly.onrender.com/api

### Vercel Settings
- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## Files Created for Deployment

### Root `package.json`
Contains scripts to install and start the backend from the monorepo root:
- `npm run install-backend` - Installs backend dependencies
- `npm start` - Starts the backend server

### `render.json`
Render configuration (may not be needed if dashboard settings are correct)

## CORS Configuration
Backend allows requests from:
- http://localhost:5173 (local dev)
- http://localhost:5174 (local dev)
- https://preferly.vercel.app (production)
