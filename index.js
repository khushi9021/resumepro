var express = require("express");
const mongoose = require("mongoose");

var app = express();

mongoose.connect("mongodb://localhost:27017/resume");
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.on("open", () => console.log("connection Estabilshed"));
app.use(express.json());

app.use((res, req, next) => {
  res.header("Access-control-Allow-origin", "*");
  res.header("Access-control-Allow-Headers", "*");
  if (req.method == "OPTIONS") {
    res.header("Access-control-Allow-methods", "POST,GET,PUT,PATCH,DELETE");
    return res.status(200).json({});
  }
  next();
});

app.get("/", function (req, res) {
  res.send(" Hello welcome to Resume Building ");
  res.end();
});



app.get("/hello", function (req, res) {
  res.send(" This is hello page. we are happy to build your resume. we will try to design your best resume");
  res.end();
});

app.use("/admin", require("./routes/admin"));
app.use("/objective", require("./routes/objective"));

app.listen(8081, function () {
  console.log("Node server started");
});