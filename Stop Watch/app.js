var msec = 0
var sec = 0
var min = 0
var intervel
var getMin = document.getElementById("min")
var getSec = document.getElementById("sec")
var getMsec = document.getElementById("msec")


function timer(){
    msec++
    getMsec.innerHTML = msec
    if(msec>100){
        sec++
        getSec.innerHTML = sec
        msec = 0
    
        if(sec >= 60){
        min++
        getMin.innerHTML = min
        sec = 0
        }
    }

}

function start(){  
    intervel = setInterval(timer,10)
    var start = document.getElementById("start")
    var pause = document.getElementById("pause")
    var reset = document.getElementById("reset")
    start.disabled = true
    pause.disabled = false
    start.style.backgroundColor = "#1a9088"
    start.style.color = "white"
    pause.style.backgroundColor = "white"
    pause.style.color = "#1a9088"
    reset.style.backgroundColor = "white"
    reset.style.color = "#1a9088"
}

function pause(){
    clearInterval(intervel)
    var pause = document.getElementById("pause")
    var start = document.getElementById("start")
    var reset = document.getElementById("reset")
    pause.disabled = true
    start.disabled = false
    pause.style.backgroundColor = "#1a9088"
    pause.style.color = "white"
    start.style.backgroundColor = "white"
    start.style.color = "#1a9088"
    reset.style.backgroundColor = "white"
    reset.style.color = "#1a9088"
    

}

function reset(){
    msec = 0
    sec = 0
    min = 0
    getMin.innerHTML = min
    getMsec.innerHTML = msec
    getSec.innerHTML = sec
    clearInterval(intervel)
    var start = document.getElementById("start")
    var reset = document.getElementById("reset")
    var pause = document.getElementById("pause")
    start.disabled = false
    reset.style.backgroundColor = "#1a9088"
    reset.style.color = "white"
    start.style.backgroundColor = "white"
    start.style.color = "#1a9088" 
    pause.style.backgroundColor = "white"
    pause.style.color = "#1a9088"
    


}
