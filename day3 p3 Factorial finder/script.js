function factorial(a) {
    let arr = []
    for (let i = 1; i < a+1; i++) {
        arr.push(i)
        
    }
    // console.log(arr);
    let f = arr.reduce((a,b)=>{
    return a*b
    })
    return f
}
console.log(factorial(6))
alert("Open console and use factorial(number) function")