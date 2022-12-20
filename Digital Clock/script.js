// alert('Hello')
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("Seconds");
const ampmEl = document.getElementById("ampm");

function updateclock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h>12){
        h = h-12;
        ampm = "PM";
    }

    if(h<9){
        h = "0" + h;
    }

    if(m<9){
        m = "0" + m;
    }

    if(s<9){
        s = "0" + s;
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() =>{
        updateclock();
    },1000)
}

updateclock();