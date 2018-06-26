const form = document.querySelector('form#flickForm')
const Display = document.querySelector('#ChrisCountDisplay')
var ChrisStorm = 0

const listAdder9000 = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName=f.flickName.value
  const list = document.querySelector('#flicks')
  let item=document.createElement('li')

  item.textContent=flickName
  list.appendChild(item)
  
  ChrisStorm += Number(f.ChrisCount.value)
  Display.textContent="CHRIS COUNT :  "+ChrisStorm
  
   f.reset()
}

form.addEventListener('submit', listAdder9000)
