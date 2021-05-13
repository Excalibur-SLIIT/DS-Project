const { response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const mongo = require("mongoose");
//---------------routes-------------------------


const itemRoute = require("./routes/item.routes");


//----------------------------------------------
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
require("dotenv").config();

const url = process.env.DB_URI;

mongo.connect(url,{ useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true, useFindAndModify: false });

const connection = mongo.connection;

connection.once("open", () => {
    console.log("Database connected!");
});

const port = 5000;


app.use("/item", itemRoute);


app.listen(port,() => {
    console.log(`server started on port ${port}`);
});