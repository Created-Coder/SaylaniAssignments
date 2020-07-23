// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// var ans = 1;
// function power(a,b) {
//     for(var x = 1; x <= b; x++) {
//         ans = ans * a;
//     }
//     document.write(a + "<sup>" + b + "</sup>" + " is " + ans + "<br>" + "<br>" + "<hr>" );
// }
// power(2,5);



// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

// function leapChecker(){
//     var year = document.getElementById("year")
//     year = year.value
//     if(year%4===0){
//         document.write("<strong>The Year you entered is leap year</strong>")
//     }

//     else{
//         document.write("<strong>The Year you entered is not a leap year</strong>")

//     }
// }

// leapChecker()

// If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

// function areaOfTriangle(a,b,c) {
//     var s = calculateSide();
//     var area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     area = area.toFixed(4);
//     document.write("Area of triangle is: " + area + "<br>" + "<br>" + "<hr>" );

//     function calculateSide() {
//         var sides = (a + b + c) / 2;
//         return sides;
//     }
// }
// areaOfTriangle(5,10,13);

// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

// function main(){
//     total = 300
//     var sub1 = +prompt("Enter Subject 1 Marks")
//     var sub2 = +prompt("Enter Subject 2 Marks")
//     var sub3 = +prompt("Enter Subject 3 Marks")

//     function avg(){
//         var avg = sub1 + sub2 + sub3 / 3
//         avg = avg.slice(0,2)
//         document.write("Average Marks :" + avg +"<br>")
//     }

//     function percentage(){
//         var percent = sub1 + sub2 + sub3 / 300
//         percent = percent.slice(0,2)
//         document.write("percentage :" + percent + "%")
//     }

//     avg()
//     percentage()

// }

// main()

// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function indexOf(words,index){
//     for(var x = 0; x <= words.length; x++){
//         if(words[x]== index){
//             document.write("Index of " + index + " " + "is :" + x + "<br>")
//             break
            
//         }
//     }
// }

// indexOf(prompt("Enter any string"), prompt("Enter word to find index"))

// Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// function vowelRemover(sentence){
//     for(var x = 0 ; x <= sentence.length ; x++){
//         if(sentence[x] == "a"  || sentence[x] == "e" || sentence[x] == "i" ||  sentence[x] == "o" || sentence[x] == "u"){
//             sentence = sentence.replace(sentence[x],"")
//         }
        
//     } 
//     document.write(sentence)   
// }

// vowelRemover(prompt("Input Characters"))

deleteVowels("the crazy brown fox jumps over the lazy dog")

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function findOccurrences() {
    var text = "Pleases read this application and give me gratuity";
    var chars = text.toLowerCase().split("");
    var count = 0;
    
for(var x = 0; x < chars.length - 1; x++) {
    var char1 = chars[x];
    var char2 = chars[x + 1];

    if(isVowelCharacter(char1) && isVowelCharacter(char2)) {
        count++
    }
}
    return count;
}

function isVowelCharacter(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
            default:
                return false;
    }
}
var occurs = findOccurrences();
document.write("Occurrences of any two successive vowels are: " + occurs + "<br>" + "<br>" + "<hr>" );

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function converter() {
    var distance = +prompt("Enter distance between two cities in kilometers:");
    var result1 = meterConversion(distance);
    var result2 = feetConversion(distance);
    var result3 = inchesConversion(distance);
    var result4 = centimeterConversion(distance);
    document.write("The distance in meters is: " + result1);
    document.write("<br>" + "The distance in feets is: " + result2);
    document.write("<br>" + "The distance in inches is: " + result3);
    document.write("<br>" + "The distance in centimeters is: " + result4 + "<br>" + "<br>" + "<hr>" );
    
    function meterConversion(km) {
        var meter = km * 1000;
        return meter;
    }
    function feetConversion(km) {
        var feet = km * 3281;
        return feet;
    }
    function inchesConversion(km) {
        var inch = km * 39370;
        return inch;
    }
    function centimeterConversion(km) {
        var cm = km * 100000;
        return cm;
    }
}
converter();

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

var overTime = +prompt("Enter the overtime you have worked in hours:");
var payment = overTime * 12;
document.write("Your overtime payment is: " + payment + "<br>" + "<br>" + "<hr>" );

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

var withdraw = +prompt("Enter amount to withdraw");
var hundredNotes = Math.floor((withdraw / 100));
var fiftyNotes = Math.floor(((withdraw % 100) / 50));
var tenNotes = Math.floor((((withdraw % 100) % 50) / 10));
var remain = Math.floor((((withdraw % 100) % 50) % 10));
document.write("Amount to withdraw: " + withdraw + "<br>");
document.write("You will have " + hundredNotes + " hundred notes " + fiftyNotes + " fifty notes " + tenNotes + " ten notes.");
document.write("<br>" + "Remaining amount will be: " + remain + "<br>" + "<br>" + "<hr>" );


//						Chapter 43 to 48


// 1. Show an alert box on click on a link.

// 				This task is done using html.

// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

function message() {
    alert("Thanks for purchasing a phone from us.")
}

// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

function deleteRow(id) {
    var table = document.getElementById("table");
    var rowNo = document.getElementById(id);
    table.deleteRow(rowNo.rowIndex);
}  

// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.

function changeImage(id,source) {
    var change = document.getElementById(id);
    change.src = source;
}

// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.

function increment() {
    var counter = document.getElementById("counter");
    counter.value++;
}
function decrement() {
    var counter = document.getElementById("counter");
    counter.value--;
}


//						Chapter 48 to 52


// 1. Create a signup form and display form data in your web
// page on submission.

function SignUp() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var pass = document.getElementById("pswd");
    document.write("First Name: " + fname.value + "<br>");
    document.write("Last Name: " + lname.value + "<br>");
    document.write("Email - Id: " + email.value + "<br>");
    document.write("Password: " + pass.value);
    fname.value = "";
    lname.value = "";
    email.value = "";
    pass.value = "";
}

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function readMore() {
    var text = document.getElementById("text");
    var moreText = document.getElementById("moreText");
    text.innerHTML  = moreText.innerHTML;
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.

function deleteRow(id) {
    var table = document.getElementById("stdTable");
    var rowNo = document.getElementById(id);
    table.deleteRow(rowNo.rowIndex);
}

function editRow(name,fname,rollNum) {
    var name = document.getElementById(name);
    var fname = document.getElementById(fname);
    var rollNum = document.getElementById(rollNum);
    var edit = document.getElementById("fields");
    var input1 = document.getElementById("inp1");
    var input2 = document.getElementById("inp2");
    var input3 = document.getElementById("inp3");
    edit.hidden = false;
    input1.value = name.innerHTML;
    input2.value = fname.innerHTML;
    input3.value = rollNum.innerHTML;
    name = input1.value;
    fname = input2.value;
    rollNum = input3.value;     
}

function editDetails() {
    var edit = document.getElementById("fields");
    edit.hidden = true;
}


//						Chapter 53 to 58


// 1.Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.

function clickImg(myImg,modal,modalImg,caption) {
    var myImg = document.getElementById(myImg);
    var modal = document.getElementById(modal);
    var modalImg = document.getElementById(modalImg);
    var caption = document.getElementById(caption);
    modal.style.display = "block";
    modalImg.src = myImg.src;
    caption.innerHTML = myImg.alt;
}

function closeModal(value) {
    var close = document.getElementById(value);
    close.style.display = "none"
}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.

var fontSize = 1;
function zoomIn() {
    fontSize += 0.1;
    var text = document.getElementById("text");
    text.style.fontSize = fontSize + "em";
}

function zoomOut() {
    fontSize -= 0.1;
    var text = document.getElementById("text");
	text.style.fontSize = fontSize + "em";
}


//						Chapter 58 to 67


// 1.Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i.Get element of id “main-content” and assign them in a variable.
// ii.Display all child elements of “main-content” element.
// iii.Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

// 		Task1 (i)
var main = document.getElementById("main-content");

// 		Task1 (ii)
console.log(main.children);

// 		Task1 (iii)
var render0 = document.getElementsByClassName("render")[0];
var render1 = document.getElementsByClassName("render")[1];
var render2 = document.getElementsByClassName("render")[2];
var render3 = document.getElementsByClassName("render")[3];
var render4 = document.getElementsByClassName("render")[4];
document.write(render0.innerHTML + "<br>");
document.write(render1.innerHTML + "<br>");
document.write(render2.innerHTML + "<br>");
document.write(render3.innerHTML + "<br>");
document.write(render4.innerHTML);

// 		Task1 (iv)
var input1 = document.getElementById("first-name");
input1.value = "Alex";

// 		Task1 (v)
var input2 = document.getElementById("last-name");
var input3 = document.getElementById("email");
input2.value = "Bank";
input3.value = "alexbank@gmail.com";

// 2. use HTML code of question 1 and show the result on browser.
// i.What is node type of element having id “form-content”.
// ii.Show node type of element having id “lastName” and its child node.
// iii.Update child node of element having id “lastName”.
// iv.Get First and last child of id “main-content”.
// v.Get next and previous siblings of id “lastName”. 
// vi.Get parent node and node type of element having id “email”

// 		Task2 (i)
var form = document.getElementById("form-content");
document.write(form.nodeType);

// 		Task2 (ii)
var lname = document.getElementById("lastName");
console.log(lname.nodeType);
console.log(lname.childNodes);

// 		Task2 (iii)
var textnode = document.createElement("h1");
var lname = document.getElementById("lastName");
lname.replaceChild(textnode, lname.childNodes[0]);
console.log(lname.childNodes);

// 		Task2 (iv)
var main = document.getElementById("main-content");
console.log(main.firstChild);
console.log(main.lastChild);

// 		Task2 (v)
var element = document.getElementById("lastName");
console.log(element.previousSibling);
console.log(element.nextSibling);

// 		Task2 (vi)
var email = document.getElementById("email");
console.log(email.parentNode);
console.log(email.nodeType);
