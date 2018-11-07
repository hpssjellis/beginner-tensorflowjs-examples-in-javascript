import keras
import tensorflowjs as tfjs
tempModel = keras.applications.xception.Xception()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
