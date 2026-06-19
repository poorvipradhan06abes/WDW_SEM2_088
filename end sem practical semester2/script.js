let timer;

function startCountdown() {
    let n = parseInt(document.getElementById("num").value);
    let output = document.getElementById("output");

    if (isNaN(n) || n <= 0) {
        output.innerHTML = "Please enter a positive number!";
        return;
    }

    // Stop any existing timer
    clearInterval(timer);

    output.innerHTML = n;

    timer = setInterval(() => {
        n--;

        if (n > 0) {
            output.innerHTML = n;
        } else {
            output.innerHTML = "Time's Up!";
            clearInterval(timer);
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(timer); // Stop the countdown
    timer = null;
    
    document.getElementById("num").value = "";
    document.getElementById("output").innerHTML = "";
}