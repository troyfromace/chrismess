var ChrisStorm=0;
var filmArray=[];
var chopArray=[];
var listCount=0;
class App{
  constructor() {
this.load()
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
        let deleteClass=''
        if(d.getAttribute('class')===null)
        { 
          deleteClass=d.parentElement.parentElement.getAttribute('class')
        }
        else{
        deleteClass=d.getAttribute('class')
        }
        deleteClass=deleteClass.slice(7)
        deleteClass='.'+deleteClass
        let chopNumber=deleteClass.slice(7)
        chopNumber=Number(chopNumber)
        let choppity=chopArray.lastIndexOf(chopNumber)
        filmArray.splice(choppity,1)
        chopArray.splice(choppity,1)
        const deleteItem=document.querySelector(deleteClass)
        const list=document.querySelector('#flicks')
        list.removeChild(deleteItem)
        this.chrisCountOMatic(ChrisStorm)
        this.sendToStorage(filmArray)

      })
      }

      if(listCount===0){}
      else {
        const list=document.querySelector('#flicks')
        const faveButton=document.querySelector(`button.fave${listCount}`)
        faveButton.addEventListener('click', (ev)=>{
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
        faveButton.textContent='Maybe Not :('
        let faveArraySpot=faveClass.slice(5)
        faveArraySpot=Number(faveArraySpot)
        let abc=chopArray.lastIndexOf(faveArraySpot)
        filmArray[abc].fave= !filmArray[abc].fave
        console.log(filmArray)
        this.sendToStorage(filmArray)

      })
      }

      })
 
  }


chrisCountOMatic(ChrisStorm){
 
  filmArray.forEach(function(flick){
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
  const deleteButton=this.deleteButtonGenerator(flick)
  item.appendChild(deleteButton)
  item.classList.add(`delete${listCount}`)

  /////////////////////
  const faveButton=this.faveButtonGenerator(flick)
  item.classList.add(`fave${listCount}`)
  item.appendChild(faveButton)
  return item
}

faveButtonGenerator(flick){
  const faveButton=document.createElement('button')
  faveButton.innerHTML='<i class="fas fa-grin-hearts"></i>'
  faveButton.classList.add('fave')
  faveButton.classList.add(`fave${listCount}`)
  return faveButton
}

deleteButtonGenerator(flick){
  const button=document.createElement('button')
  button.classList.add('delete')
  button.innerHTML='<i class="far fa-trash-alt"></i>'
  button.classList.add(`delete${++listCount}`)
  chopArray.push(listCount)
  return button
}


handleSubmit(ev,ChrisStorm) {
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
  filmArray.push(flick);
  console.log(filmArray);
  const item = this.renderItem(flick)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  this.chrisCountOMatic(ChrisStorm)
  this.sendToStorage(filmArray)
  f.reset()
}

sendToStorage(filmArray){
const stringyArray= JSON.stringify(filmArray)
console.log(stringyArray)
localStorage.setItem('stringyArray', stringyArray);

}

load(){
 const flicks=JSON.parse(localStorage.getItem('stringyArray')) 
 filmArray=flicks || []
}
}


const app = new App()