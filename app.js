require("dotenv").config();
const express = require("express");
const task = require("./routes/taskRoute");

require("./config/db").ConnectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", task);

app.listen(4000, () => {
  console.log(`listening on port 4000`);
});
