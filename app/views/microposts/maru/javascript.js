

var msg;
msg = "hello";
console.log(msg);

var x;
x = 10 * 2;
x += 5;
x %= 4;
x +=2;

console.log(x);

var s;
s="it's a pen"
console.log(s);

if (x>1) {
  console.log("xは1より大きいよ。ちなみにxは" + x + "だよ");
}
else if (x===1) {

  console.log("1だよ");
}
else {
  console.log("xは1以下だよ。ちなみにxは" + x +"だよ");
}

var y;

if (y) {
  console.log(y);
}
else {
  console.log("何もないよ");
}

var a,b,c;
a = 1;
b = 10;
c = 100;
if (x>1) {
  a = b;
  console.log(a);
}
else {
  a = c;
  console.log(a);
}
var d;
d = (x>1)? b:c;
console.log(d);

var signal = "green"
switch (signal) {
  case "red":
    console.log("stop!");
    break;
  case"green":
    console.log("go!");
    break;
  case "yellow":
    console.log("caution");
    break;
  default:
}
var k = 0;
var j = 100;
while (k<10) {
  console.log(k);
  k++;
}
do {
  console.log(j);
  j++;
} while (j<10);

for (var i = 0; i <= 10; i++) {


  if (i===5) {
    continue;
  }
  else if (i===7) {
    break;

  }
    console.log(i);
}


// var answer = confirm("プログラミングなう？");
// console.log(answer);
//
// var name = prompt("お名前は？")
// if (name==="null") {
//   console.log("名前がないよ");
// }
// else if(true){
//   console.log("あなたの名前は"+name+"ですな");
// }
function put(){
  console.log("put");
}
put();


function hello(name){
  return "hello" +  name;
}
var greet = hello("tom");
console.log(greet);


(function get(){
  console.log("GET");
})();
