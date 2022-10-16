import { Request, Response } from "express";
import { contact } from "../lib/contact";

/* GET basic form page */
export const index = (req:Request, res:Response) => {
  res.status(200);
  res.render("form");
}

/* POST form handler */
export const handler = (req:Request, res:Response) => {
  contact(req.body, (err, contact) => {
    if(err) {
        console.log(err.message);
        res.redirect(303, "/form");
    } else {
        console.log(contact);
        res.redirect(303, "/form-receipt");
    }
  });
}

/* GET form receipt */
export const receipt = (req:Request, res:Response) => {
  res.status(200);
  res.render("form-receipt"); 
}