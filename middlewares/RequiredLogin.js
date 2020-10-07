const JWT = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');
const user_Collection = require('../models/User_model');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) return res.status(401).json({error: 'You must Login'})

    const token = authorization.replace('Bearer', '');

    JWT.verify(token, JWT_SECRET, (err, payload) => {
        if(err) return res.status(401).json({error: 'You must Login'})

        const { _id } = payload;
        user_Collection.findById(_id)
        .then(me => {
            req.user = me;
            next();
        })
    } )
}