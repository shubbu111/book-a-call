const btn = document.querySelector('.btn');
btn.style.background = 'green'

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phInput = document.querySelector('#phnumber')
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if (nameInput.value === "" || emailInput.value === "" || phInput.value === ""){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phInput.value}`));
        userList.appendChild(li);

        const username = e.target.name.value;
        const email = e.target.email.value;
        const phno = e.target.phnumber.value; 
        localStorage.setItem('name', username);
        localStorage.setItem('email', email);
        localStorage.setItem('phnumber', phno);
        //clear fields
        nameInput.value = "";
        emailInput.value = "";
        phInput.value = "";
    }
}


localStorage.setItem('name' , 'Joe');
localStorage.getItem('name');

sessionStorage.setItem('name', 'Jamie');
sessionStorage.getItem('name')

document.cookie = 'name=Tom; expires=' + new Date(2023,2,3).toUTCString();

