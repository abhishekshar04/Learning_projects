import express from 'express';
import dotenv from 'dotenv';
import authenticateToken from './middleware/authenticateToken.js';
import jwt from 'jsonwebtoken';
import signin from './utils/signin.util.js';
import signup from './utils/signup.util.js';
import {postTodo, getTodo} from './utils/todos.util.js';
import me from './utils/me.util.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

// Public Routes
app.post('/signup', signup);
app.post('/signin', signin);

// Protected Routes
app.use(authenticateToken);

app.get('/me', me);
app.post('/todos', postTodo);
app.get('/todos', getTodo);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
