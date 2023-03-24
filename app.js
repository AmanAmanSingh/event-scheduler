const express = require("express");
const app = express();
const connection = require("./db/connection")();
const eventcontroller = require("./route/event")

app.use(express.json());


app.get("/testing/route", (req, res) => {
    res.send("workingggggg!!")
})

app.use("/", eventcontroller)
app.listen(3002, () => { console.log("server started at 3002") })