const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();

const dbConnect = require("./db/dbClient");
dbConnect();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Is Up");
});

app.use("/tasks", require("./db/coponents/tasks/tasks.route"));

app.listen(process.env.SERVER_PORT_DEV, () => {
  let string =
    "server running at http://localhost:" + process.env.SERVER_PORT_DEV + "/";
  console.log(string);
});
