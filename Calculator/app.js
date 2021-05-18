value1 = ''
function getValue(value){
    document.getElementById("screen-my").innerHTML += value
    value1 = value1 + value
    
}

value2 = ''

var signf;
function getSign(sign){
    document.getElementById("screen-my").innerHTML = ""
    document.getElementById("screen-my").innerHTML = sign
    signf = sign
    document.getElementById("screen-my").innerHTML = ""
    
    function getValue(value){
        document.getElementById("screen-my").innerHTML += value
        value2 = value2 + value
    
    }
    
}





function print(){
    value1 = Number(value1)
    value2 = Number(value2)
        
    
    var res = value1 + value2
    console.log(res)
    
}