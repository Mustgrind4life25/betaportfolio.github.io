let flexCont = document.getElementsByClassName('flex-container')[0];

let toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () =>{
	flexCont.classList.toggle('active')
})



// Contact form section

let name = document.getElementById('name')

let email = document.getElementById('email')

let message = document.getElementById('message')

let formBtn = document.getElementsByClassName('form-btn')[0]
