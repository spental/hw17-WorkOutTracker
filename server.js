const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8089;
// express app//
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// set our mongoose connection to  the mongo atlas uri or local host//
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:Password69@cluster0.ekoru.mongodb.net/myFirstDatabase", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// require our html and api routes//
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//listen to the port
app.listen(PORT,()=>{
    console.log(`listen to the port ${PORT}`);
});