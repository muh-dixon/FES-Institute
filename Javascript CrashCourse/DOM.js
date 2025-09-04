 //1st way of accessing an element
console.log(document)
console.log(document.querySelector('.title'))
console.log(document.querySelector('h1'))
//Change HTML
document.querySelector('.title').innerHTML = 'Front End'
 //2nd way of accessing an element
console.log(document.getElementById('title'))

function ToggleDark() {
    document.querySelector('body').classList.toggle("dark-theme")
    console.log('clicked')
}