function submitted(e){
    e.preventDefault();

    let name = document.forms["id"]["name"].value
    sessionStorage.setItem("name",name)
}
function startCountdown(seconds) {
    let countdown = seconds;

    function updateCountdown() {
        document.getElementById("countdown").innerText = countdown;
        countdown--;

        if (countdown >= 0) {
            setTimeout(updateCountdown, 1000); 
        } else {
            document.getElementById("countdown").innerText = "Time's up!";
        }
    }

    updateCountdown();
}


startCountdown(60);