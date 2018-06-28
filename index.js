
var chopArray=[];
var listCount=0;
class App{
  constructor() {
    this.list=document.querySelector('#flicks')

    this.filmArray = []
    this.load()

    const form = document.querySelector('form#flickForm')
    form.addEventListener('submit', (ev)=>{
      ev.preventDefault()
      this.handleSubmit(ev)
      })
  }

  save(){
    localStorage.setItem('stringyArray', JSON.stringify(this.filmArray));
    }

    load(){
      const flicks=JSON.parse(localStorage.getItem('stringyArray')) 
      
      if(flicks){
        flicks.forEach(flick => this.addFlick(flick))
        this.chrisCountOMatic()
      }
     }

chrisCountOMatic(){
  var ChrisStorm=0;
  this.filmArray.forEach(function(flick){
ChrisStorm+=Number(flick.count)
  })
  document.querySelector('#ChrisCountDisplay').textContent="CHRIS COUNT :  "+ChrisStorm
}

renderProperty(name, value) {
  const span = document.createElement('span')
  if(name==='fave') {}
  else{
  
  span.classList.add(name)
  span.textContent = value
  }
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
/////////////////////
  const deleteButton=this.deleteButtonGenerator(flick,item)
  item.appendChild(deleteButton)
  item.classList.add(`delete${listCount}`)

  /////////////////////
  const faveButton=this.faveButtonGenerator(flick)
  item.classList.add(`fave${listCount}`)
  item.appendChild(faveButton)
  const list=document.querySelector('#flicks')
       

     
  return item
}

faveButtonGenerator(flick){
  const Button=document.createElement('button')
  Button.innerHTML='<i class="fas fa-grin-hearts"></i>'
  Button.classList.add('fave')
  Button.classList.add(`fave${listCount}`)
  Button.addEventListener('click', (ev)=>{
    ev.preventDefault()
   const l= ev.target
  console.log(l.getAttribute('class'))
  let faveClass=''
  if(l.getAttribute('class')===null)
  { 
    faveClass=l.parentElement.parentElement.getAttribute('class')
  }
  else{
  faveClass=l.getAttribute('class')
  }
  faveClass=faveClass.slice(5)
  faveClass='.'+faveClass
  const faveItem=document.querySelector(faveClass)
  faveItem.classList.toggle("SUPERLOVE")
  Button.textContent='Maybe Not :('
  let faveArraySpot=faveClass.slice(5)
  faveArraySpot=Number(faveArraySpot)
  let abc=chopArray.lastIndexOf(faveArraySpot)
  this.filmArray[abc].fave= !(this.filmArray[abc].fave)
  this.save(this.filmArray)
})
  return Button
}

deleteButtonGenerator(flick, item){
  const button=document.createElement('button')
  button.classList.add('delete')
  button.innerHTML='<i class="far fa-trash-alt"></i>'
  button.classList.add(`delete${++listCount}`)
  chopArray.push(listCount)
  debugger
        
        button.addEventListener('click', (ev)=>{
          
          this.removeFlick(flick, item)

      })
  return button
}

removeFlick(flick, item) {
  // remove from the UI
  this.list.removeChild(item)

  // remove from the array
  debugger
  const i = this.filmArray.indexOf(flick)
  this.filmArray.splice(i, 1)
  this.chrisCountOMatic()
  // update localStorage
  this.save()
}

handleSubmit(ev) {
  const f = ev.target

  const flick = {
    name: f.flickName.value,
    count: f.ChrisCount.value,
    fave: false,
  }

  if(listCount>=3)
  {
    document.querySelector('html').classList.add('fantasticFour')
  }
  this.addFlick(flick)

  const item = this.renderItem(flick)

  this.chrisCountOMatic()
  this.save(this.filmArray)
  f.reset()
  f.flickName.focus()
}





 addFlick(flick){
this.filmArray.push(flick)
const item = this.renderItem(flick)

    // mark it as a favorite, if applicable
    if (flick.fave) {
      item.classList.add('SUPERLOVE')
    }
debugger
    // add it to the DOM
    this.list.appendChild(item)
  }
}



const app = new App()