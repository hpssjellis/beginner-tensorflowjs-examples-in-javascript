'use strict';

const fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true })); 

// write a webpage here





let rawdata1 = fs.readFileSync('student-1.json');  
let layer01 = JSON.parse(rawdata1);  
console.log(layer01); 

let rawdata2 = fs.readFileSync('student-2.json');  
let layer02 = JSON.parse(rawdata2);  
console.log(layer02); 



const myHTML = `    
<h3>Read from file All json weights</h3>
   <label for="name">Jason Weights:</label><br>
   <textarea id="name" name="name"  rows=10 cols=70 placeholder="Enter the JSON Weights" >`+
   JSON.stringify(layer01, null, 4) + JSON.stringify(layer02, null, 4) +`</textarea><br><br>

<h3>Write to file a single set of json weights</h3>
<form action="https://blank-node-rocksetta.c9users.io/myaction" method="post">
   <input type="submit" value="Send Data" /><br>
   <label for="name">Jason Weights:</label><br>
   <textarea id="myWeightsToSend" name="myWeightsToSend"  rows=10 cols=70 placeholder="Enter the JSON Weights" ></textarea><br>

   <input type=number id="myLevel" name="myLevel" value=1>
   <input type="submit" value="Send Data" />
</form>





`;
// rest of the webpage needs to go above





// send the main webpage
app.get('/', (req, res) => res.send(myHTML));



// what do do when the web pages posts to the virtual folder
app.post('/myaction', function(req, res) {
  //res.send(req.body.myWeightsToSend + ', <br>level:'+req.body.myLevel); // replies to submit
  let data = req.body.myWeightsToSend; 
  let myFileName = 'student-'+ req.body.myLevel + '.json'
  fs.writeFileSync(myFileName, data);  

  //console.log(req.body.name);
});



// generic webpage listening
app.listen(process.env.PORT, function() {
  console.log('Server running at:???');
});
