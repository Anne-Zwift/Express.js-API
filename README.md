# Express.js-API
A REST API for a news platform built with Express.js, TypeScript, and MySQL.

## 📑 Table of Contents

- [🌟 Highlights of this Project](#highlights-of-this-project)
- [ℹ️ Overview](#ℹ️-overview)
- [🧪 API Verification & Test Results](#-api-verification--test-results)
- [🖥️ Tech Stack](#️-tech-stack)
- [🚀 Usage](#-usage)
- [⚙️ Environment Variables](#️-environment-variables)
- [⬇️ Installation & Database Setup](#️-installation--database-setup)
- [💭 Feedback and Contributing](#-feedback-and-contributing)

## 🌟 Highlights of this Project

- Uses Express Router to organize endpoints
- Implemented JWT authentication middleware
- The create article route is protected by authentication
- Included proper error handling and status codes
- Uses parameterized queries for SQL injection prevention

## ℹ️ Overview

- A functional news platform that demonstrates the understanding of modern web development practices, user authentication, and data management using an Express.js backend.

### 🧪 API Verification & Test Results
To keep this documentation concise, detailed request/response payload examples and verified test results have been documented during the development cycle:
- Detailed **Registration & Login** test logs can be reviewed in [Pull Request #3 (Auth Endpoints)](https://github.com/Anne-Zwift/Express.js-API/pull/3).
- Detailed **Article** test logs can be reviewed in [Article Endpoints](https://github.com/users/Anne-Zwift/projects/10/views/1?pane=issue&itemId=228588067).

*All integration tests have been successfully verified and captured via Thunder Client, confirming robust middleware token interception and validation.*

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
- No front-end application is made for this project. Testing is performed via Thunder Client

### ✍️ Author
I'm a Front-End Development student,
[@Anne-Zwift](https://github.com/Anne-Zwift/).
This repository is my [project](https://github.com/Anne-Zwift/Express.js-API) focusing on building a secure REST API backend solution.

## 🚀 Usage

### Authentication And Security
To interact with protected endpoints, you must first register with an email and password. The system uses secure password hashing via `bcrypt`.
Logging in returns a JSON Web Token (JWT). By passing this token in the `Authorization: Bearer <token>` header, you gain access to submit new articles.

### ⚙️ Environment Variables

The project includes a `.env.example` file to illustrate the required environment variables (Database credentials and `JWT_SECRET`).

```env
PORT=3000
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=news_platform
JWT_SECRET=your_secret_key
```

## ⬇️ Installation & Database Setup

### Prerequisites
You need to have [Node.js](https://nodejs.org) and npm installed on your computer.
You also need MySQL Server and [MySQL Workbench](https://mysql.com) installed locally.

### Steps

#### 1. Clone the repository
```bash
git clone https://github.com/Anne-Zwift/Express.js-API.git
cd Express.js-API
```

#### 2. Install the dependencies
```bash
npm install
```

### 3. Database Initialization
Before running the server, you must initialize the MySQL database schema:
1. Open **MySQL Workbench** and connect to your local instance.
2. Open and execute the provided script: **`database_setup.sql`** located in the project root.
3. This will automatically create the `news_platform` database along with the pre-configured `users` and `articles` tables.

### Running the Project
To start the development server in watch mode:
```bash
npm run dev
```

## 💭 Feedback and Contributing
#### 🎓 This is a project for my education purpose only.
