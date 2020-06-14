/**
 * Fonctions de travail
 */
// fonction sur l'évenement click du btnValide
function validationForm(event) {
    
    let testEmail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$','g' );
    let message = document.querySelector('.message');
    let emailInput = document.getElementsByName("email")[0];
    let passwordInput = document.getElementsByName("pass")[0];
    let testMdp = passwordInput.value.length;  
    let form_inscr = document.forms[0];

    // validation test email
    let valideEmail = testEmail.test(emailInput.value);
    // validation mot de passe
    testMdp === 8;
    
    //condition sur le formulaire
    /*
        si input email et mot de passe est vide 
    */ 
    if (emailInput.value == '' && passwordInput.value == '')
    {
        event.preventDefault();
        message.classList.add('message-visible');
        message.innerHTML = 'Saisir les champs vides'; 
    }
    /*
        si non verifi si input email contient @ et le . 
     */
    else{
        if(!valideEmail)
        {
            event.preventDefault();
            message.classList.add('message-visible');
            message.innerHTML = 'Email est invalide :('; 
        }
        /*
            si non verifi si input mot de passe contient 8caracteres. 
         */
        else if(testMdp < 8)
        {
            event.preventDefault();
            message.classList.add('message-visible');
            message.innerHTML = 'Mot de passe est invalide 8caracteres minimum:('; 
        }
         /*
            si non verifi si input mot de passe contient 8caracteres. 
         */
        else if(testMdp > 8){
            event.preventDefault();
            message.classList.add('message-visible');
            message.innerHTML = 'Mot de passe est invalide 8caracteres minimum:(';     
        }
        /*
            si les conditions sont respecter change la couleur du formulaire 
            et annule le comportement par default
         */  
        else
        {   
            form_inscr.style.backgroundColor = "#a7ff3342";
        }
    }
 
}

    // fonction sur le controle des erreurs
    (function () {
        let msgErreur = document.querySelector('.message')

        // Valeur des champs inputs(Email et mot de passe)
        document.querySelectorAll('.input100').forEach(function (input) {

        input.addEventListener('focus', function () {
        // On vérifie si l' élément html est affiché
        // contient il la classe message-visible
        if (msgErreur.classList.contains('message-visible')) {
        // si oui l'enlever
        msgErreur.classList.remove('message-visible');
        }
        })
        })
        })();







