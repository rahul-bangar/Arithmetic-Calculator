function calc1() {
  document.Calculator.expr.value += "1";
}

function calc2() {
  document.Calculator.expr.value += "2";
}

function calc3() {
  document.Calculator.expr.value += "3";
}

function calc4() {
  document.Calculator.expr.value += "4";
}

function calc5() {
  document.Calculator.expr.value += "5";
}

function calc6() {
  document.Calculator.expr.value += "6";
}

function calc7() {
  document.Calculator.expr.value += "7";
}

function calc8() {
  document.Calculator.expr.value += "8";
}

function calc9() {
  document.Calculator.expr.value += "9";
}

function calc0() {
  document.Calculator.expr.value += "0";
}

function calc10() {
  document.Calculator.expr.value += "+";
}

function calc11() {
  document.Calculator.expr.value += "-";
}

function calc12() {
  document.Calculator.expr.value += "*";
}

function calc13() {
  document.Calculator.expr.value += "/";
}

function calc14() {
  document.Calculator.expr.value += ".";
}
function calc15() {
  document.Calculator.expr.value += "%";
}

function Calc() {
  document.Calculator.expr.value = eval(document.Calculator.expr.value);
}

setInterval(() => {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
