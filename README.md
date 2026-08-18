# Express.js-API
Development Platforms Course Assignment

## 🌟Highlights of this Project

- Uses Express Router to organise endpoints
- Implemented JWT authentication middleware
- The create article route is protected by authentication
- Included proper error handling and status codes
- Uses parameterised queries for SQL injection prevention

## ℹ️ Overview

- A functional news platform that demonstrates the understanding of modern web development practices, user authentication, and data management using an Express.js backend.

  ### The pages/endpoints included are:

- `POST /auth/register` - User registration (Public)
- `POST /auth/login` - User login (Returns JWT)
- `GET /articles` - View all articles (Public access)
- `POST /articles` - Submit new article (Protected, requires JWT)

  ### The Database Tables: MySQL database with mysql2

- **users** (`id`, `email`, `password_hash`, `created_at`)
- **articles** (`id`, `title`, `body`, `category`, `submitted_by`, `created_at`)

## 🖥️ Tech Stack

### Language & Runtime
- TypeScript
- Node.js

### Frameworks & Libraries
- Express.js (with Express Router)
- MySQL database with mysql2
- JWT authentication (`jsonwebtoken`)
- Password hashing (`bcrypt`)
- Data validation (Zod)
- Thunder Client
- Environment variable management (`dotenv` & `cors`)

### Out of Scope
- No front-end application are made for this project. Testing is performed via Thunder Client

### ✍️ Author
I'm a Front-End Development student,
[@Anne-Zwift](https://github.com/Anne-Zwift/).
This repository is my [project](https://github.com/Anne-Zwift/Express.js-API) focusing on building a secure REST API backend solution.

## 🚀 Usage

### Authentication And Security
To interact with protected endpoints, you must first register with an email and password. The system uses secure password hashing via `bcrypt`.
Logging in returns a JSON Web Token (JWT). By passing this token in the `Authorization: Bearer <token>` header, you gain access to submit new articles.

### .env.example
The project includes a `.env.example` file to illustrate the required environment variables (Database credentials and `JWT_SECRET`).

## ⬇️ Installation

### Prerequisites
You need to have [Node.js](https://nodejs.org) and npm installed on your computer.

### Steps

#### 1. Clone the repository: `git clone https://github.com/Anne-Zwift/Express.js-API/`
#### 2. Navigate to the project directory: `cd Express.js-API`
#### 3. Install the dependencies: `npm install`

### Running the Project
To start the development server in watch mode:
`npm run dev`

## 💭 Feedback and Contributing
#### 🎓 This is a project for my education purpose only.
