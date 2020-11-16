const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const app = express();

async function start(){
    try{
        await mongoose.connect('mongodb+srv://nodejsapp:A123456a@app1.iraug.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        app.listen(PORT, () => {
            console.log("Server has been started...");
        });
    } catch (e) {
        console.log(e);
    }
}

start();