const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Manager A CRUD Application ",
      version: "0.1.0",
    },
  },
  apis: ["./routes/*.js", "./controllers/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = openapiSpecification;
