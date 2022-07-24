const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const studentRoutes = require("./routes/student");
const bookRoutes = require("./routes/book");
const borrowRoutes = require("./routes/borrow");
const errorController = require("./controllers/error");

app.use("/student", studentRoutes);
app.use("/book", bookRoutes);
app.use("/borrow", borrowRoutes);
app.use(errorController.get404);

app.listen(3001);
