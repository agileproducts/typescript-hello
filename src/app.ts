import express from "express";
import path from "path";

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

app.post("/form-handler", formHandler, (req,res) => {
    res.redirect(303, "/form-receipt");
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