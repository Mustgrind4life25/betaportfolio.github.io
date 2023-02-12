// grab links
let links = document.getElementsByClassName('header-links')[0];

// grab the menu 
let menu = document.getElementById('menu')

menu.addEventListener('click', ()=>{
	links.classList.toggle('active')
})


// form validation

let nameError = document.getElementById('name-error')

let emailError = document.getElementById('email-error')

let submitError = document.getElementById('submit-error')

function validateName(){
	let name = document.getElementById('name').value;

	if (name.length == 0){
		nameError.innerHTML = 'Name is required';
		return false
	}
	if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
		nameError.innerHTML = 'Write full name';
		return false
	}
	nameError.innerHTML = 'valid';
	return true;
}

function validateEmail(){
	let email = document.getElementById('email').value;

	if (email.length == 0){
		emailError.innerHTML = 'Email is required';
		return false;
	}
	if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		emailError.innerHTML = 'Email Invalid';
		return false;
	}
	emailError.innerHTML = 'valid';
	return true;
}

function validateForm(){
	if(!validateName() || !validateEmail()){
		submitError.innerHTML = 'Please fix error to submit';
		submitError.style.display = 'block';
		setTimeout(function(){submitError.style.display='none';}, 3000);
		return false;
	}
}