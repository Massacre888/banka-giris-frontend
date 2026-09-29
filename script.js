const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");
const passwordInput = document.querySelector("#password");
const passwordToggle = document.querySelector("#password-toggle");

passwordToggle.addEventListener("click", () => {
  const isPasswordVisible = passwordInput.type === "text";
  passwordInput.type = isPasswordVisible ? "password" : "text";
  passwordToggle.setAttribute("aria-pressed", String(!isPasswordVisible));
  passwordToggle.setAttribute(
    "aria-label",
    isPasswordVisible ? "Şifreyi göster" : "Şifreyi gizle",
  );
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent =
    "Bu bir arayüz demosudur. Giriş bilgileriniz gönderilmedi veya kaydedilmedi.";
});

document.querySelectorAll("#help-link, #forgot-link, #security-link, #privacy-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    formMessage.textContent =
      "Bu eğitim demosunda ek hizmetler kullanılamaz. Hiçbir bilginiz gönderilmez.";
  });
});
