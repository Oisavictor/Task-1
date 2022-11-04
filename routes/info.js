const express = require("express")
const infoRoutes = express.Router();
const fs = require('fs');
const dataPath = './info/info.json'  // path to our JSON file


// util functions
const saveInfoData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

const getInfoData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}


// get all info from the json file
infoRoutes.get('/', (req, res) => {
    const info = getInfoData()
    res.send(info)
    saveInfoData(result);
});


// add info to json file
// infoRoutes.post('/info', (req, res) => {
//     const  data = req.body;
    
//     var result;
//     const X = data.X;
//     const Y = data.Y;
//     const operation_type = data.operation_type


//     const operation_types = ["addition", "subtraction", "multiplication"];
//     if(!operation_types.includes(operation_type)){
//         return res.status(400).json({ result : "Invalid operation type provided."});
//     }
   
//     if (operation_type == "addition") {
//         result = X + Y;
//     }else if(operation_type == "subtraction"){
//         result = X - Y;
//     }else if(operation_type == "multiplication"){
//         result = X * Y;
//     }
    
//     if (!result){
//         return res.

//     }
//     return res
//         .status(200)
//         .json({ slackUsername : "Victor Oisamoje", operation_type, result });
// });

infoRoutes.post('/info',(req, res) => {
  const { x, y, operation_type } = req.body;
  const operation_types = ["addition", "subtraction", "multiplication"];
  if (!operation_types.includes(operation_type)) {
    return res
      .status(400)
      .json({ message: "Invalid operation type provided." });
  }

  let result;
  switch (operation_type) {
    case "addition":
      result = x + y;
      break;
    case "subtraction":
      result = x - y;
      break;
    case "multiplication":
      result = x * y;
      break;
    default:
      break;
  }

  if (!result) {
    return res
      .status(400)
      .json({ message: "Can't proceed with request because input is empty." });
  } else {
    return res
      .status(200)
      .json({ slackUsername: "Oisavictor", operation_type, result });
  }
});

module.exports = infoRoutes