let clock = document.querySelector("#hour")
let date = document.querySelector("#date")

date.innerHTML = new Date(new Date()).toLocaleDateString("fr-FR", { weekday: 'long' }) + " " + new Date().getDate() + " " + new Date(new Date()).toLocaleDateString("fr-FR", { month: 'long' }) + " " + new Date().getFullYear()
setInterval(() => {
    clock.innerHTML = ((new Date().getHours() < 10) ? "0" + new Date().getHours().toString() : new Date().getHours()) + "<span class='blink'>:</span>" + ((new Date().getMinutes() < 10) ? "0" + new Date().getMinutes().toString() : new Date().getMinutes())
}, 1000);
