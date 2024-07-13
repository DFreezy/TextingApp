import greetingsExamples from "./greetings.js"
import apologize from "./apologies.js";

document.body.style.background = "lightpink";
let isDark = false;

const theme = document.querySelector(".theme").addEventListener('click', function(){
    if(isDark === false){
        document.body.style.background = "black";
        document.body.style.color = "white";
        isDark = true
    }else {
        document.body.style.background = "lightpink"
        document.body.style.color = "black"
        isDark = false
    }
})

const greeting = document.querySelector(".greetings").addEventListener ('click', function(){
    const greet = greetingsExamples()
    const randomizer = Math.floor(Math.random() * greet.length)
    document.querySelector(".catch").innerHTML = greet[randomizer];
    alert(greet[randomizer]);
})
   


const eraser = document.querySelector(".none").addEventListener ('click', function() {
    document.querySelector(".catch").innerHTML = ""
})

const apologies = document.querySelector(".sorry").addEventListener('click', function(){
    const apologies = apologize();
    const random = Math.floor(Math.random() * apologies.length);
    document.querySelector(".catchSorry").innerHTML = apologies[random];
    alert(apologies[random])
})

document.querySelector(".add").addEventListener('click', function() {
    const text = document.querySelector(".addSomething").value;
    const greet = greetingsExamples();
    greet.push(text);
 
    // Get the container where you want to append the new element
    const hitMe = document.querySelector(".joy");
 
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = greet[greet.length - 1]; // Use the last added greeting
 
    // Append the new paragraph to the container
    hitMe.appendChild(newParagraph);
 });


