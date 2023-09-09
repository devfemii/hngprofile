document.addEventListener("DOMContentLoaded", pageLoad());

function pageLoad(){
    setDate();
    setInterval(setUTC, 1000);
}

function setDate(){
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const weekDay = weekDays[today.getUTCDay()];
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = weekDay;
}

function setUTC(){
    const utcTimestamp = new Date().getTime();
    document.querySelector("[data-testid='currentUTCTime']").textContent = utcTimestamp;
}