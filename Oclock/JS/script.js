setInterval(function(){
    let time = new Date();
    let timeHour = time.getHours();
    let timeMinutes = time.getMinutes();
    let timeSeconds = time.getSeconds();
    if(timeSeconds < 10){
        timeSeconds = "0" + timeSeconds;
    }
    if(timeMinutes < 10){
        timeMinutes = "0" + timeMinutes;
    }
    if(timeHour < 10){
        timeHour = "0" + timeHour;
    }
    let fullTime = timeHour + " : " + timeMinutes + " : " + timeSeconds;
    document.getElementById("timer").innerHTML = fullTime;

    timeHour *= 30;
    timeMinutes *= 6;
    timeSeconds *= 6;

    document.getElementsByClassName("hours")[0].style.transform = `rotate(${timeHour}deg)`
    document.getElementsByClassName("minuts")[0].style.transform = `rotate(${timeMinutes}deg)`
    document.getElementsByClassName("seconds")[0].style.transform = `rotate(${timeSeconds}deg)`
}, 1000)