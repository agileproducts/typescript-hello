import express from "express";

const app = express();

app.get('/', (req,res) => {
    res.status(200).send("Hello world!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("starting on port " + port);
});


export default app;