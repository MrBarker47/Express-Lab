
const express = require('express')
const app = express()
const port = 3001;


app.get("/", (req, res) => {
    res.send("Hello, Jamaal how are you today?");
})

app.post("/express", (req, res) => {
    res.send("Hello User");
})


app.get("/user/:userID/profile", (req, res) => {
    res.send(`Go through the users profile page for: ${req.params.userID}`);
})

let log = function(req, res, next) {
    console.log("Charizard is the best")
    next();
};

app.use(log);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
});

