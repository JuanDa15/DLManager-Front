const express = required('express');
const path = required('path');

const app = express();

app.use(express.static(__dirname+'/dist/DLmanager'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/DLmanager/index.html'));
});