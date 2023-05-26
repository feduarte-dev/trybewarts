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

// Pegamos a idéia a partir desse link: https://stackoverflow.com/questions/18110865/how-to-disable-enable-a-button-with-a-checkbox-if-checked
checkbox.onchange = function habilitaBotao() {
  if (checkbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};
