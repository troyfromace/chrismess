const form = document.querySelector('form#flickForm')
const Display = document.querySelector('#ChrisCountDisplay')
var ChrisStorm = 0


function chrisCountOMatic(f){
  ChrisStorm += Number(f.ChrisCount.value)
  Display.textContent="CHRIS COUNT :  "+ChrisStorm
}

const renderItem = function(flick) {
  const item = document.createElement('li')
  item.classList.add('flick')

  // get the list of properties
  const properties = Object.keys(flick)

  // loop over the properties
  properties.forEach(function(propertyName) {
    // build a span, and append it to the list
    const span = renderProperty(propertyName, flick[propertyName])
    item.appendChild(span)
  })

  return item
}

const renderProperty = function(name, value) {
  const span = document.createElement('span')
  span.classList.add(name)
  span.textContent = value
  return span
}

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flick = {
    name: f.flickName.value,
    count: f.ChrisCount.value,
  }

  const item = renderItem(flick)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  chrisCountOMatic(f)
  
  f.reset()
}

form.addEventListener('submit', handleSubmit)