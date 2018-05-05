model = Sequential()

model.add(Conv2D(d, kernel_size=(5, 5), padding='valid', name='feature_extraction',
                 input_shape=(None, None, channel)))
model.add(LeakyReLU(alpha=0.1))

model.add(Conv2D(s, kernel_size=(1, 1), padding='valid', name='shrinking'))
model.add(LeakyReLU(alpha=0.1))

model.add(Conv2D(s, kernel_size=(3, 3), padding='valid', name='mapping_1'))
model.add(Conv2D(s, kernel_size=(3, 3), padding='valid', name='mapping_2'))
model.add(Conv2D(s, kernel_size=(3, 3), padding='valid', name='mapping_3'))
model.add(Conv2D(s, kernel_size=(3, 3), padding='valid', name='mapping_4'))

model.add(Conv2D(d, kernel_size=(1, 1), padding='valid', name='expanding'))
model.add(LeakyReLU(alpha=0.1))

model.add(Conv2DTranspose(
    channel, kernel_size=(9, 9), strides=(2, 2), padding='same', name='deconvolution'))
