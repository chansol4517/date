console.log("test");

/*
new Date() : 시간관련 인스턴스 객체를 생성해주는 생성자
시간 관련 인스턴스 객체 : 다양한 시간관련 메서드들 호출 가능
*/

const month = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const days = ["SUN", "MON", "TUE", "WEN", "THUR", "FRI", "SAT"];

const now = new Date();

console.log(now);

//연도 출력
console.log(now.getFullYear());

//월 출력(순서값 반환)
console.log(month[now.getMonth()]);

//일
console.log(now.getDate());

//요일(순서값 반환)
console.log(days[now.getDay()]);

//시간
console.log(days[now.getHours]);

//분
console.log(now.getMinutes());

//초
console.log(now.getSeconds());

//우리나라 시간대를 전세계 표준시로 변환해서 반환
// const gmtNow = now.toGMTString();

//반환값은 똑같지만 구조만 바뀜
const gmtNow = now.toUTCString();

console.log(gmtNow);
