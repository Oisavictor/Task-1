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
infoRoutes.post('/info', (req, res) => {
    const  data = req.body;
    
    var result;
    const X = data.X;
    const Y = parseInt(data.Y);
    const operation_type = data.operation_type


    const operation_types = ["+", "-", "*"];
    if(!operation_types.includes(operation_type)){
        return res.status(400).json({ result : "Invalid operation type provided."});
    }
   
    if (operation_type == "+") {
        result = X + Y;
    }else if(operation_type == "-"){
        result = X - Y;
    }else if(operation_type == "*"){
        result = X * Y;
    }
    
    return res.status(200).json({ slackUsername : "Victor Oisamoje", operation_type, result });
});



module.exports = infoRoutes