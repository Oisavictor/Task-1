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
});


// add info to json file
infoRoutes.post('/addInfo', (req, res) => {
    const existInfo = getInfoData()
    // const newInfoId = Math.floor(100000 + Math.random() * 900000)
    existInfo = req.body
    // existInfo[newInfoId] = req.body
    saveInfoData(existInfo);
    res.send({success: true, msg: 'info added successfully'})
});





module.exports = infoRoutes