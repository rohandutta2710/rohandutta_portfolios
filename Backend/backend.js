const express = require('express');
const app = express();
const fs = require("fs")
const bodyParser = require("body-parser")
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
const filePath = "./database.json";
let jsonData = fs.readFileSync(filePath, "utf-8");
jsonData = JSON.parse(jsonData);

// app.get("/", (req, res) => {
//     res.send("hi")
// })
let date = new Date();
app.post("/contact", (req, res) => {
    let data = {...req.body,date:`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`,time:`${date.getHours()}:${date.getMinutes()}/${date.getSeconds()}`};
    jsonData.push(data);
    fs.writeFileSync(filePath, JSON.stringify(jsonData));
    res.send("<h1> Response is saved. Rohan Dutta will reach you asap.<br><a href='https://rohandutta.netlify.app/'>Back to page</a></h1>");
})
app.listen("4000", "192.168.1.109", () => {
    console.log("Server is running.")
})