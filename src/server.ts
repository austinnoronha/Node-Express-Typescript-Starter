// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import logger from "morgan";
import * as expHbs from "express-handlebars";
import { homeRoute } from "./routes/home";
import { usersRoute } from "./routes/users";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//Sets our app to use the handlebars engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  expHbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
  })
);

//Defining middleware to serve static files
app.use("/assets", express.static('public'));
// This will use the contents of 'bootstrap/dist/css' which is placed in your node_modules folder as if it is in your '/styles/css' directory.
app.use("/bootstrap/css", express.static(path.join(__dirname, "..", "node_modules/bootstrap/dist/css")));
// This will use the contents of 'bootstrap/dist/js' which is placed in your node_modules folder as if it is in your '/styles/css' directory.
app.use("/bootstrap/js", express.static(path.join(__dirname, "..", "node_modules/bootstrap/dist/js")));


//Set Logger
app.use(logger('combined'));

app.use(homeRoute);
app.use(usersRoute);

//catch 404 and forward to error handler
app.use((req: Request, res: Response, next) => {
  var err = new Error("Not Found");
  res.status(404); // using response here
  res.set('X-Custom-Page-Err', 'Page not found!')
  res.send("Oops! I don't exist.")
  if(app.get('env') === 'development'){
    // add custom message or code  
  }
  //next(err);
});


//Server listens to PORT:3000
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
