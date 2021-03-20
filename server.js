const express = require('express');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.static(__dirname+'/dist/DLmanager'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/DLmanager/index.html'));
});

app.use(cors({
    origin: '*'
}));

app.listen(process.env.PORT || 8080);