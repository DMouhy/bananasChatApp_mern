const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGO_URI } = require('./keys');
const cors = require('cors');
const path = require('path');

// App Config
const PORT = process.env.PORT || 8000;
app.use(cors());

// Mongodb Config
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('Connected'))
.catch(err => console.log('Caught', err.stack));

mongoose.connection.on('connected', () => console.log('Connected to chatAppdb Database'))
mongoose.connection.on('error', () => console.log('ERROR: ', err))

mongoose.set('useFindAndModify', false);

// general MiddleWare
app.use(express.json());

// routes
app.use('/api', require('./routes/Auth_route'));
app.use('/api', require('./routes/User_route'));
app.use('/api', require('./routes/Room_route'));
app.use('/api', require('./routes/Message_route'));

// static files
app.use(express.static(path.join(__dirname, 'frontend/build')))

// listen to port
app.listen(PORT, () => console.log('server runing on PORT:', PORT))