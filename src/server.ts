// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import {default as hbs} from "hbs";
import { homeRoute } from "./routes/home";
import { usersRoute } from "./routes/users";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set('view options', { layout: 'layouts/main' });

app.use(homeRoute);
app.use(usersRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
