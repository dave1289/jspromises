favoriteNum = 7
url = `http://numbersapi.com/${favoriteNum}/trivia?json`


let first = ''
let second = ''
let third = ''
let fourth = ''
const facts = []

async function populateLi(arr) {
   for (let i = 0; i<4; i++) {
      let newLi = document.createElement('li')
      newLi.textContent = arr[i]
      $('ul').append(newLi)
   }
}

async function pullFacts(url) {
   await axios.get(url)
   .then( res => {
      let first = res.data.text
      facts.push(first)
   })
   await axios.get(url)
   .then( res => {
      let second = res.data.text
      facts.push(second)
   })
   await axios.get(url)
   .then( res => {
      let third = res.data.text
      facts.push(third)
   })
   await axios.get(url)
   .then( res => {
      let fourth = res.data.text
      facts.push(fourth)
   })
populateLi(facts)}


$(document).ready(() => {
   pullFacts(url)
})




