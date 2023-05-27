function appendText(text) {
  var currentText = Calculator.expr.value;

  // Remove the initial '0' if it exists
  if (currentText === '0') {
    Calculator.expr.value = '';
  }
  Calculator.expr.value += text;
  
}

function calculate() {
  var result = eval(Calculator.expr.value);
  Calculator.expr.value = result;
}

function clearInput() {
  Calculator.expr.value = '0';
}

function deleteLastCharacter() {
  var currentText = Calculator.expr.value;
  var newText = currentText.slice(0, -1);

  // Display '0' if the input is empty after deleting the last character
  if (newText === '') {
    Calculator.expr.value = '0';
  } else {
    Calculator.expr.value = newText;
  }
}