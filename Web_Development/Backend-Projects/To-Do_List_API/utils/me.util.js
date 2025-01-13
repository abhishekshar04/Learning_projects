function me(req,res) {
    const username = req.user.username;
    console.log(username);
    res.status(200).send({
        message : `Welcome ${username}`
    });
}

export default me;