var alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var divs = ["div_1","div_2","div_3","div_4","div_5","div_6","div_7","div_8","div_9","div_10"]
var no = 0
var score = 0

function falling_chars(){
    // Getting Random Div
    var div_random = Math.floor(Math.random() * 10)
    var selected_div = divs[div_random]
    
    var div = document.getElementById(selected_div)
    div.className += "animation"
    var random_no = Math.floor(Math.random() * 26)
    div.innerHTML = alphabets[random_no]
    div.style.top = "500px"
    div.style.backgroundColor = "green"

    getResult(random_no)
    // Deleting Element
    var index = divs.indexOf(selected_div)
    divs.splice(index,1)
    
    no++

    if(no === 10){
        clearInterval(interval)
    }
    
}

function getResult(e){
    document.addEventListener("keypress", function(event){
        console.log(event.key)
        console.log(alphabets[e])
    })
}

// function getResult(e){
//     document.addEventListener("keypress", function onPress(event) {     
//     if (event.key == alphabets[e]) {
//         score += 10 
//         console.log(score)      
//     }   
// });
// }



var interval = setInterval(falling_chars,4000)
