function startCountdown() {
    let n = parseInt(document.getElementById("num").value);
    let output = document.getElementById("output");

    if (isNaN(n) || n <= 0) {
        output.innerHTML = "Please enter a positive number!";
        return;
    }

    output.innerHTML = n;

    let timer = setInterval(function () {
        n--;

        if (n > 0) {
            output.innerHTML = n;
        } else {
            output.innerHTML = "Time's Up!";
            clearInterval(timer);
        }
    }, 1000);
}