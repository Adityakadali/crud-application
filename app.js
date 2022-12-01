require("dotenv").config();
const express = require("express");
const task = require("./routes/taskRoute");
const swaggerUi = require("swagger-ui-express");
const openapiSpecification = require("./utils/swagger");

const port = process.env.PORT || 4000;

require("./config/db").ConnectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", task);

app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(openapiSpecification));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
