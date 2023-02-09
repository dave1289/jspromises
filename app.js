favoriteNum = 7
url = `http://numbersapi.com/${favoriteNum}/trivia?json`


let first = ''
let second = ''
let third = ''
let fourth = ''
const facts = []

function pullFacts(url) {
   axios.get(url)
.then( res => {
   let first = res.data.text
   facts.push(first)
   return axios.get(url)
})
.then( res => {
   let second = res.data.text;
   facts.push(second)
   return axios.get(url)
})
.then( res => {
   let third = res.data.text;
   facts.push(third)
   return axios.get(url)
})
.then( res => {
   let fourth = res.data.text
   facts.push(fourth)
   return fourth
})
for (let i = 0; i < 4; i++) {
   let newLi = document.createElement('li')
   let fact = facts[i]
   newLi.textContent = fact
   document.querySelector('body').append(newLi)
}}

$('document').ready(function() {
   pullFacts(url);
});


