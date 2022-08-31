const express = require ("express");
const app = express();
const port = process.env.PORT || 5000;

// app.use(express.static("public"));
// json formatter, jsonview
app.use(express.json());

const myFunc = (req, res, next) => {
    console.log("logged first");
    req.body.first = "first";
    next();
};

const myBetterFunc = (req, res, next) => {
    console.log("logged second");
    req.body.second = "second";
    next();
};

app.post("/", [myFunc, myBetterFunc], (req, res) => {
    console.log(req.body)
    res.send("Hi my name is Elixium");
});

app.get("/hello", (req, res) => {
    console.log(req.query);

    if (req.query.age) {
    res.send({ age: req.query.age });
    } else {
    res.send({ error: "No age found" });
    }
});

// http://localhost:5000/hello?name=dan&age=35&somethingelse=random

app.get("/myname", (req, res) => {
    res.send({ name: "Elixium" });
});

app.get("/myage", (req, res) => {
    res.send({ name: "26" });
});

app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    res.send({ id: req.params.id });
});

app.get("/person/:id", () => {
    console.log(req.params.id);
    res.send({ id: req.params.id });
});

app.post("/", (req, res) => {
    console.log(req.body)
    if(req.body.username ==="xander"){
        console.log(req.body);
        res.status(201).send({ message: "success"});
    } else {
        res.status(400).send({ message: "user does not exist"});
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);    
});
