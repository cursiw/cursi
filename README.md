# Fantasy Football Tournament v2

A full-stack application for managing fantasy football tournaments with a cyberpunk tactical aesthetic.

## Project Structure

- `backend/` - FastAPI backend with MongoDB
- `frontend/` - React frontend with Tailwind CSS and shadcn/ui
- `tests/` - Test files
- `test_reports/` - Test reports
- `design_guidelines.json` - UI/UX design specifications

## Prerequisites

- **Node.js 18+** : [Download from nodejs.org](https://nodejs.org/)
- **Python 3.11+** : [Download from python.org](https://python.org)
- **MongoDB** : [Download from mongodb.com](https://mongodb.com) or use Docker
- **Docker** (optional, for containerized setup)

## Setup and Installation

### Option 1: Using Docker (Recommended)

1. **Install Docker** : [Download Docker Desktop](https://www.docker.com/products/docker-desktop)

2. **Clone or navigate to the project directory**

3. **Run the application** :
   ```bash
   docker-compose up --build
   ```

4. **Access the application** :
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - MongoDB: localhost:27017

### Option 2: Manual Setup

#### Backend Setup

1. **Navigate to backend directory** :
   ```bash
   cd backend
   ```

2. **Create virtual environment** :
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies** :
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables** :
   - Copy `.env` file and update values if needed
   - Default MongoDB URL: `mongodb://localhost:27017`
   - Database name: `fftournament`

5. **Start MongoDB** (if not using Docker):
   ```bash
   # Using MongoDB service or mongod
   mongod
   ```

6. **Run the backend server** :
   ```bash
   uvicorn server:app --reload --host 0.0.0.0 --port 8000
   ```

#### Frontend Setup

1. **Navigate to frontend directory** :
   ```bash
   cd frontend
   ```

2. **Install dependencies** :
   ```bash
   npm install
   ```

3. **Start the development server** :
   ```bash
   npm start
   ```

4. **Access the application** :
   - Frontend: http://localhost:3000

## API Documentation

Once the backend is running, visit http://localhost:8000/docs for interactive API documentation (Swagger UI).

## Testing

### Backend Tests

```bash
cd backend
python -m pytest ../tests/
```

### Frontend Tests

```bash
cd frontend
npm test
```

## Design Guidelines

The application follows a cyberpunk tactical aesthetic defined in `design_guidelines.json`:

- **Colors**: Dark theme with neon accents (#FF9900 primary, #00F0FF secondary)
- **Fonts**: Chakra Petch for headings, Rajdhani for body text
- **Style**: High-fashion/tactical gamer aesthetic

## Troubleshooting

### Common Issues

1. **Port already in use** :
   - Change ports in docker-compose.yml or server startup commands

2. **MongoDB connection error** :
   - Ensure MongoDB is running
   - Check MONGO_URL in backend/.env

3. **Node modules issues** :
   - Delete node_modules and package-lock.json, then `npm install`

4. **Python virtual environment issues** :
   - Delete venv folder and recreate
   - Ensure Python 3.11+ is used

### Environment Variables

Backend `.env` file:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=fftournament
JWT_SECRET=your-secret-key-change-in-production
CORS_ORIGINS=*
```

## Development

- Backend: FastAPI with async MongoDB operations
- Frontend: React with Tailwind CSS and shadcn/ui components
- Database: MongoDB with Motor driver

## Deployment

### Frontend Deployment (Vercel)

1. **Build the frontend** :
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel** :
   - Sign up at [vercel.com](https://vercel.com)
   - Install Vercel CLI: `npm install -g vercel`
   - Deploy: `vercel`
   - Set custom domain: `cursitournament0com` (configure DNS)

### Backend Deployment (Railway)

1. **Prepare backend for production** :
   - Update `.env` with production MongoDB URL (use MongoDB Atlas)
   - Ensure JWT_SECRET is secure

2. **Deploy to Railway** :
   - Sign up at [railway.app](https://railway.app)
   - Connect GitHub repository
   - Set environment variables
   - Deploy

### Database (MongoDB Atlas)

1. **Create MongoDB Atlas cluster** :
   - Sign up at [mongodb.com/atlas](https://mongodb.com/atlas)
   - Create free cluster
   - Get connection string

2. **Update backend environment** :
   - Set MONGO_URL to Atlas connection string
   - Whitelist IP addresses or use 0.0.0.0/0 for testing

### Custom Domain Setup

- **Domain**: cursitournament0com
- Configure DNS to point to Vercel (frontend) and Railway (backend)
- Update CORS_ORIGINS in backend for the domain

### Production Checklist

- [ ] Update JWT_SECRET
- [ ] Set NODE_ENV=production
- [ ] Enable HTTPS
- [ ] Configure proper CORS
- [ ] Set up monitoring and logging
- [ ] Backup database regularly

## Contributing

1. Follow the design guidelines in `design_guidelines.json`
2. Write tests for new features
3. Update documentation as needed
