var value = 23618,
    sum = value.toString().split('').map(Number).reduce(function (a, b) {
            return a + b;
        }, 0);

console.log("2+3+6+1+8:",sum);