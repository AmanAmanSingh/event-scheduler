const mongoose = require("mongoose");

const conn = async () => {
    await mongoose.connect("mongodb+srv://aman:aman@cluster0.j2pz0ru.mongodb.net/prttestdb?retryWrites=true&w=majority").then(res => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })
}

module.exports = conn;