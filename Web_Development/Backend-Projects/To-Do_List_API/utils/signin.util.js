import { DB } from "../DB/DB.js";
import jwt from 'jsonwebtoken';

function signin(req,res)  {
    const username = req.body.username;
    const password = req.body.password;

    if(!username || !password){
        res.status(400).send('Invalid username or password');
    }

    const user = DB.find(user => user.username === username);
    if(!user){
        res.status(400).send('User not found');
    }
    else if(user.password !== password){
        res.status(400).send('Invalid password');
    }
    else{
        const token = jwt.sign({username: username}, process.env.ACCESS_TOKEN_SECRET);
        console.log(token);
        res.status(200).send(token);
    }
}

export default signin;