const clockContainer = document.querySelector(".js_clock");
const clockTitle = clockContainer.querySelector("h1");

function setTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    clockTitle.innerHTML = `${
        hour < 10 ? `0${hour}` : hour
    } <span>:</span> ${
        minute < 10 ? `0${minute}` : minute
    }`
}

function init(){
    setTime()
    setInterval(setTime,1000)
}

init();

