const button = document.querySelector('button')

const changeHeader = function() {
    const h1 = document.querySelector('#MEN')
    h1.textContent='It\'s raining Chris!'
}

button.addEventListener('click', changeHeader)