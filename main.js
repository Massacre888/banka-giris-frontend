const form = document.querySelector('.login-form')
const loginButton = document.querySelector('.primary-button')
const status = document.querySelector('.form-status')

loginButton.addEventListener('click', () => {
  if (!form.reportValidity()) return

  status.textContent = 'Bu sayfa bir arayüz örneğidir; gerçek banka girişi yapılmaz.'
})
