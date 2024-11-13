// const express = require('express')
// const app = express()
// const port = 3000;

// app.listen(port, () => {
//     console.log(`Server listening on port: ${port},`)
// })

var view = {
    title: "Joe",
    calc: function () {
      return 2 + 4;
    }
  };
  
  var output = Mustache.render("{{title}} spends {{calc}}", view);