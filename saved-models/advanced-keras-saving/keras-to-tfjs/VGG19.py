import keras
import tensorflowjs as tfjs
tempModel = keras.applications.vgg19.VGG19()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
