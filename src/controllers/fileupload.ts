import { Request, Response } from "express";

/* GET basic form page */
export const index = (req:Request, res:Response) => {
  res.status(200);
  res.render("fileupload");
}