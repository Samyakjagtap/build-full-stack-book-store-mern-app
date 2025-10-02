# Render Deployment Configuration

## Backend Web Service
- **Service Type**: Web Service
- **Environment**: Node
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Root Directory**: `backend`

## Frontend Static Site
- **Service Type**: Static Site
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Root Directory**: `frontend`

## Environment Variables Required:
- NODE_ENV=production
- PORT=10000 (auto-set by Render)
- DB_URL=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret_key

## Post-Deployment:
1. Update frontend baseURL with your backend service URL
2. Update backend CORS origins with your frontend URL
3. Test all API endpoints