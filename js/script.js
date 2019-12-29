var A = 12;
var B = 63;
var C = 89;

function countNumber(a, b, c) {
    a = A;
    b = B;

    if (a > b) {
        if (a > c) {
            console.log(a + ' > ' + b + ' и ' + c);
        } else {
            console.log(c + ' > ' + b + ' и ' + a);
        }
    } else {
        console.log(b + ' > ' + a + ' и ' + a);
    }
};
countNumber();