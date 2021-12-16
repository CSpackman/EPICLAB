const express = require('express')
const app = express();
const port = 8000;
const path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ 
  extended: true
})); 

app.get('/', (req, res) => {
  res.send('hi')
});

app.post('/authenticate',function(req, res){
    if(req.body.password=="password"){
      res.sendFile(path.join(__dirname, 'secure.html'))
    }else{
      res.send("failed because of wrong username")
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});