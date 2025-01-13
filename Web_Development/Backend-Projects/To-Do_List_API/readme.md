# To-Do List API


A RESTful API for managing a to-do list application built with Node.js, Express.js, and JWT-based authentication. This project provides endpoints for user authentication and managing to-do items.

### Features

- User Signup and Signin with JWT authentication.
- Secure endpoints protected by middleware.
- CRUD operations for to-do items.
- Modular and scalable code structure.

---

## Installation
### Prerequisites
Ensure you have the following installed on your machine:
- Node.js (v18.18.0 or higher)
- npm (Node Package Manager)

### <h4>Steps<h4>

1. Clone the repository:
`git clone https://github.com/your-username/todo-list-api.git`

2. Navigate to the project directory:
`cd todo-list-api`

3. Install dependencies:
`npm install`

4. Create a .env file in the root directory and add the following environment variables:
`
PORT=5000
JWT_SECRET=your_jwt_secret
`

5. Start the server:
`node server.js`
The server will run on http://localhost:5000.