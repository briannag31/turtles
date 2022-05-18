const express = require("express")
const turtleRouter = express.Router()
const Turtle = require("../models/turtleSchema")
const turtleSeedData = require("../models/turtleSeed")


//Seed Route
turtleRouter.get('/seed', (req, res) => {
        Turtle.create(turtleSeedData, (err, allTurtles) => {
            res.send(turtleSeedData);
        });
    });


//Index
turtleRouter.get('/turtles', (req, res) => {
    Turtle.find({}, (err, turtles) => {
        res.send(turtles);
    });
});



//Delete
turtleRouter.delete("/turtles/:id", (req, res) => {
    Turtle.findByIdAndRemove(req.params.id, (err, deletedTurtles) => {
        res.send({ success: true })
      res.json(deletedTurtles)
    })
  })




//Update 
turtleRouter.put("/turtles/:id", (req, res) => { 
    Turtle.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
      (error, updatedTurtle) => {
        res.json(updatedTurtle)
      }
    )
  })


//Create
turtleRouter.post('/turtles', (req, res) => {

    Turtle.create(req.body, (err, createdTurtle) => {
        if (err) {
            res.send(err);
        } else {
            res.json(createdTurtle);
        }
    })
});


//Show
turtleRouter.get('/turtles/:id', (req, res) => { 
    Turtle.findById(req.params.id, (err, allTurtles) => {
        res.json(allTurtles);
    });
})

module.exports = turtleRouter