let myArray = []; //storing items
let inputEl = document.getElementById("input-el"); //taking input

let btnEl = document.getElementById("input-btn");  //taking button
let ulEl = document.getElementById("ul-el");    // taking ul
 

btnEl.addEventListener("click",function()     //add event listener for adding item in myary
{
        myArray.push('https://'+ inputEl.value);
        inputEl.value = "";
        rendor();
});

function rendor() {
     
     ulEl.innerHTML += 
     `<li> <a target='_blank' href = '${myArray[0]}'>${myArray[0]} </a></li>
     `
     myArray.pop();
    
}
