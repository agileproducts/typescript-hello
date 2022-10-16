import express from "express";
import path from "path";

//Controllers (route handlers)
import * as homeController from "./controllers/home"
import * as formController from "./controllers/form"

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", 'ejs');
app.use(express.urlencoded({extended:true}));

app.get("/", homeController.index);
app.get("/form", formController.index);
app.post("/form-handler", formController.handler);
app.get("/form-receipt", formController.receipt);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("starting on port " + port);
});


export default app;