let second = 0;
let minute = 0;
let hour = 0;
let d = new Date();

let secondHand = document.getElementById("second-hand");
let minuteHand = document.getElementById("minute-hand");
let hourHand = document.getElementById("hour-hand");

setInterval(
    function(){
        d =new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minute/12);

        secondHand.style.transform = "rotate(" + second +"deg )";
        minuteHand.style.transform = "rotate(" + minute + "deg)";
        hourHand.style.transform = "rotate(" + hour +"deg)";
    },1000
)