const loginBtn = document.getElementById('login-btn');
const inputEmail = document.getElementById('email-input');
const inputPw = document.getElementById('pw-input');
const submitBtn = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
const textarea = document.getElementById('textarea');
const formData = document.getElementById('form-data');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const emailInput = document.getElementById('input-email');
const house = document.getElementById('house');
const evaluationForm = document.getElementById('evaluation-form');

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

// Função do requisito 20: para contar quantos caracteres ainda podem ser usados no textarea.
textarea.addEventListener('input', () => {
  const counter = document.getElementById('counter');
  counter.innerText = 500 - textarea.value.length;
});

// 21. Substitua o formulário pelas informações da pessoa estudante.
const verificaFamilia = () => {
  return document.querySelector('input[name="family"]:checked').value;
};

const verificaMateria = () => {
  let arrayMaterias = [];
  const materias = document.querySelectorAll('input[class="subject"]:checked');
  for (let index = 0; index < materias.length; index += 1) {
    arrayMaterias.push(materias[index].value);
  }
  return arrayMaterias.join(', ');
};

const verificaNota = () => {
  return document.querySelector('input[name="rate"]:checked').value;
};

const formInfo = () => {
  const info = document.createElement('p');
  info.innerText = `Nome: ${inputName.value} ${inputLastName.value}
  Email: ${emailInput.value}
  Casa: ${house.value}
  Família: ${verificaFamilia()}
  Matérias: ${verificaMateria()}
  Avaliação: ${verificaNota()}
  Observações: ${textarea.value} `;
  formData.appendChild(info);
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  evaluationForm.style.display = 'none';
  formInfo();
});
