import keras
import tensorflowjs as tfjs
tempModel = keras.applications.mobilenet.MobileNet()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
