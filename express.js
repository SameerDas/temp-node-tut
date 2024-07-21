// let express=require("express");   // import express in our file
// let app=express();           // initiate the app using express
// let fs=require("fs");

// app.use(express.static("public"));
// app.get("/",function(req,res){
//     response={
//         first:req.query.fn,
//         second:req.query.sn
//     }
//     console.log(response);
//     fs.writeFile("data.txt",JSON.stringify(response),(err)=>{
//         if(err) throw err;
//         console.log("successfully written");
//     })
//     res.end(JSON.stringify(response));
// })
// app.listen(4000,function(){
//     console.log("express framework is started at 4000 port");
// });



// app.get("/",function(req,res){
//     res.send("welcome to express framework");
// })
// app.get("/sam",function(req,res){
//     res.send("sameer das");
// })

const express = require("express"); // Import express
const app = express(); // Initiate the app using express
const fs = require("fs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Handle GET requests to the root URL
app.get("/", function (req, res) {
    const response = {
        first: req.query.fn,
        second: req.query.sn
    };
    console.log(response);

    // Write the response to a file
    fs.writeFile("data.txt", JSON.stringify(response), (err) => {
        if (err) {
            console.error("Error writing to file", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        console.log("Successfully written");
    });

    // Send the response back to the client
    res.json(response);
});

// Start the server and listen on port 4000
app.listen(4000, function () {
    console.log("Express framework is started at port 4000");
});
