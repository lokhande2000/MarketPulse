# MarketPulse

This project is a backend service for a Stock Discussion Platform, built with the MERN stack. Users can discuss various stocks, create posts, add comments, like posts, and filter or sort stock-related posts. The backend manages user authentication, post management, comments, and likes.

## Features

- User Authentication: JWT-based authentication system with registration and login.
- Stock Post Management: Users can create posts about specific stocks, edit, delete, and view posts.
- Comment System: Users can comment on posts.
- Like System: Users can like or unlike posts.
- Filtering & Sorting: Posts can be filtered by stock symbol or tags and sorted by creation date or likes.
- Real-time Updates (Optional): New comments or likes can be updated in real-time using Socket.io.

## Tech Stack

- MongoDB: For data storage.
- Express.js: For creating the backend API.
- Node.js: JavaScript runtime for the backend.
- JWT: For secure user authentication.
- Socket.io (Optional): For real-time updates.
- Swagger/Postman: For API documentation.

## Installation

Follow these steps to set up and run the project locally.

## Prerequisites

- Node.js: Ensure you have Node.js installed. You can download it from here.
- MongoDB: Ensure MongoDB is installed and running locally or use a cloud-based service like MongoDB Atlas.
- Postman: For testing the API, you can use Postman or Swagger for documentation.

## Setup

1. Clone the repository:
   `git clone https://github.com/lokhande2000/MarketPulse.git`
2. Navigate to the project directory:
   `cd backend`
3. Install the necessary dependencies:
   `npm install`
4. Create a .env file in the root of your project, and add the following environment variables:
   `MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
PORT=8080`
5. Start the server:
   `npm start` 6. The server should be running at http://localhost:8080.

# API Endpoints
## Authentication
- POST /auth/register: Register a new user.
- POST /auth/login: Login user and return JWT.
- GET /auth/profile/
: Get user profile by ID.
- PUT /auth/profile: Update user profile.
Stock Posts
- POST /posts: Create a new stock post.
- GET /posts: Get all stock posts with optional filtering and sorting.
- GET /posts/
: Get a single stock post with comments.
- DELETE /posts/
: Delete a post by its ID.
Comments
- POST /comments/
: Add a comment to a post.
- DELETE /comments/
: Delete a comment by its ID.
Likes
- POST /likes/
: Like a post.
- DELETE /likes/
: Unlike a post.

## Folder Structure

.
├── controllers
│   ├── authController.js
│   ├── postController.js
│   ├── commentController.js
│   ├── likeController.js
├── models
│   ├── userModel.js
│   ├── postModel.js
│   ├── commentModel.js
│   ├── likeModel.js
├── routes
│   ├── authRoutes.js
│   ├── postRoutes.js
│   ├── commentRoutes.js
│   ├── likeRoutes.js
├── middleware
│   ├── authMiddleware.js
├── index.js
└── .env