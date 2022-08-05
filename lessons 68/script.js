let now = new Date();
// alert( now );
console.log(now.getFullYear());
console.log(now.getDay());

// если вы в часовом поясе UTC-1, то выводится 60
// если вы в часовом поясе UTC+3, выводится -180
console.log(now.getTimezoneOffset());

console.log(now.setFullYear(2001,7,10));