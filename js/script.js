var A = 1;
var B = 5;
var C = 10;

function countNumber(a, b, c) {
    a = A;
    b = B;
    c = C;

    if (a > b) {
        if (a > c) {
            console.log(a + ' > ' + b + ' и ' + c);
        } else {
            console.log(c + ' > ' + b + ' и ' + a);
        }
    } else if (b > c) {
        console.log(b + ' > ' + c + ' и ' + a);
    } else {
        console.log(c + ' > ' + b + ' и ' + a);
    }
};
countNumber();