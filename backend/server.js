const { response } = require("express");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");
const mongo = require("mongoose");
const multer = require("multer");

//---------------routes-------------------------

const sellerRoute = require("./routes/seller.routes");
const buyerRoute = require("./routes/buyer.routes");
const itemRoute = require("./routes/item.routes");
const cartsRoute = require("./routes/carts.routes")
const checkoutRoute = require("./routes/chekout.routes");
const historyRoute = require("./routes/history.routes");
const imageRoute = require("./routes/image.routes");

//----------------------------------------------
app.use(express.json());
app.use(cors());
require("dotenv").config();

const url = process.env.DB_URI;

mongo.connect(url,{ useNewUrlParser : true, useCreateIndex : true, useUnifiedTopology : true, useFindAndModify: false }).catch(err => console.log(err));

const connection = mongo.connection;

connection.once("open", () => {
    console.log("Database connected!");
});

const port = 5000;

app.use("/images",express.static('public'));
// format http://localhost:5000/images/item-image/image-{imagetag}}

app.use("/seller", sellerRoute);
app.use("/buyer", buyerRoute);
app.use("/item", itemRoute);
app.use("/carts", cartsRoute);
app.use("/checkout", checkoutRoute);
app.use("/history", historyRoute);
app.use("/image", imageRoute);

app.listen(port,() => {
    console.log(`server started on port ${port}`);
});