//All the DOM Declarations 
const button = document.querySelector('#firstButton')
const faveButton = document.querySelector('#faveButton')
const h1 = document.querySelector('#MEN')
const faveText =document.querySelector('#faveForm')


//For the Vanilla HW/Bonus
const changeHeader = function() {
   
    h1.textContent='It\'s raining Chris!'
}

button.addEventListener('click', changeHeader)

//For the Super Mega BC

faveButton.addEventListener('click',Faveomatic)
function Faveomatic() {
    var x = document.getElementById("faveForm");
    var faveOutput = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        faveOutput += x.elements[i].value;
    }
    h1.textContent=faveOutput
}

//For the Hyper Fighting

faveText.addEventListener('keypress', 
function(event){
    event.preventDefault();
if (event.keyCode===13)
{
   faveButton.click();
}});



