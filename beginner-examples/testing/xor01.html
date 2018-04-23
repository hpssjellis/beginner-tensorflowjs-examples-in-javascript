var tf = require('@tensorflow/tfjs');
//var util = require('util')

async function go() {

const model = tf.sequential();
model.add(tf.layers.dense({units: 10, activation: 'sigmoid',inputShape: [2]}));
model.add(tf.layers.dense({units: 1, activation: 'sigmoid',inputShape: [10]}));

model.compile({loss: 'meanSquaredError', optimizer: 'rmsprop'});

const training_data = tf.tensor2d([[0,0],[0,1],[1,0],[1,1]]);
const target_data = tf.tensor2d([0,1,1,0]);


 var h = await model.fit(training_data, target_data, {epochs: 10000});

 //console.log(util.inspect(h, { maxArrayLength: null }));

 model.predict(training_data).print();

}

go();
