import express from "express";
import path from "path";
import {contact} from "./lib/contact";

const app = express();

function formHandler(req, res, next) {
    console.log(req.body);
    next();
};

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", 'ejs');
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.status(200);
    res.render("home");
});

app.get("/form", (req, res) => {
    res.status(200);
    res.render("form");
});

app.post("/form-handler", (req,res) => {
    try {
        contact(req.body);
        res.redirect(303, "/form-receipt");
    }
    catch(error) {
        console.log(error.message);
        res.redirect(303, "/form");
    }
});

app.get("/form-receipt", (req, res) => {
    res.status(200);
    res.render("form-receipt");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("starting on port " + port);
});


export default app;