import keras
import tensorflowjs as tfjs
tempModel = keras.applications.nasnet.NASNetMobile()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
