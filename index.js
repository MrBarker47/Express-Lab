//This code works in the terminal.
const express = require('express')
const app = express()
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello, Jamaal how are you today?");
})

app.post("/", (req, res) => {
    res.send("Hello User");
})


app.put("/user", (req, res) => {
  res.status(201).send("You got mail!");
})



//Template Engine from Mustache
function renderHello() {
    let template = document.getElementById('template').innerHTML;``
    let rendered = Mustache.render(template, { name: 'Luke' });
    document.getElementById('target').innerHTML = rendered;
  }

  //Middleware
let cookieParser = require("cookie-parser");
app.use(cookieParser())



//Using the res.download, or least trying to learn how to use it. 
app.get("/download", (req, res) => {
    res.download("./images/Food1.png", "Food1.png", (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log("Download it");
        }
    })
});
let log = function(req, res, next) {
    console.log("Charizard is the best")
    next();
};

app.use(log);




app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
});
 
