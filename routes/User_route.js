const express = require('express');
const router = express.Router();
const user_Collection = require('../models/User_model');
const RequiredLogin = require('../middlewares/RequiredLogin');

// search users
router.post('/search_user', RequiredLogin, (req, res) => {
    const { search_string } = req.body;

    if(!search_string) return res.json({Empty_error: 'search Empty'})

    const search_str_Lower = search_string.toLowerCase()

    user_Collection.find()
    .select('-password')
    .then(users => {
        let usersFound = []

        users.map(user => {
            const username = user.username.toLowerCase()
            if(username.startsWith(search_str_Lower)){
                if(user._id.toString() === req.user._id.toString()) { return; }
                return usersFound.push({user})
            }
        } )

        if(usersFound.length === 0){
            return res.json({error: 'No Result'})
        }
        return res.json(usersFound)
    } )
    .catch(err => res.json({error: 'No user available'}) )
})

module.exports = router;