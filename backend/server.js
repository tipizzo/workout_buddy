require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');


// Express App
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


// routes
app.use('/api/workouts/', workoutRoutes)

// Connect the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listening on port 400
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & App listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    });
