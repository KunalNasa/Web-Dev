const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
// @desc - register a user
// @route - POST /api/users/contacts
// @access - Public (will change to private later)
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password } = req.body;
    if(!username, !email, !password) 
    {
        res.status(400);
        throw Error("Please enter valid credentials");
    }
    const findMail = await User.findOne({email});
    if(findMail)
    {
        res.status(400);
        throw Error("This email is already in use")
    }

    // Hash password
    const hashedPass = await bcrypt.hash(password, 10);
    console.log("Hashed Password", hashedPass);
    const user = await User.create({
        username,
        email, 
        password : hashedPass
    })
    console.log(`User created ${user}`);
    if(user)
    {
        res.status(201).json({_id : user.id, email : user.email})
    }else{
        res.status(400);
        throw Error("User data not valid");
    }
    res.json({message : "Registration Successful"})
});


// @desc - login user
// @route - POST /api/users/info
// @access - Public (will change to private later)
const loginUser = asyncHandler(async  (req, res) => {
    const {email, password} = req.body;
    if(!email || !password)
    {
        res.status(400);
        throw Error("Invalid user");
    }
    const user = await User.findOne({email});
    // compare password with hashedPass
    if(user && (await bcrypt.compare(password, user.password)))
    {
        const accessToken = jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                id : user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn : "30m"})
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw Error("Email or password is not valid");
    }
    res.json({message : "login user"})
});

// @desc - register a user
// @route - POST /api/contacts
// @access - private (will change to private later)
const currentInfo = asyncHandler(async (req, res) => {
    res.json(req.user)
});

module.exports = {registerUser, loginUser, currentInfo}

