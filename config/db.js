const mongoose = require("mongoose");

const ConnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("DB Connected successfully"))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = { ConnectDB };
