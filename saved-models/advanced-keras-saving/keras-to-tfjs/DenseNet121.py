import keras
import tensorflowjs as tfjs
vgg16 = keras.applications.densenet.DenseNet121()
tfjs.converters.save_keras_model(vgg16,'vgg16-tfjs')
