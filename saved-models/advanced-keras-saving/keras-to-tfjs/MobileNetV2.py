import keras
import tensorflowjs as tfjs
tempModel = keras.applications.mobilenet_v2.MobileNetV2()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
