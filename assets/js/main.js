const form = document.forms[0];
const emailInput = form.email;
const passwordInput = form.pass;
const notificationElt = document.querySelector('.message');   

// console.log(form.email)

form.onsubmit = e => {
    e.preventDefault();
    notificationElt.classList.add('message-visible');
    let password = passwordInput.value;
    
    if (emailValidation(emailInput.value) && password.length >= 8) {
        form.style.backgroundColor = '#a7ff3342';
        hideMessage(notificationElt);
    } else {
        notificationElt.textContent = 'Email incorrecte ou Mot de Passe trop court';
    }
    
}

emailInput.onfocus = () => {
    hideMessage(notificationElt);
}

passwordInput.onfocus = () => {
    hideMessage(notificationElt);
}