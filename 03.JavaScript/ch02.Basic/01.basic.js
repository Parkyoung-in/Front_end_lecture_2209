// 웬만하면 const로 변수를 선언할 것
// 값이 변하는 변수만 var로 선언할 것(2015년 이전)
// let을 사용할 것(2015년 이후)
const a = 10;
let b = 20;
b += a;
console.log(a, b);

/* var c = 10;
var c = 20; //error가 뜨진 않지만 다른 언어에서는 error가 뜨니깐 사용하지 말자
let d = 10;
// let d = 20; //let은 한번만 선언 할 수 있다. //주석 지워보면 빨간줄 생김
d = 20; */

//console.log(Math.PI, Math.sqrt(d)); //sqrt : 루트  // Math 특별 케이스로 static Method 이다.

// 기본 자료형
// 1. Number
console.log(typeof(3.1), typeof(2));

// 2. String
console.log(typeof('abc'), typeof("안녕"));

let tl = `a=${a}, b=${b}`  // ` : back quote, 물결표 자판  // 파이썬의 f스트링과 같은 역할
tl = tl + '문자열 결합';
console.log(tl);
let st = '문자열과 숫자의 결합' + 123;
console.log(st);
console.log(st, st[0], st[10], st[st.length-1]) //st[st.length-1] 마지막 글자  // 파이썬의 st[-1]과 같다

const today = new Date();
console.log(today, today.getFullYear(), today.getMonth()+1); // Month는 -1 되서 나오므로 반드시 +1 해줘야 한다.
console.log(typeof today);   // object

// 3. bool
console.log(4 > 3, 4 < 3);  // true, false
console.log(4 > 3 && 10 > 8, '가방' < '나무' || false);  // true, true
console.log(today.getHours() >= 9 && today.getHours() < 18);

// 4. undefined
let pi;
console.log(typeof pi);
pi = Math.PI;
console.log(typeof pi); // 변수에 값을 설정하면 number로 type이 바뀐다
