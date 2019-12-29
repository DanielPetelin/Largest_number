<h1>Ребята, код ниже!👨🏻‍💻</h1>
<h3>HTML</h3>

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>A, B, C</title>
</head>
<body>
    <script src="./js/script.js"></script>
</body>
</html>
```
<h3>JavaScript</h3>

```var A = 1;
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
```
<h2>Что вы можете сделать?🤷🏻‍♂️</h2>
<p>Что бы проверить, просто меняйте численное значен переменных и открывайте "консоль разработчика"(f12) на странице HTML. Так же можете сделать четыре буквы.</p>
