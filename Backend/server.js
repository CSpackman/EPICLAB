const express = require('express')
const app = express();
const port = 8000;
const path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ 
  extended: true
})); 

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/authenticate',function(req, res){
    if(req.body.password=="password"){
      res.sendFile(path.join(__dirname, 'secure.html'))
    }else{
      res.send("fail")
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});