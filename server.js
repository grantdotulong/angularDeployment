//dependencies
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./server/config/routes");
//Middleware
app.use(express.static(__dirname + '/public/dist/public'));
app.use(bodyParser.json());
//routes
routes(app);
// server listener
app.listen(8000, function() {
  console.log("listening on port 8000");
})