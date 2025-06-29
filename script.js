function appendValue(val) {
  let display = document.getElementById("display");
  if (display.value === "0") {
    display.value = val;
  } else {
    display.value += val;
  }
}

function clearDisplay() {
  document.getElementById("display").value = "0";
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Error";
  }
}
