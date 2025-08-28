markdown

# Task Manager App

## Backend Setup
1. cd backend
2. npm install
3. npm run build
4. npm start (runs on port 4000)

## Frontend Setup
1. cd frontend
2. npm install
3. npm run build
4. npm run preview (runs on port 4173)

## API Endpoints
- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id
- PATCH /api/tasks/:id/toggle

## Design Decision Assumptions
- Used Vite for the frontend.
- Used tsx and typescript for both backend and frontend.
- IDs in the backend for the Tasks need to be unique, to guarantee that I simply incremented the id counter on the frontend.
- CreatedAt dates for the tasks were create on the frontend. 

## Time spent on each part
Backend API - 96 minutes
Frontend - 124 minutes
Styling - 20 minutes
Testing - The testing was done throughout and so I have no particular time estimate