import keras
import tensorflowjs as tfjs
tempModel = keras.applications.inception_v3.InceptionV3()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
