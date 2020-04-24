import express from "express";
import path from "path";

const app = express();

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

app.post("/form", (req,res) => {
    res.status(200).json(req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("starting on port " + port);
});


export default app;