let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

let endDate = new Date('Jan 1,2024 00:00:00');
let endTime = endDate.getTime();

let addZeros = (num) =>(num < 10 ? `0${num}`: num);

function countdown(){
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    

    if(endTime < todayTime){
        clearInterval();
        document.querySelector(".countdown"
        ).innerHTML = `<h1>Countdown Has Expired</h1>`
    }
    else{
        let daysLeft = Math.floor(remainingTime/(24*60*60*1000));
        let hrsLeft = Math.floor((remainingTime/(60*60*1000))%24);
        let minsLeft = Math.floor((remainingTime/(60*1000))%60);
        let secsLeft = Math.floor((remainingTime/1000)%60);

        dayBox.textContent = addZeros(daysLeft);
        hrBox.textContent = addZeros(hrsLeft);
        minBox.textContent = addZeros(minsLeft);
        secBox.textContent = addZeros(secsLeft);
    }
}
let i = setInterval(countdown,1000);
countdown();