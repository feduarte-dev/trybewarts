const loginBtn = document.getElementById('login-btn');
const inputEmail = document.getElementById('email-input');
const inputPw = document.getElementById('pw-input');
const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

// Função do requisito 3: valida valores digitados no header ao clicar no botão Entrar.
loginBtn.addEventListener('click', () => {
  if (inputEmail.value && inputPw.value) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

// Função do requisito 18: para habilitar o botão de envio apenas quando a checkbox estiver marcada.
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
