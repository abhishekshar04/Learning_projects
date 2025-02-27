import jwt from 'jsonwebtoken';


function authenticateToken(req,res,next){
    const token = req.headers.token;
    if(token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    })
}

export default authenticateToken;