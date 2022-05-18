const mongoose = require("mongoose")

const turtleSchema = new mongoose.Schema({
    name:{type: String, required: true},
    role: {type: String , required: true},
    
})

const Turtle = mongoose.model("Turtle", turtleSchema)

module.exports = Turtle