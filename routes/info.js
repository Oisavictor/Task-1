const express = require("express")
const infoRoutes = express.Router();
const fs = require('fs');
const dataPath = './info/info.json'  // path to our JSON file


// util functions
// const saveInfoData = (data) => {
//     const stringifyData = JSON.stringify(data)
//     fs.writeFileSync(dataPath, stringifyData)
// }

const getInfoData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)   
}


// get all info from the json file
infoRoutes.get('/', (req, res) => {
    const info = getInfoData()
    res.send(info)
    // saveInfoData(result);
});


// add info to json file
infoRoutes.post('/info', (req, res) => {
    const  data = req.body;
    
    
    var x = data.x;
    var y = data.y;
    var operation_type = data.operation_type

    const operation_types = ["addition", "subtraction", "multiplication"];
    if(!operation_types.includes(operation_type)){
        return res.status(400).json({ result : "Invalid operation type provided."});
    }

    var result;
    if (operation_type == "addition") {
        result = x + y;
    }else if(operation_type == "subtraction"){
        result = x - y;
    }else if(operation_type == "multiplication"){
        result = x * y;
    }
    return res.status(200).json({ slackUsername : "Oisavictor", operation_type, result });
});




module.exports = infoRoutes