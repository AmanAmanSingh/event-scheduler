const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    }
});

module.exports = mongoose.model("events", EventSchema)