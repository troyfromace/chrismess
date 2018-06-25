const button = document.querySelector('button')

const changeHeader = function() {
    const h1 = document.querySelector('h1')
    h1.textContent='It\'s raining Chris!'
}

button.addEventListener('click', changeHeader)