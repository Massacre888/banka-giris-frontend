import './style.css'

const loginForm = document.querySelector('.login-form')
const formStatus = document.querySelector('.form-status')

loginForm?.addEventListener('submit', (event) => {
  event.preventDefault()
  if (formStatus) {
    formStatus.textContent = 'Bu örnek arayüzde gerçek giriş işlemi yapılmaz.'
  }
})
