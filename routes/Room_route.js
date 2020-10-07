const express = require('express');
const router = express.Router();
const user_Collection = require('../models/User_model');
const room_Collection = require('../models/Room_model');
const RequiredLogin = require('../middlewares/RequiredLogin');

// create room
router.post('/create_room', RequiredLogin, (req, res) => {
    const { userId } = req.body;
    const myId = req.user._id;
    
    if(!userId) return res.status(422).json({noValue: 'we need userId'})

    if(userId.toString() === myId.toString()) return res.status(422).json({sameId: "can't create a room with your self"})

    const participants = [userId, myId];

    room_Collection.findOne({ participant1: {$in: participants }, participant2: {$in: participants } })
    .populate('participant1 participant2')
    .then(roomFound => {
        
        if(roomFound !== null) {
            return res.json({yourRoom: roomFound})
        }

        if(roomFound === null){
            const newRoom = new room_Collection({
                participant1: myId,
                participant2: userId
            })

            newRoom.save()
            .then(savedRoom => {
                room_Collection.findById(savedRoom._id)
                .populate('participant1 participant2')
                .then(myRoom => {
                    res.json({
                        createRoom: 'Room successfuly created',
                        myRoom,
                    })
                })
                .catch(err => console.log('Room_route::39', err) )
                
            } )
            .catch(err => console.log('Room_route::41', err) )
    
        }
    } )
    .catch(err => console.log('Room_route::44', err) )
} )

module.exports = router;