// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { homeRoute } from "./routes/home";
import { usersRoute } from "./routes/users";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use( homeRoute );
app.use( usersRoute );

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});