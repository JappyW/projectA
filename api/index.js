import config from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import rootRoutes from "./server/routes/RootRoutes";
import multer from "multer";
import { SERVER_PORT_DEFAULT } from "./server/constants/server.env.json";
import { CLIENT_DOMAIN_DEFAULT } from "./server/constants/server.env.json";
import STATUS from "./server/constants/status.code.env.json";
import cron from "node-cron";

config.config();

const app = express();
const cors = require("cors");
const port = process.env.PORT || SERVER_PORT_DEFAULT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: CLIENT_DOMAIN_DEFAULT }));
app.use(rootRoutes);
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading.
    res.status(STATUS.INCORRECT).send(err.message);
  }
});

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