import config from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import rootRoutes from "./server/routes/RootRoutes";
import { SERVER_PORT_DEFAULT } from "./server/constants/server.env";
import { CLIENT_DOMAIN_DEFAULT } from "./server/constants/server.env";
import STATUS from "./server/constants/status.code.env";

config.config();

const app = express();
const cors = require("cors");
const port = process.env.PORT || SERVER_PORT_DEFAULT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use(rootRoutes);

// when a random route is inputed
app.get("*", (req, res) =>
  res.status(STATUS.SUCCESS).send({
    message: "Welcome to this API."
  })
);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

export default app;