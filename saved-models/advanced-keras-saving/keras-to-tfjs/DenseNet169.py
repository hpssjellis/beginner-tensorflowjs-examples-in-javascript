import keras
import tensorflowjs as tfjs
tempModel = keras.applications.densenet.DenseNet169()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
