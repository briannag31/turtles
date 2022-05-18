const express = require("express");
const mongoose =  require("mongoose");
const app = express()
require('dotenv').config()
const MONGO = process.env.DATABASE_URL

mongoose.connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});

const db=mongoose.connection;
db.on('error', (err) => console.log(" mongo is not running - Error: " + err.message ));
db.on('connected', ()=> console.log('mongoose connected'));
db.on('disconnected', () => console.log("mongo disconnected"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//handle root requests
app.get("/", (req,res) => {
    res.send(`<img src="https://media.giphy.com/media/hQubnR0Fr0dUI/giphy.gif">`)
})

const storeController = require("./controllers/turtles")
app.use("/", storeController);

app.post(function(req, res, next){
    next();
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("we are running"))





// /////////////////////////
// // DEPENDENCIES
// /////////////////////////
// const express = require("express")

// /////////////////////////
// // The Application Object
// /////////////////////////
// const app = express()

// /////////////////////////
// // MIDDLEWARE
// /////////////////////////

// app.use(express.json())



// /////////////////////////
// // Routes
// /////////////////////////

// /// home route that says "hello world" to test server is working
// app.get("/", (req, res) => {
//   //res.json let's us send a response as JSON data
//   res.json({
//     response: "Hello World",
//   })
// })

// // Turtles Index Route (Send All Turtles)
// app.get("/turtles", (req, res) => {
//   // send the turtles array as JSON
//   res.json(turtles)
// })

// // Turtles Show Route (Send One Turtle)
// app.get("/turtles/:index", (req, res) => {
//     // send turtle as json
//     res.json(turtles[req.params.index])
//   })
  
  
// // Turtles Index Route (Send All Turtles)
// app.post("/turtles", (req, res) => {
//     // push the request body into the array
//     turtles.push(req.body)
//     // send the turtles array as JSON
//     res.json(turtles)
//   })

// // Turtles Update Route
// app.put("/turtles/:index", (req, res) => {
//     // replace the turtle at the specified index with the request body
//     turtles[req.params.index] = req.body
//     // send the turtles array as JSON
//     res.json(turtles)
//   })

// // Turtles delete Route
// app.delete("/turtles/:index", (req, res) => {
//     // remove the turtle at the specifed index
//     turtles.splice(req.params.index, 1)
//     // send the turtles array as JSON
//     res.json(turtles)
//   })

//   /////////////////////////
//   // Listener
//   /////////////////////////
//   // We chose a non 3000 port because react dev server uses 3000 the highest possible port is 65535
//   // Why? cause it's the largest 16-bit integer, fun fact!
//   // But because we are "elite" coders we will use 1337
//   app.listen(1337, () => console.log("Listening on port 1337"))