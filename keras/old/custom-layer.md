For more info see  

https://medium.com/@alyafey22/sentiment-classification-from-keras-to-the-browser-7eda0d87cdc6


https://github.com/zaidalyafeai/Browser-Sentiment-Classification




Here is the relevant code

```

export interface UpSampling2DLayerConfig extends LayerConfig {
  size?: [number, number];
  dataFormat?: DataFormat;
}

export class UpSampling2D extends Layer
{
    private size : [number , number];

    constructor(config?: UpSampling2DLayerConfig) {
        super(config);
        this.size = [config.size[0] ,config.size[1]]
        this.inputSpec = [new InputSpec({ndim: 4})];
    }


    computeOutputShape(inputShape: Shape|Shape[]): Shape|Shape[] {
        inputShape = generic_utils.getExactlyOneShape(inputShape);
        
        height = self.size[0] * inputShape[2];
        width =  self.size[1] * inputShape[3];


        return [inputShape[0],inputShape[1],width,height]
    }


    call(inputs: Tensor|Tensor[], kwargs: any): Tensor|Tensor[] {
        
        return null //this needs to return the reshaped version 
    }


    def get_config(self):
        config = {'size': self.size,
                  'data_format': self.data_format}
        base_config = super(UpSampling2D, self).get_config()
        return dict(list(base_config.items()) + list(config.items()))


      getConfig(): ConfigDict {
        const config: ConfigDict = {
            size: this.size,
            dataFormat: this.dataFormat,
    };
        const baseConfig = super.getConfig();
        Object.assign(config, baseConfig);
        return config;
  }
}

ClassNameMap.register('UpSampling2D', UpSampling2D);


```
