//Build Server
let express = require("express");
let fetch = require('node-fetch');
let app = express();
let bodyParser = require("body-parser");
const MessageRoutes = require("./routes/MessagesRoutes");
const OrdersRoutes = require("./routes/OrdersRoute");
const TaskRoutes = require("./routes/TasksRoute");

//Connect To a DataBase 
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://Tiatan95:walnut90266@ds227322.mlab.com:27322/aca-cp1-jeremy");


//Connect routes and body-parser
app.use(bodyParser.json());
app.use(MessageRoutes);
app.use(OrdersRoutes);
app.use(TaskRoutes);

let dataRowTwo = {};

//Read File
const fs = require('fs')
fs.readFile("/Users/jeremy/Code/CheckPoint/checkpoint-backend-1/server/data.csv", 'utf8', function (err ,data) {
    if(err) {
        console.log(err);
    }
    let allData = data.split(/\r?\n/); 
    dataRowTwo = allData[1].split(',');
})


//Create get Routes

app.get("/dateTime", (req,res)=>{
    return res.send((new Date()));
});
app.get("/newComments", (req,res)=>{
    return res.send(dataRowTwo[0]);
})
app.get("/newTasks", (req,res) => {
    return res.send(dataRowTwo[1]);
})
app.get("/newOrders", (req,res) => {
    return res.send(dataRowTwo[2]);
})
app.get("/tickets", (req,res) => {
    return res.send(dataRowTwo[3]);
})
app.get("/foxes", (req,res) => {
    fetch('https://randomfox.ca/floof/', {
        method : 'GET'
    })
    .then(res => res.json())
    .then((req) =>{
        res.json(req.image);
    });
})




//Server Listens for ports
const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log("Web Server Started")
})


