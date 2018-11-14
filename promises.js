const promise = new Promise(function(resolveParam, rejectParam) {
    resolveParam(1)
    //rejectParam(new Error('error!'))
})

promise.then((v) => {
    console.log(v) // 1
    return v
}).then((value) => {
    console.log(value) // 2
    return value
}).catch((err) => {
    console.log(err.message)
});




var wait1000 = (boo = true) => new Promise((resolve, reject) => {
    if(boo){
        resolve()
        //setTimeout(resolve, 0)
    }else
    {
        return reject();
    }
    
})

