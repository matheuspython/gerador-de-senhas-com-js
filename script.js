const pwEl = document.querySelector('#pw')
const copyEl = document.querySelector('#copy')
const lenEl = document.querySelector('#len')
const upperEl = document.querySelector('#upper')
const lowerEl = document.querySelector('#lower')
const numberEl = document.querySelector('#number')
const symbolEl = document.querySelector('#symbol')
const generateEl = document.querySelector('#generate')

const UpperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LowerLetters = UpperLetters.toLowerCase()
const numbers = '0123456789'
const symbols = '@#$%¨&*()+_-=/*,[]{}´´``~^;:.>,<º/?°'


function getLowercase() {
  return LowerLetters[Math.floor(Math.random() * LowerLetters.length)]
}

function getUppercase() {
  return UpperLetters[Math.floor(Math.random() * UpperLetters.length)]
}
function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword() {
  const len = lenEl.value 

  let password = ''

  if(upperEl.checked) {
    password += getUppercase()
  }
  if(lowerEl.checked) {
    password += getLowercase()
  }
  if(numberEl.checked) {
    password += getNumber()
  }
  if(symbolEl.checked) {
    password += getSymbol()
  }
  for(let i = password.length; i< len;i++) {
    const x = generateX()
    password += x
  }
  pwEl.innerText = password
}
function generateX() {
  const xs = []

  if(upperEl.checked) {
    xs.push(getUppercase())
  }
  if(lowerEl.checked) {
    xs.push(getLowercase())
  }
  if(numberEl.checked) {
    xs.push(getNumber())
  }
  if(symbolEl.checked) {
    xs.push(getSymbol())
  }
  if(xs.length === 0) return ''
  return xs[Math.floor(Math.random() * xs.length)]
}

generateEl.addEventListener('click', generatePassword)

copyEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = pwEl.innerText

  if(!password){
    return
  }
  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand("copy")
  textarea.remove()
  alert('texto copiado  ')
})