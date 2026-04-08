function checkNumber() {
  let number = document.getElementById("num").value;

  if (number > 0) {
    document.getElementById("result").innerHTML = "The number is Positive";
  } else if (number < 0) {
    document.getElementById("result").innerHTML = "The number is Negative";
  } else {
    document.getElementById("result").innerHTML = "The number is Zero";
  }
}