const express = require ("express");
const app = express();
const port = process.env.PORT || 5000

// app.use(express.static("public"));
// json formatter, jsonview

app.get("/", (req, res) => {
    res.send("Hi my name is Elixium");
});

app.get("/hello", (req, res) => {
    res.send({ name: "Elixium" });
    console.log(req.query.name);
});

// http://localhost:5000/hello?name=dan&age=35&somethingelse=random

app.get("/myname", (req, res) => {
    res.send({ name: "Elixium" });
});

app.get("/myage", (req, res) => {
    res.send({ name: "26" });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);    
});
