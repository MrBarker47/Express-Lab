//This code works in the terminal, but having issues with it on the browser so I have to figure that out. 
const express = require('express')
const app = express()
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello, Jamaal how are you today?");
})

app.post("/express", (req, res) => {
    res.send("Hello User");
})


app.get("/user/:userID/profile", (req, res) => {
    res.send(`Go through the users profile page for: ${req.params.userID}`);
})


//Template Engine from Mustache
function renderHello() {
    let template = document.getElementById('template').innerHTML;
    let rendered = Mustache.render(template, { name: 'Luke' });
    document.getElementById('target').innerHTML = rendered;
  }

  //Middleware



let log = function(req, res, next) {
    console.log("Charizard is the best")
    next();
};

app.use(log);




app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`)
});
 
