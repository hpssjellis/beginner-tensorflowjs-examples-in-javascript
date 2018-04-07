/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
//import * as tf from '@tensorflow/tfjs';



var ui = ui || {}



const CONTROLS = ['up', 'down', 'left', 'right'];
const CONTROL_CODES = [38, 40, 37, 39];

ui.init = function(){
  document.getElementById('controller').style.display = '';
  statusElement.style.display = 'none';
}



const trainStatusElement = document.getElementById('train-status');

// Set hyper params from UI values.


const learningRateElement = document.getElementById('learningRate');


ui.getLearningRate = () => +learningRateElement.value;




const batchSizeFractionElement = document.getElementById('batchSizeFraction');




ui.getBatchSizeFraction = () => +batchSizeFractionElement.value;




const epochsElement = document.getElementById('epochs');




ui.getEpochs = () => +epochsElement.value;




const denseUnitsElement = document.getElementById('dense-units');



ui.getDenseUnits = () => +denseUnitsElement.value;



const statusElement = document.getElementById('status');



ui.startPacman = function(){
  google.pacman.startGameplay();
}





ui.predictClass = function(classId) {
  google.pacman.keyPressed(CONTROL_CODES[classId]);
  document.body.setAttribute('data-active', CONTROLS[classId]);
}



ui.isPredicting = function() {
  statusElement.style.visibility = 'visible';
}



ui.donePredicting = function() {
  statusElement.style.visibility = 'hidden';
}



ui.trainStatus = function(status) {
  trainStatusElement.innerText = status;
}

var addExampleHandler;



ui.setExampleHandler = function(handler) {
  addExampleHandler = handler;
}




let mouseDown = false;
const totals = [0, 0, 0, 0];

const upButton = document.getElementById('up');
const downButton = document.getElementById('down');
const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');

const thumbDisplayed = {};




ui.handler = async function(label) {
  mouseDown = true;
  const className = CONTROLS[label];
  const button = document.getElementById(className);
  const total = document.getElementById(className + '-total');
  while (mouseDown) {
    addExampleHandler(label);
    document.body.setAttribute('data-active', CONTROLS[label]);
    total.innerText = totals[label]++;
    await tf.nextFrame();
  }
  document.body.removeAttribute('data-active');
}

upButton.addEventListener('mousedown', () => ui.handler(0));
upButton.addEventListener('mouseup', () => mouseDown = false);

downButton.addEventListener('mousedown', () => ui.handler(1));
downButton.addEventListener('mouseup', () => mouseDown = false);

leftButton.addEventListener('mousedown', () => ui.handler(2));
leftButton.addEventListener('mouseup', () => mouseDown = false);

rightButton.addEventListener('mousedown', () => ui.handler(3));
rightButton.addEventListener('mouseup', () => mouseDown = false);






ui.drawThumb = function(img, label) {
  if (thumbDisplayed[label] == null) {
    const thumbCanvas = document.getElementById(CONTROLS[label] + '-thumb');
    ui.draw(img, thumbCanvas);
  }
}

ui.draw = function(image, canvas) {
  const [width, height] = [224, 224];
  const ctx = canvas.getContext('2d');
  const imageData = new ImageData(width, height);
  const data = image.dataSync();
  for (let i = 0; i < height * width; ++i) {
    const j = i * 4;
    imageData.data[j + 0] = (data[i * 3 + 0] + 1) * 127;
    imageData.data[j + 1] = (data[i * 3 + 1] + 1) * 127;
    imageData.data[j + 2] = (data[i * 3 + 2] + 1) * 127;
    imageData.data[j + 3] = 255;
  }
  ctx.putImageData(imageData, 0, 0);
}
