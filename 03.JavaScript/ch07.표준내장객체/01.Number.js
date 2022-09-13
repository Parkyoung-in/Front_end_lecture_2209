let number = 273.1;
let num = Number('273.1');
console.log(num === number);    // 두가지 방법이 동

// 기본(primitive) 자료형 - 숫자, 문자열, 부울리언

// 객체 자료형
let obj = new Number(273.1);
console.log(typeof(number), typeof(num), typeof(obj)); // number, number, object

let pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());        // 지수 형태로 표현   
console.log(pi.toFixed(2));             // 소수점 2자리까지만 표현 - 3.14
console.log(pi.toPrecision(6));         // 유효수는 6개 - 3.14159

console.log(Number.MAX_VALUE, Number.MIN_VALUE); // 1.7977e+308, // 5e-324
console.log(Number.NEGATIVE_INFINITY);  // 음의 무한대
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER) // 2의 53승 -1 // -2의 53승 +1
console.log(Math.pow(2,53) -1); // 2의 53승 -1 // 9007199254740991

