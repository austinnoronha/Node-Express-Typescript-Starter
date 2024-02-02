import { Router, Request, Response } from "express";

export const homeRoute = Router();

homeRoute.get("/", (req: Request, res: Response) => {
    res.render('home');
});
