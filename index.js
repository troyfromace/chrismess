//All my DOM Goodies
const button = document.querySelector('#firstButton')
const faveButton = document.querySelector('#faveButton')
const h1 = document.querySelector('#MEN')
const faveText =document.querySelector('#faveForm')

//for the first two parts
const changeHeader = function() {
   
    h1.textContent='It\'s raining Chris!'
}
button.addEventListener('click', changeHeader)

//Super Mega Bonus Credit
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

//Super Mega Bonus Credit Hyper Fighting
faveText.addEventListener('keypress', 
function(event){  
if (event.keyCode===13)
{
    event.preventDefault();
   faveButton.click();
}});