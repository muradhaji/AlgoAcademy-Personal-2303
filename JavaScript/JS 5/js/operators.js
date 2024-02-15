// let x = 4;
// let y = -7;

// let x1 = x;
// let x2 = -x;
// let x3 = +x;

// let y1 = y;
// let y2 = -y;
// let y3 = +y;

// let str1 = "57";
// let str2 = "-9";

// let z1 = -str1;
// let z2 = +str1;
// let z3 = -str2;
// let z4 = +str2;

// let c1 = x + y;
// let c2 = x - y;

// Operand: values, variables, function values
// Operator: +, *, /, - etc.

// Unary operator & Binary operator

// console.log("My " + "name");
// console.log("My age " + 29);

// console.log(2 + 2 + "1");
// console.log("1" + 2 + 2);

// let a, b, c;
// a = b = c = 2 + 2;

// let x = 5;
// x = x + 2;
// x = x * 2;

// let x = 5;
// x += 2;
// x *= 2;

// let x = 8;

// let y = 3 + x-- - ++x;

// x++;
// x++;
// x--;
// x++;

// console.log(x = x + 1); // 6
// console.log(x = x + 1); // 7
// console.log(x = x - 1); // 6
// console.log(x = x + 1); // 7

// console.log(x++); // 5
// console.log(x++); // 6
// console.log(x--); // 7
// console.log(x++); // 6

// console.log(++x); // 6
// console.log(++x); // 7
// console.log(--x); // 6
// console.log(++x); // 7

// Prefix increment ++x
// Postfix increment x++
// Prefix decrement --x
// Postfix decrement x--

// console.log(x);

// console.log("" == false);
// console.log("" != false);

// console.log("" === false);
// console.log("" !== false);

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

let ax = Number(prompt("A(x):"));
let ay = Number(prompt("A(y):"));
let bx = Number(prompt("B(x):"));
let by = Number(prompt("B(y):"));

let x = bx - ax;
let y = by - ay;
let s = x * y;

if(s < 0) {
	s *= -1;
};

alert(`Area: ${s}`);