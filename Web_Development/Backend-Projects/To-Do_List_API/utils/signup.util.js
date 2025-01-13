import {DB} from '../DB/DB.js';

function signup(req,res) {
    const username = req.body.username;
    const password = req.body.password;
    
    if(!username || !password){
        res.status(400).send('Invalid username or password');
    }

    if(DB.find(user => user.username === username)){
        res.status(400).send('User already exists');
    }
    else{
        DB.push({username: username, password: password});
        console.log(DB);
        res.status(200).send('User created');
    }
}

export default signup;