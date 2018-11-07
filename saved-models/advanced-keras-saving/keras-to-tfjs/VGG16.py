import keras
import tensorflowjs as tfjs
tempModel = keras.applications.vgg16.VGG16()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
