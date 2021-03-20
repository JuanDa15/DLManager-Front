const express = require('express');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.static(__dirname+'/dist/dlmanager'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/dlmanager/index.html'));
});

app.listen(process.env.PORT || 8080);