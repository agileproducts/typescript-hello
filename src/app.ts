import express from "express";
import path from "path";

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", 'ejs');

app.get('/', (req, res) => {
    res.status(200);
    res.render("home");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("starting on port " + port);
});


export default app;