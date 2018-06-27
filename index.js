var ChrisStorm=0;
const filmArray=[];
var listCount=0;
class App{
  constructor() {
    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev)=>{
      ev.preventDefault()
      
      this.handleSubmit(ev,ChrisStorm)

      if(listCount===0){}
      else {
        const deleteButton=document.querySelector(`button.delete${listCount}`)
        deleteButton.addEventListener('click', (ev)=>{
          ev.preventDefault()
         const d= ev.target
        console.log(d.getAttribute('class'))
        let deleteClass=d.getAttribute('class')
        debugger
        deleteClass=deleteClass.slice(7)
        deleteClass='.'+deleteClass
        const deleteItem=document.querySelector(deleteClass)
        const list=document.querySelector('#flicks')
        debugger
        list.removeChild(deleteItem)
      })
      }


      })
    
   
    
    
  }


chrisCountOMatic(f,ChrisStorm){
  ChrisStorm += Number(f.ChrisCount.value)
  document.querySelector('#ChrisCountDisplay').textContent="CHRIS COUNT :  "+ChrisStorm
  return ChrisStorm
}

renderProperty(name, value) {
  const span = document.createElement('span')
  span.classList.add(name)
  span.textContent = value
  return span
}

renderItem(flick) {
  const item = document.createElement('li')
  item.classList.add('flick')

  // get the list of properties
  const properties = Object.keys(flick)

  // loop over the properties
  properties.forEach((propertyName) => {
    // build a span, and append it to the list
    const span = this.renderProperty(propertyName, flick[propertyName])
    item.appendChild(span)
  })

  const button=document.createElement('button')
  button.classList.add('delete')
  button.classList.add(`delete${++listCount}`)
  button.textContent=`DELETE ${flick.name}`
  item.appendChild(button)
  item.classList.add(`delete${listCount}`)
  return item
}


handleSubmit(ev,ChrisStorm) {
  const f = ev.target

  const flick = {
    name: f.flickName.value,
    count: f.ChrisCount.value,
    delete: '',
  }
  filmArray.push(flick);
  console.log(filmArray);
  const item = this.renderItem(flick)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  this.chrisCountOMatic(f,ChrisStorm)

  f.reset()
}

}

const app = new App()
