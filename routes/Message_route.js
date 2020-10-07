const express = require('express');
const router = express.Router();
const room_Collection = require('../models/Room_model');
const message_Collection = require('../models/Message_model');
const RequiredLogin = require('../middlewares/RequiredLogin');

// Create Messages
router.post('/create_message', RequiredLogin, (req, res) => {
    const { room_id, message } = req.body;

    if(!room_id || !message) return res.json({noValue: 'enter all fields'})

    let d = new Date();
    let TimeNow = `${d.getHours()}:${d.getMinutes()}`;

    const newMessage = new message_Collection({
        content: message,
        send_by: req.user,
        viewed: false,
        Date_created_at: new Date().toUTCString(),
        Time_created_at: TimeNow
    })

    newMessage.save()
    .then(savedMessage => {
        room_Collection.findByIdAndUpdate(room_id, {
            $push: { messages: savedMessage }
        }, { new: true })
        .then(room => res.json({ message: 'message successfuly added', room }) )
        .catch(err => console.log('no room with this id') )
    })
    .catch(err => console.log('message_route::32', err) )
})

// get Room Messages
router.post('/room_messages', RequiredLogin, (req, res) => {
    const { roomId } = req.body;

    if(!roomId) {
        console.log('give all fields')
        return res.json({noValue: 'give all fields'})
    }

    room_Collection.findById(roomId)
    .populate('participant1 participant2', '-password')
    .then(room => {

        if(room.participant1._id.toString() !== req.user._id.toString() && room.participant2._id.toString() !== req.user._id.toString()) {
            console.log('not your Room')
            return res.json({notYours: 'not your Room'});
        }

        function talking(){
            if(room.participant1._id.toString() === req.user._id.toString()) return room.participant2
            else return room.participant1
        }
        const talkingWith = talking();

        message_Collection.find({ _id: { $in: room.messages } })
        .populate('send_by', '-password')
        .sort('-Date_created_at')
        .then(messages => {

            let RoomMessages = [];
            if(room.messages.length === 0){
                res.json({
                    room,
                    talkingWith,
                    RoomMessages
                })
            }

            messages.map( (msg, index) => {

                function isMine(){
                    if(msg.send_by._id.toString() === req.user._id.toString()) return true
                    else return false
                }
                const isMsgMine = isMine();

                if(msg.send_by._id.toString() !== req.user._id.toString()){

                    message_Collection.findByIdAndUpdate(msg._id, {
                        $set: { viewed: true }
                    }, { new: true })
                    .populate('send_by', '-password')
                    .sort('Date_created_at')
                    .then(rslt => {
        
                        RoomMessages.push({
                            msg: rslt,
                            isMsgMine
                        })
                        
                        if(RoomMessages.length == messages.length){
                            const newMessages = RoomMessages.sort((a, b) => {return a.msg.Date_created_at - b.msg.Date_created_at  })
                            res.json({
                                room,
                                talkingWith,
                                RoomMessages: newMessages
                            })
                        }
    
                    })
                }
                else{

                    RoomMessages.push({
                        msg,
                        isMsgMine
                    })
                    
                    if(RoomMessages.length == messages.length){
                        const newMessages = RoomMessages.sort((a, b) => {return a.msg.Date_created_at - b.msg.Date_created_at  })
                        res.json({
                            room,
                            talkingWith,
                            RoomMessages: newMessages
                        })
                    }

                }

            })
    
        })
    } )
} )

// get Unseen Messages
router.get('/unseen_messages', RequiredLogin, (req, res) => {

    room_Collection.find({ $or:  [{participant1: req.user._id}, {participant2: req.user._id}] })
    .populate('participant1 participant2', 'username')
    .then(rooms => {
        if(rooms.length === 0) {
            return res.json({mesg: 'no room', unseenMessages: []})
        }
        
        let unseenMessages = [];
        rooms.map((room, index) => {

            function set_talked_too(){
                if(room.participant1._id.toString() !== req.user._id.toString()) return room.participant1
                else if(room.participant2._id.toString() !== req.user._id.toString()) return room.participant2
            }
            const talked_too = set_talked_too()

            if(room.messages !== []){

                message_Collection.find({ $and: [{_id: { $in: room.messages }}, {viewed: false}, { send_by: { $ne: req.user._id } }] })
                .sort('-Date_created_at')
                .then(messagesFound => {
                    if(messagesFound.length !== 0){
                        unseenMessages.push({
                            talked_too,
                            room: room,
                            noViewd_messages_inRoom: messagesFound
                        })

                        if(rooms[index + 1] === undefined){
                            return res.json({unseenMessages})
                        }
                    }
                    else{
                        if(rooms[index + 1] === undefined){
                            return res.json({mesg: 'no room2', unseenMessages})
                        }
                        else return;
                    }
                })
                .catch(err => {
                    console.log('message Route:: 158', err)
                    if(rooms[index + 1] === undefined){
                        return res.json({mesg: 'no room2', unseenMessages})
                    }
                    else return;
                })

            }
            else {
                return res.json({mesg: 'no room3', unseenMessages: []})
            }
        })

    } )
    .catch(err => console.log('Message_route::173', err) )

} )

module.exports = router;