// console.log(2);
// for (let i = 0; i < 10**3; i++) {
//     console.log(i);
// }
// function sum(a,b=0) {
//     return a+b;


// }
// c = sum(3,6)

function calc(a, b) {
    const n = Math.floor((Math.random() * 100));
    let g = a - b;
    let g2 = a + b;
    let g3 = a / b;
    let g4 = a * b;
    let g5 = a ** b;
    if (n <= 10) {
        console.log(a + '+' + b + '=' + g);
        console.log(a + 'x' + b + '=' + g2);
        console.log(a + '/' + b + '=' + g5);
        console.log(a + '-' + b + '=' + g3);
    }
    else {
        console.log(a + '+' + b + '=' + g2);
        console.log(a + 'x' + b + '=' + g4);
        console.log(a + '/' + b + '=' + g3);
        console.log(a + '-' + b + '=' + g);
    }

}
calc(2, 5)