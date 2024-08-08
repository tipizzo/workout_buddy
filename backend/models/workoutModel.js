const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true }) // When anew document is created, it automatically a create date property

module.exports = mongoose.model('Workout', workoutSchema);