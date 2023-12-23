import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routes/index.js";
import config from "./config/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { join } from "path";

const app = express();

//PARSES INCOMING REQ BODY AS JSON IF HEADER INDICATES
app.use(express.json());
//ENABLES INCOMING REQS FROM CROSS ORIGIN DOMAINS
app.use(cors());
//LOGS INCOMING REQ TO DEV CONSOLE
app.use(morgan("dev"));
//DIRECTS INCOMING STATIC ASSET REQS TO PUBLIC FOLDER
app.use(express.static(join(__dirname, "../client/build")));
//DIRECTS ROUTES STARTING WITH /api TO TOP LEVEL API EXPRESS ROUTER
app.use("/api", apiRouter);
//SENDS REACT APP INDEX.HTML FOR PAGE REQS
//NEED FOR PRODUCTION ONLY
app.use((req, res, next) => {
  try {
    res.sendFile(join(__dirname, "../client/build/index.html"));
  } catch (error) {
    next(error);
  }
});
//ERROR HANDLING MIDDLEWARE
app.use(errorHandler);
//SPECIFIED PORT FOR APP
app.listen(config.port || 5050, () =>
  console.log(`Server listening on port ${config.port}...`)
);
