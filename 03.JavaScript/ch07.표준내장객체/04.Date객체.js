let today = new Date();
console.log(today.toDateString());  // 날짜, 요일
console.log(today.toLocaleString()); // Timezone 반영한 현재 시간

// 22-09-14 09:16:45
function myLocalTimeFormat(date) {
    //let year = date.getFullYear() % 100           // 2022 -> 22
    let year = String(date.getFullYear()).substring(2); // 2022 -> 22
    //let result = `${year<10?'0'+year:String(year)}`;
    let month = String(date.getMonth()+1);          // 9월 -> 09
    month = month.length == 1 ? '0'+month : month; //스트링으로 바꿔서 한자리면 0을 붙이고 아니면 그냥 출력
    let day = `${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`;
    let hour = `${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}`;
    let minute = `${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()}`;
    let sec = `${date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds()}`;
    return `${year}-${month}-${day} ${hour}:${minute}:${sec}`;
}
console.log(myLocalTimeFormat(today));

// Unix time
const unixDate = new Date(1.6632e12);         // 1663200000000 -> 22-09-25
console.log(unixDate.toLocaleString());

// 문자열로 생성
const strDate = new Date('2022-09-14 09:50');
console.log(myLocalTimeFormat(strDate));

// 시간 요소로 생성
const elementDate = new Date(2022, 9-1, 14, 9, 50);     // 월은 1을 빼주어야 함
console.log(myLocalTimeFormat(elementDate));

// 시간 더하고 빼기
today.setDate(today.getDate() + 100);
console.log(myLocalTimeFormat(today));

// 시간 간격
const examDay = new Date('2022-11-17');
today = new Date('2022-09-14');
const diff = examDay.getTime() - today.getTime(); // 수능일과 오늘 사이의 밀리초
const dDay = diff / (24*60*60*1000); //24시간 * 60분 * 60초 * 1000밀리세컨드
console.log(`오늘은 수능 D-${dDay} 입니다.`);