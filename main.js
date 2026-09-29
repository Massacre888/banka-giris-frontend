const loginForm = document.querySelector('.login-form')
const formMessage = document.querySelector('.form-message')

loginForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  formMessage.textContent = 'Bu tasarım bir demodur; bankacılık işlemi gerçekleştirilmez.'
})
