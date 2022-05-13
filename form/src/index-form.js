const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const nascimento = document.getElementById('nascimento');
const cep = document.getElementById('cep');
const numero = document.getElementById('numero');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    const cepValue = cep.value.trim();
    const nascimentoValue = nascimento.value.trim();
    const numeroValue = numero.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Digite seu nome completo');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Digite seu email');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Digite um email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Defina a sua senha');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Confirmação da senha necessária');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'As senhas digitadas não combinam');
	} else{
		setSuccessFor(password2);
	}
	if(cepValue === '') {
		setErrorFor(cep, 'Digite seu CEP para preenchimento automático');
	} else {
		setSuccessFor(cep);
	}
    if(nascimentoValue === '') {
		setErrorFor(nascimento, 'Selecione sua data de nascimento no calendário');
	} else {
		setSuccessFor(nascimento);
	}
    if(numeroValue === '') {
		setErrorFor(numeroValue, 'Digite o numero da residência');
	} else {
		setSuccessFor(numero);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
    
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}








