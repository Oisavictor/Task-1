var express = require('express');
var app = express(); 
var PORT = 3000;
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
app.post('/s', function (req, res) {
  var data = req.body;
  
  console.log("x: ", data.x);
  console.log("y: ", data.y);
  console.log("operation_type: ", data.operation_type);
    
  res.send();
});
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

