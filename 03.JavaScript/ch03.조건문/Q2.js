// const num = Math.ceil(Math.random() * 3000);
const year = 2020;

if (num % 400 === 0) {
    console.log(num+'년', '윤년');
} else if (num % 100 === 0) {
    console.log(num+'년', '평년');
} else if (num % 4 === 0) {
    console.log(num+'년', '윤년');
} else {
    console.log(num+'년', '평년');
}
