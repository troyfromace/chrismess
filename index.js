const form = document.querySelector('form#flickForm')
const Display = document.querySelector('#ChrisCountDisplay')
var ChrisStorm = 0

function listOtron57(f) {
  
  const list = document.querySelector('#flicks')
  let item=document.createElement('li')
  item.classList.add('flick');
  let nameSpan = document.createElement('span')
  nameSpan.classList.add('name')
  let countSpan = document.createElement('span')
  countSpan.classList.add('count')
  nameSpan.textContent=`"${f.flickName.value}"`
  if(f.ChrisCount.value==="1")
  countSpan.textContent=`${f.ChrisCount.value} Chriss`
  else countSpan.textContent=`${f.ChrisCount.value} Chrisses`
  item.appendChild(nameSpan)
  item.appendChild(countSpan)
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
