const form = document.querySelector('form#flickForm')



const listAdder9000 = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName=f.flickName.value
  const list = document.querySelector('#flicks')
  let item=document.createElement('li')

  item.textContent=flickName
  list.appendChild(item)
   
   f.reset()
}

form.addEventListener('submit', listAdder9000)