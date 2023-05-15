const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const app = express();
const cors = require('cors');

//middle ware
app.use(express.json())
app.use(cors());
app.use("/books", router);




mongoose.connect(
    "mongodb+srv://user-admin:xN2FMN7j8Lq4Jic3@cluster0.btpbcte.mongodb.net/Bookdb?retryWrites=true&w=majority"
    ).then(()=>console.log('connected to database'))
    .then(()=>{
        app.listen(5000);

    })
    .catch((err)=>console.log(err));


//xN2FMN7j8Lq4Jic3
//jTkfg9ul7y47iheC