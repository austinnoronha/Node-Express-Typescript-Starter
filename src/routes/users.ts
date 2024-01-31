import { Router, Request, Response } from "express";

export const usersRoute = Router();

usersRoute.get("/users", (req: Request, res: Response) => {
  res.send("We have 10 users!");
});

