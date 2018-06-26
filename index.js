const form = document.querySelector('form#flickForm')



const changeHeading = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName=f.flickName.value
  const list = document.querySelector('#flicks')
  let item=document.createElement('li')

  item.textContent=flickName
  list.appendChild(item)
   
   f.reset()
}

form.addEventListener('submit', changeHeading)