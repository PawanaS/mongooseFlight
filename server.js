
const Flight = require("./models/Flight");
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());
const express= require("express");
app.use(express.urlencoded({extended: false}))
require("dotenv").config();
const mongoose= require("mongoose")



//* Find all Flights in db
app.get("/flights", (req, res) => {
    Flight.find({},(error,allFlights)=>{
        res.render("Index",{flights:allFlights})
    })

      
  });


  /**
 * New Route: (return a form to create a new fruit)
 */
app.get('/Newflight', (req, res) => {
    res.render('New')
})


  
    //* ==== Create a single flight
app.post("/flights", (req, res) => {
    // data comes from client or react app
   Flight.create(req.body,(error, createdflight)=>{
    res.redirect("/flights")
   }) 
   
  });


  app.listen(3000, () => {
    console.log("Server is up!");
    connectToDB();
  });
