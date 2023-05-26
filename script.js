const loginBtn = document.getElementById("login-btn");
const inputEmail = document.getElementById("input-email");
const inputPw = document.getElementById("input-pw");

// Função do requisito 3: valida valores digitados no header ao clicar no botão Entrar.
loginBtn.addEventListener("click", () => {
  if (inputEmail.value && inputPw.value) {
    alert("Olá, Tryber!");
  } else {
    alert("Email ou senha inválidos.");
  }
});

