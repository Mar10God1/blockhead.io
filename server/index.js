// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import authenticationRoutes from "./routes/AuthenticationRoutes";
import listRoutes from "./routes/ListRoutes";
import articleRoutes from "./routes/blog/ArticleRoutes";
import coinRoutes from "./routes/CoinRoutes";

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://mgodwin:mgodwin@ds143907.mlab.com:43907/blockhead");

const app = express();
app.use(express.static("public"));

app.get("*", (req, res, next) => {
  res.sendFile("public/index.html");
});
app.use(bodyParser.json());
app.use(authenticationRoutes);


const authStrategy = passport.authenticate("authStrategy", { session: false });
app.use(authStrategy);
app.use(listRoutes);
app.use(articleRoutes);
app.use(coinRoutes);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

