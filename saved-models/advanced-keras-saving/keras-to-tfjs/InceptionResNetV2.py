import keras
import tensorflowjs as tfjs
tempModel = keras.applications.inception_resnet_v2.InceptionResNetV2()
tfjs.converters.save_keras_model(tempModel,'tfjs-model')
