after a slice larger than 1000. tf concats the location values instead of adding them



tfjs@0.12.4:2 Uncaught Error: Error in slice4D: begin[0] + size[0] (10001) would overflow input.shape[0] (10000)
    at assert (tfjs@0.12.4:2)
    at assertParamsValid (tfjs@0.12.4:2)
    at slice_ (tfjs@0.12.4:2)
    at Object.slice (tfjs@0.12.4:2)
    at e.slice (tfjs@0.12.4:2)
    at myLoadImage (index.html:21)
    at HTMLInputElement.onclick (index.html:7)
