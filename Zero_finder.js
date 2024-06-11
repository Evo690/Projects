// Basic skeleton
function rootf(a, b = 0, c = 0) {
let d = (b ** 2) - 4 * a * c;

    if (Number.isInteger(Math.sqrt(d))) {
        console.log()
        let f = (-b + Math.sqrt(d)) / 2 * a;
        let f2 = (-b - Math.sqrt(d)) / 2 * a;
        var ff = [f, f2]
    }
    else if(d<0){
        return 'Sorry can\'t do complex roots for now (i.e. discriminant<0) '
    }

    else {
        let dn = `√${d}`
        let a2 = 2*a
        let b1 = -b;
        let f = `(${b1}+${dn})/${a2}`;
        let f2 = `(${b1}-${dn})/${a2}`;
        var ff = [f, f2]
    }
    return ff
}
// after some variable name changes and adding comments for more maintablity
function rootFinder(a, b = 0, c = 0) {
    if (a === 0) {
        return 'Coefficient "a" cannot be zero for a quadratic equation.';
    }

    // Calculate the discriminant
    let discriminant = (b ** 2) - 4 * a * c;
    let sqrtDiscriminant = Math.sqrt(discriminant);

    // Check if the discriminant is a perfect square
    if (Number.isInteger(sqrtDiscriminant)) {
        // If it's a perfect square, calculate real roots
        let root1 = (-b + sqrtDiscriminant) / (2 * a);
        let root2 = (-b - sqrtDiscriminant) / (2 * a);
        return [root1, root2];
    }
    // If the discriminant is negative, roots are complex
    else if (discriminant < 0) {
        return 'Sorry, complex roots are not supported at the moment (i.e. discriminant < 0)';
    }
    // If the discriminant is not a perfect square, roots are in the form of a radical
    else {
        let denominator = 2 * a;
        let root1 = `(${-b}+√${discriminant}) / ${denominator}`;
        let root2 = `(${-b}-√${discriminant}) / ${denominator}`;
        return [root1, root2];
    }
}

console.log(rootFinder(1, -50, -1220));

