const inputs = document.querySelectorAll('.input')
const button = document.querySelector(".login__button")

const handleFocus = ({target}) => {
  const span = target.previousElementSibling
  span.classList.add('span-active')
}

const handleFocusOut = ({target}) => {

  if(target.value === ''){
    const span = target.previousElementSibling
    span.classList.remove('span-active')
  }
}

const handleChange = () => {

  //A primeira variavel será o primeiro elemento do array de inputs, a mesma coisa acontece para o segundo elemento
  const [username,password] = inputs;
  //const username = inputs[0]

  if(username.value && password.value.length >= 8){
    button.removeAttribute('disabled')
  }else{
    button.setAttribute('disabled', '')
  }
  console.log(username.value)
  console.log(password.value)
}

inputs.forEach((input)=> input.addEventListener('focus',handleFocus))
inputs.forEach((input)=> input.addEventListener('focusout',handleFocusOut))

inputs.forEach((input)=> input.addEventListener('input',handleChange))




