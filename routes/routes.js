const express = require("express")
const router = express.Router();
const fs = require('fs');
const InfoRoutes = require('./info') // import info route


router.use(InfoRoutes) // use account route


module.exports = router;