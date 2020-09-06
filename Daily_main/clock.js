const clockContainer = document.querySelector(".js_clock");
const clockTitle = clockContainer.querySelector("h1");
const workTimeLine = document.querySelector(".timeline_ing")

function setTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    clockTitle.innerHTML = `${
        hour < 10 ? `0${hour}` : hour
    }<span>:</span>${
        minute < 10 ? `0${minute}` : minute
    }`

    const workEndTime = 18;
    const workStartTime = 9;

    ingWidth = (hour - workStartTime) / (workEndTime - workStartTime) * 100
    workTimeLine.style.width = ingWidth + "%";
}

function working(a,b,c){
}

function init(){
    setTime()
    setInterval(setTime,1000000)
}

init();

