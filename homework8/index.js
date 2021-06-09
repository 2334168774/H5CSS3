var playorsuspend=document.getElementById("playorsuspend");
var myMusic=document.getElementById("myMusic");
var time=document.getElementById("time");
var roundImage=document.getElementById("roundImage");
var statusCode=1;
var yellowBar=document.getElementById("yellowBar");
var mute=document.getElementById("mute");
var btm1 = document.getElementById("btm1");
var btm2 = document.getElementById("btm2");
var btm3 = document.getElementById("btm3");
var btm4 = document.getElementById("btm4");
var btm5 = document.getElementById("btm5");
var btm6 = document.getElementById("btm6");
var input1 = document.getElementById("input1");
var submit = document.getElementById("submit");

function progerssLong(){
    var currentLong;
    var per;
    setInterval(function(){
        per=myMusic.currentTime/myMusic.duration;
        currentLong=per*250;
        yellowBar.style.width=currentLong+12+"px";
    },500);
}
progerssLong();
seeTime(time,myMusic);

function whichIcon(){
    if(statusCode%2!=0){
       playorsuspend.style.backgroundPosition="-105px 0px";
       statusCode++;
       myMusic.pause();
       roundImage.className="roundImage";
    }
    else{
       playorsuspend.style.backgroundPosition="-200px -48px";
       statusCode++;
       myMusic.play();
       roundImage.className="roundImage1";
    }
}
function seeTime(time,myMusic){
    setInterval(function(){
        if(myMusic.currentTime<10){
            time.innerHTML="00:0"+parseInt(myMusic.currentTime);
        }
        else if(myMusic.currentTime<60){
            time.innerHTML="00:"+parseInt(myMusic.currentTime);
        }
        else if(myMusic.currentTime < 600){
            var minite = parseInt(myMusic.currentTime / 60);
            var second = parseInt(myMusic.currentTime % 60);
            if(second < 10){
                time.innerHTML = "0" + minite + ":" + "0" + second;
            }
            else{
                time.innerHTML = "0" + minite + ":" + second;
            }
        }
        else{
            var minite = parseInt(myMusic.currentTime / 60);
            var second = parseInt(myMusic.currentTime % 60);
            if(second < 10){
                time.innerHTML = minite + ":" + "0" + second;
            }else{
                time.innerHTML = minite + ":" + second;
            }
        }
    },1000);
}
mute.onclick=function(){
    if(myMusic.muted==true){
        myMusic.muted=false;
    }
    else{
        myMusic.muted=true;
    }
}
playorsuspend.onclick=function(){
    whichIcon();
}

function changeStatus(obj) {
    btm1.className = "bButton2";
    btm2.className = "bButton2";
    btm3.className = "bButton2";
    btm4.className = "bButton2";
    btm5.className = "bButton2";
    btm6.className = "bButton2";
    obj.className = "bButton1";
}

function saveStorage(id) {
    var data = document.getElementById(id).value;
    var time = new Date().getTime();
    localStorage.setItem(time, data);
    loadStorage('p1');
}

function loadStorage(id){
    var result = `<div>`;
    for (let i = 0; i < localStorage.length; i++) {
        if(i<5){
            var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var date = new Date();
        date.setTime(key); 

        result += `<div> 
                <p >
                    ${value}
                </p>
                <p>
                    ${moment(date).format('YYYY-MM-DD HH:mm:ss')}
                </p>
            </div>`
    }else{
        break;
    }
    result += `<div>`
    var target = document.getElementById(id);
    target.innerHTML = result;
        }
}
