// 10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력하세요
const array=[];
let num = 12;
for (let i=1; i<=num; i++) {
    if (num % i ==0) {
        array.push(i)
    }
}
console.log(array);

// let input = 12;
// let divisors = []; // divisor : 약수
// for (let i=1; i<=input; i++) {
//     if (input % i == 0)
//         divisors.push(i);
// }
// console.log(divisors);