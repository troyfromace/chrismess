const form = document.querySelector('form#flickForm')
const Display = document.querySelector('#ChrisCountDisplay')
var ChrisStorm = 0

function listOtron57(f) {
  const flickName=f.flickName.value
  const list = document.querySelector('#flicks')
  let item=document.createElement('li')
  item.classList.add('flick');
  item.textContent=flickName
  list.appendChild(item)
}

function chrisCountOMatic(f){
  ChrisStorm += Number(f.ChrisCount.value)
  Display.textContent="CHRIS COUNT :  "+ChrisStorm
}

const formSubmiter9000 = function(ev) {
  ev.preventDefault()
  const f = ev.target
  listOtron57(f);
  chrisCountOMatic(f);
   f.reset()
}

form.addEventListener('submit', formSubmiter9000)
