Saved files to support the advanced keras tutorials


This web location is 

https://hpssjellis.github.io/beginner-tensorflowjs-examples-in-javascript/saved-models/advanced-keras-saving/



# Python

import tensorflowjs as tfjs

def train(...):
    model = keras.models.Sequential()   # for example
    ...
    model.compile(...)
    model.fit(...)
    tfjs.converters.save_keras_model(model, tfjs_target_dir)
    
    





