const fibonacci = function(n) {
    let a = 1;
    let b = 1;
    let f = Number(n);
    if (f > 0){

        for (let i = 3; i <= f; i++) {
            let c = a + b;
            a = b;
            b = c;
        }
        return b;
    }else{
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
