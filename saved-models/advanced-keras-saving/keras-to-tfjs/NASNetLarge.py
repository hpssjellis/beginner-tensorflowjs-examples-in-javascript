import keras
import tensorflowjs as tfjs
tempModel = keras.applications.nasnet.NASNetLarge()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
