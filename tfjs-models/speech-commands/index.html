
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/speech-commands"></script>
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/speech-commands@0.3.6"> </script> 
    <script src='https://code.responsivevoice.org/responsivevoice.js'></script>
    -->

    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.1.2"> </script> 
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/speech-commands@0.3.8"> </script> 


<script>


///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// Start original script.js /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////



/* globals speechCommands */
let recognizer;
     
let transferRecognizer   

    
let recognizerOptions = {
    vocabulary: 'directional4w',        // only: up down left right
   // vocabulary: '18w',                // all 18 words
    probabilityThreshold: 0.85,
  };

async function startListening(options, onResult) {
  const {vocabulary, probabilityThreshold} = options;  
  recognizer = speechCommands.create('BROWSER_FFT', vocabulary);
  await recognizer.ensureModelLoaded();
  const words = recognizer.wordLabels(); 
    
    
  console.log('words')  
  console.log(words)  
  recognizer.params().sampleRateHz = 48000
    
    
    
  console.log('speechCommands')
  console.log(speechCommands)
  console.log('recognizer')
  console.log(recognizer)
    
    
    console.log(speechCommands.listSavedTransferModels)
    
    console.log(recognizer.wordLabels())
      console.log('recognizer.params().sampleRateHz');
    
  console.log('recognizer.params().sampleRateHz');
  console.log(recognizer.params().sampleRateHz);
  //console.log(recognizer.params().fftSize);
  
  recognizer.listen(result => {    
    const maxScore = Math.max(...result.scores);    
    const maxScoreIndex = result.scores.indexOf(maxScore);    
    const detectedWord = words[maxScoreIndex];    
    
    // Don't trigger on background noise or unknown.
    if (maxScore > probabilityThreshold && maxScoreIndex < 4) {
      onResult({
        detectedWord,
        detectedWordScore: maxScore,
        scores: Array.from(result.scores),
      });
    }
  });
  
}

    
async function startListening2(options, onResult) {
  const {vocabulary, probabilityThreshold} = options;  
 // transferRecognizer = speechCommands.create('BROWSER_FFT', vocabulary);
 // await recognizer.ensureModelLoaded();
  const words = transferRecognizer.wordLabels(); 
    
    
  console.log('words')  
  console.log(words)  
  transferRecognizer.params().sampleRateHz = 48000
    
    
    
  //console.log('speechCommands')
 // console.log(speechCommands)
  console.log('transferRecognizer')
  console.log(transferRecognizer)
    

  
  transferRecognizer.listen(result => {    
    const maxScore = Math.max(...result.scores);    
    const maxScoreIndex = result.scores.indexOf(maxScore);    
    const detectedWord = words[maxScoreIndex];    
    
    // Don't trigger on background noise or unknown.
    if (maxScore > probabilityThreshold && maxScoreIndex < 4) {
      onResult({
        detectedWord,
        detectedWordScore: maxScore,
        scores: Array.from(result.scores),
      });
    }
  });
  
}
    
    
    
    
async function stopListening() {
  if (recognizer != null) {
    recognizer.stopListening()
  }
}
    
    
async function stopListening2() {
  if (transferRecognizer != null) {
    transferRecognizer.stopListening()
  }
}
       
    
    

function onDetection(detectionResult) {
//  console.log('ondetection', detectionResult);
  const { detectedWord } = detectionResult;
  console.log(detectionResult)
 // console.log(detectedWord)
  document.getElementById('myDiv01').innerHTML = detectedWord
   
    
    // Note: speaking seems to mess up the sensing unless you have headphones
 // setTimeout(function(){    
  //  if (detectedWord == 'left'){ responsiveVoice.speak('Why do you want to go west?', 'US English Female', {pitch: 1, rate: 1, volume : 1}) }  
 //   if (detectedWord == 'right'){ responsiveVoice.speak('Going to the east', 'US English Female', {pitch: 1, rate: 1, volume : 1}) }    
  //  if (detectedWord == 'up'){ responsiveVoice.speak('North, you really want to go North?', 'US English Female', {pitch: 1, rate: 1, volume : 1}) }   
  //  if (detectedWord == 'down'){ responsiveVoice.speak('Going South now', 'US English Female', {pitch: 1, rate: 1, volume : 1}) }    
 // }, 30);
  
    
    
}





///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// End original script.js /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
</script>



<h2 align=center>tensorflow-models/speech-commands easiest example </h2>

<div id="myDiv01">...</div><br><br>



    

<input type=button value="Start 1" onclick="{
   console.log('Started listening')    
   startListening(recognizerOptions, onDetection);
}">
        
<input type=button value="Stop 1" onclick="{
   stopListening()
   console.log('Stop Listening')

}"> 
  
         
<input type=button value="train 2" onclick="{

(async function(){       
  const NewRecognizer = speechCommands.create('BROWSER_FFT', 'directional4w');
  await NewRecognizer.ensureModelLoaded();
  NewRecognizer.params().sampleRateHz = 48000
  
  console.log('NewRecognizer.wordLabels()')  
  console.log(NewRecognizer.wordLabels())   
  
       
       
       
  transferRecognizer = NewRecognizer.createTransfer('directional4w');
  console.log('Get Ready')         
  console.log('say left')     
  await transferRecognizer.collectExample('left');
  console.log('say left')     
  await transferRecognizer.collectExample('left');
 
       
  console.log('say right')     
  await transferRecognizer.collectExample('right');
  console.log('say right')     
  await transferRecognizer.collectExample('right');
       
  console.log('say up')     
  await transferRecognizer.collectExample('up');
  console.log('say up')     
  await transferRecognizer.collectExample('up');
       
  console.log('say down')     
  await transferRecognizer.collectExample('down');
  console.log('say down')     
  await transferRecognizer.collectExample('down');
  
  console.log('set _background_noise_')     
  await transferRecognizer.collectExample('_background_noise_');     
  console.log('set _background_noise_')     
  await transferRecognizer.collectExample('_background_noise_');     
       
       
       
       
  console.log('Done')     
       
  console.log('transferRecognizer.countExamples()');      
  console.log(transferRecognizer.countExamples());   
       
  console.log('transferRecognizer.wordLabels()')  
  console.log(transferRecognizer.wordLabels())   
       
  //words = transferRecognizer.wordLabels();       
  transferRecognizer.optimizer  = tf.train.sgd(0.000002); 
       
       
  await transferRecognizer.train({
  epochs: 2,
  callback: {
    onEpochEnd: async (epoch, logs) => {
      console.log(`Epoch ${epoch}: loss=${logs.loss}, accuracy=${logs.acc}`);
    }
  }
});     
       
       
       
  
    console.log('Started listening')    
   startListening(recognizerOptions, onDetection);     
                                            
                                            
       
 })()   
       
 

}"> 
  
 
  
  
  
  
  
  
<!-- <input  type="button" value="initilize speak" onclick="{  
    responsiveVoice.speak('Test for speaking', 'US English Female', 
{pitch: 1, rate: 1, volume : 1})                                              
}"> 
  -->
  
  
  
 
   
 
  
  
  
   
  
  
  
  
  
  
  <br> <br> <br>      
        
        
Original example by @tafsiri at <a href="https://glitch.com/~tfjs-speech-commands">https://glitch.com/~tfjs-speech-commands</a><br><br><br>
                                                                                  
This website is able to understand 4 speech commands, it works best if you use headphones or an external speaker:<br>

"up", "down", "left", "right", <br><br>
Still testing the full 18 commands:<br>
                             
0, 1, 2, 3, 4, 5, 6,7 8, 9,<br>  
"go", "stop", "yes", "no", <br>
"unknown word" , "background noise".
<br><br>
                                   
            
