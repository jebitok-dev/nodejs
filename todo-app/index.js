function simpleFunction(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 4 === 0 && i % 5 === 0) {
            console.log('foobar')
        } else if (i % 4 === 0) {
            console.log('foo')
        } else if (i % 5 === 0) {
            console.log('bar')
        } else {
            console.log(i)
        }
    }
}

simpleFunction(100);