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

---

## API Endpoints

### Authentication
| Method | Endpoint     | Description                |
|--------|--------------|----------------------------|
| POST   | \`/signup\`    | Register a new user.       |
| POST   | \`/signin\`    | Log in and get a JWT token.|

### To-Do Management (Protected)
| Method | Endpoint     | Description                          |
|--------|--------------|--------------------------------------|
| GET    | \`/me\`        | Get details of the authenticated user.|
| POST   | \`/todos\`     | Create a new to-do item.             |
| GET    | \`/todos\`     | Retrieve all to-do items.            |

---

### Folder Structure

```
├── middleware/
│   └── authenticateToken.js    # Middleware for JWT verification
├── utils/
│   ├── signin.util.js          # Signin functionality
│   ├── signup.util.js          # Signup functionality
│   ├── todos.util.js           # To-do management logic
│   └── me.util.js              # Retrieve user information
├── .env                        # Environment variables
├── server.js                   # Main server file
└── package.json                # Project metadata and dependencies
```

---

### Usage 
1. Test API endpoints using Postman or cURL.
2. Example request for creating a to-do (requires JWT token in the Authorization header):
```
POST /todos
Authorization: Bearer <your-jwt-token>

Body:
{
  "title": "Learn Node.js",
  "description": "Complete tutorials on Node.js basics."
}
```

---

### Future Enhancements 
- Add a database (e.g., MongoDB) to persist user and to-do data.

- Implement pagination for the /todos endpoint.

- Add additional fields like due date, priority, and completion status for to-dos.

---

### Acknowledgemnts
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)