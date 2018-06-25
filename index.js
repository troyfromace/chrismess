const button = document.querySelector('#firstButton')
const Favebutton = document.querySelector('#faveButton')
const h1 = document.querySelector('#MEN')

const changeHeader = function() {
   
    h1.textContent='It\'s raining Chris!'
}

Favebutton.addEventListener('click',Faveomatic)
button.addEventListener('click', changeHeader)

function Faveomatic() {
    var x = document.getElementById("faveForm");
    var faveOutput = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        faveOutput += x.elements[i].value;
    }
    h1.textContent=faveOutput
}