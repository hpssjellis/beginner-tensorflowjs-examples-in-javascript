'use strict';

const fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true })); 

// write a webpage here


function myMake(){


let rawdata1 = fs.readFileSync('tfjs-layer-0.txt', 'utf8');  
let rawdata2 = fs.readFileSync('tfjs-layer-1.txt', 'utf8');  
//let layer01 = JSON.parse(rawdata1); 









var myHTML = `  
<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.12.6"> </script> 

 

<input id="myButton5858" type="button" value="Load pre-saved weights from textarea 10,000 batches" onclick="{

  //const weightsJSON =   JSON.parse(document.getElementById('myJsonArea').value)
  const startTime = performance.now();
  document.getElementById('myDiv5858').innerHTML = '<br>'
  document.getElementById('myButton5858').style.backgroundColor = 'red'  
                                                                                                                                                        
  async function myGo() {
												  											 												  
    model = tf.sequential();
    model.add(tf.layers.dense({ units: 3, name: 'hiddenLayer', activation: 'sigmoid' , inputShape: [2] }) );  
    model.add(tf.layers.dense({ units: 1, name: 'outputLayer', activation: 'sigmoid' }) );    


 
   // model.loadWeights(weightsJSON);
   
   
   // here we load all the layers
   
   let myLayerArray1 = document.getElementById('name1').value.split('!...!')
   let myLayerWeights1 = myLayerArray1[0].split(',') 
   let myLayerBias1 = myLayerArray1[1].split(',') 

   model.layers[0].setWeights([tf.tensor2d(myLayerWeights1, shape=[2,3]), tf.tensor1d(myLayerBias1)])
   
      
   let myLayerArray2 = document.getElementById('name2').value.split('!...!')
   let myLayerWeights2 = myLayerArray2[0].split(',') 
   let myLayerBias2 = myLayerArray2[1].split(',') 

   model.layers[1].setWeights([tf.tensor2d(myLayerWeights2, shape=[3,1]), tf.tensor1d(myLayerBias2)])
   
   
   
   
   // model.layers[0].setWeights(JSON.parse(document.getElementById('name1').value))
   // model.layers[1].setWeights(JSON.parse(document.getElementById('name2').value))
   
  //  model.layers[0].setWeights(document.getElementById('name1').value)
  //  model.layers[1].setWeights(document.getElementById('name2').value)
    
   // console.log(document.getElementById('name1').value)
   // model.layers[1].setWeights(document.getElementById('name2').value)
    
    
    

    const training_data2 = tf.tensor2d([[0,0],[0,1],[1,0],[1,1]]);   // array defines shape
    const myPredictArray2 = await model.predict(training_data2).data()

    document.getElementById('myDiv5858').innerHTML += '[0,0] = ' + myPredictArray2[0].toFixed(4) +'<br>'
    document.getElementById('myDiv5858').innerHTML += '[1,0] = ' + myPredictArray2[1].toFixed(4) +'<br>'
    document.getElementById('myDiv5858').innerHTML += '[0,1] = ' + myPredictArray2[2].toFixed(4) +'<br>'
    document.getElementById('myDiv5858').innerHTML += '[1,1] = ' + myPredictArray2[3].toFixed(4) +'<br>'

    const endTime = performance.now();
    document.getElementById('myDiv5858').innerHTML += 'Duration ' + (endTime-startTime).toFixed(4) +'ms <br>'												  
    document.getElementById('myButton5858').style.backgroundColor = 'lightgrey'                    
  }

  setTimeout(function(){  myGo() }, 10);   // wait a bit for the GUI to update

}"><br><br><br>

<input type=button value="train" onclick="{
    
    const myOptimizer = tf.train.sgd(0.5); 
    model.compile({optimizer: myOptimizer, loss: 'meanSquaredError'}); 
    
    const xTrainingData   = tf.tensor2d([[0,0], [0,1], [1,0], [1,1]]);      // array defines shape
    const yTrainingTarget = tf.tensor2d([0,1,1,0], shape=[4,1]);            // needs shape defined
    
    
    
    (async function () {                                                                             
    var myFit = await model.fit(xTrainingData, yTrainingTarget, {
        batchSize : 4,
        epochs    : 400,                                                                      
        callbacks:  { 
          onEpochEnd: async (epoch, logs) => {                                                                                         
            document.getElementById('myDiv123').innerHTML = 'Epoch # ' + (epoch+1) + '/400, Loss: ' + logs.loss + '<br><br>'

          }    // end onEpochEnd callback 
        }      // end all callbacks                                                              
      })       // end model.fit   
 
    
    const training_data2 = tf.tensor2d([[0,0],[0,1],[1,0],[1,1]]);   // array defines shape
    const myPredictArray2 = await model.predict(training_data2).data()
 
    document.getElementById('myDiv5858').innerHTML += '[0,0] = ' + myPredictArray2[0].toFixed(4) +'<br>'
    document.getElementById('myDiv5858').innerHTML += '[1,0] = ' + myPredictArray2[1].toFixed(4) +'<br>'
    document.getElementById('myDiv5858').innerHTML += '[0,1] = ' + myPredictArray2[2].toFixed(4) +'<br>'
    document.getElementById('myDiv5858').innerHTML += '[1,1] = ' + myPredictArray2[3].toFixed(4) +'<br>' 
    
    //document.getElementById('myWeightsToSend').value = JSON.stringify(model.layers[0].getWeights(), null, 4)
   //  document.getElementById('myWeightsToSend').value = model.layers[0].getWeights()
   //  document.getElementById('myWeightsToSend').value += model.layers[1].getWeights()
   
 
  //  console.log(model.layers[0].getWeights()[0].dataSync())
  //  console.log(model.layers[0].getWeights()[1].dataSync())
  //  console.log(model.layers[1].getWeights()[0].dataSync())
  //  console.log(model.layers[1].getWeights()[1].dataSync())

   
   document.getElementById('myWeightsToSend').value = 
                  model.layers[parseInt(document.getElementById('myLevel').value)].getWeights()[0].dataSync() + '!...!'+
                  model.layers[parseInt(document.getElementById('myLevel').value)].getWeights()[1].dataSync() 
   
   
   // for first layer
 //  document.getElementById('myWeightsToSend').value = 
  //                model.layers[0].getWeights()[0].dataSync() + '!...!'+
   //               model.layers[0].getWeights()[1].dataSync() 
   
   
   // for second layer   
 //  document.getElementById('myWeightsToSend').value = 
 //                 model.layers[1].getWeights()[0].dataSync() + '!...!'+
  //                model.layers[1].getWeights()[1].dataSync() 
   
   
   
   // document.getElementById('myWeightsToSend').value = new TextDecoder().decode(myDataView)
    //document.getElementById('myWeightsToSend').value = myDataView
    
    


    
    
    })()    
    
}">

<div id='myDiv123'>...</div><br>
<div id='myDiv5858'>...</div><br>




<h3>Read from file All json weights</h3>
   <label for="name">Jason Weights:</label><br>
   

   <textarea id="name1" name="name1"  rows=3 cols=130 placeholder="Enter the JSON Weights" >`+
   rawdata1+
   `</textarea><br><br>
    <textarea id="name2" name="name2"  rows=3 cols=130 placeholder="Enter the JSON Weights" >`+
   rawdata2+
   `</textarea><br><br>
<h3>Write to file a single set of json weights</h3>
<form action="https://blank-node-rocksetta.c9users.io/myaction" method="post">
   <input type="submit" value="Send Data" /><br>
   <label for="name">Jason Weights:</label><br>
   <textarea id="myWeightsToSend" name="myWeightsToSend"  rows=3 cols=130 placeholder="Enter the JSON Weights" ></textarea><br> 
 Choose a layer to save, before training
  <select id="myLevel" name="myLevel">
    <option value=0>0
    <option value=1>1
  </select>
   Password (needs localstorage here) <input type=password id="myPass" name="myPass">
   <input type="submit" value="Send Data" />
</form>












`;

return myHTML;


}





// rest of the webpage needs to go above





// send the main webpage
app.get('/', (req, res) => {
  
    res.send(myMake())
    
});



// what do do when the web pages posts to the virtual folder
app.post('/myaction', function(req, res) {
  //res.send(req.body.myWeightsToSend + ', <br>level:'+req.body.myLevel); // replies to submit
  let data = req.body.myWeightsToSend; 
  let myFileName = 'tfjs-layer-'+ req.body.myLevel + '.txt'
  
  if (req.body.myPass == 'secret set of words'){
     fs.writeFileSync(myFileName, data);  
  }
  
  
  //Send the updated page
  res.send(`<body onload="{location.replace(document.referrer);}"></body>`);
  //console.log(req.body.name);
});



// generic webpage listening
app.listen(process.env.PORT, function() {
  console.log('Server running');
});
