import keras
import tensorflowjs as tfjs
tempModel = keras.applications.mobilenetv2.MobileNetV2()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
