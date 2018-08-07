

    const vocabulary = ["machine", "learning", "is", "a", "new", "field", "in", "computer", "science"]
    const text = ["machine", "is", "a", "field", "machine", "is", "is"] 
    const parse = (t) => vocabulary.map((w, i) => t.reduce((a, b) => b === w ? ++a : a , 0))
    console.log(parse(text))



