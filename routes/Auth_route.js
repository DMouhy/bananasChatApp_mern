const express = require('express');
const router = express.Router();
const user_Collection = require('../models/User_model');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const RequiredLogin = require('../middlewares/RequiredLogin');

// Register
router.post('/register', (req, res) => {
    const { username, password, re_password } = req.body;

    if(!username || !password || !re_password) return res.json({error: 'Enter all fields'})

    if(password !== re_password) return res.json({error: "re_password doesn't match"})

    user_Collection.findOne({username: username})
    .then(userFound => {
        if(userFound) return res.status(422).json({error: "Already Exist"}) 
        else{
            bcrypt.hash(password, 12).then(hashed_password => {
            
                const newUser = new user_Collection({
                    username,
                    password: hashed_password
                })
    
                newUser.save()
                .then(reslt => res.json({message: 'Successfuly Register'}))
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        }
    })

} )

// Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) return res.json({error: 'Enter all fields'})

    user_Collection.findOne({username: username})
    .then(userFound => {
        if(!userFound) return res.json({error: "maybe you missed something"})
        
        bcrypt.compare(password, userFound.password)
        .then(match => {
            if(!match) return res.json({error: "maybe you missed something"})

            const token = JWT.sign({ _id: userFound._id }, JWT_SECRET);

            user_Collection.findByIdAndUpdate(userFound._id, {
                $set: { conected: true }
            }, { new: true })
            .then(reslt => res.json({
                message: 'Successfuly Loged_in', 
                token
            }) )
            .catch(err => console.log(err) )

        })
        .catch(err => res.json({error: "maybe you missed something"}))
    })
} )

// verify Token
router.get('/verify_token', (req, res) => {
    const { authorization } = req.headers;

    if(!authorization) return res.json({bool: false})

    const token = authorization.replace('Bearer', '');

    JWT.verify(token, JWT_SECRET, (err, payload) => {

        if(err) return res.json({bool: false})

        return res.json({bool: true})
    } )
})

router.get('/logout', RequiredLogin, (req, res) => {

    user_Collection.findByIdAndUpdate(req.user._id, {
        $set: { conected: false }
    }, { new: true })
    .then(reslt => res.json({message: 'you logedOut'}))
    .catch(err => console.log(err) )
} )

module.exports = router;