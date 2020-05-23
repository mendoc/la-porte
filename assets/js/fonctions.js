const emailRegex = /.+@.+\..+/;

/**
 * Cache le message du contenu <div class="message">...</div>
 * @param {Element} messageElement 
 */
 const hideMessage = messageElement => {
     messageElement.classList.remove('message-visible')
 }

/**
 * Retourne true si l'email est valide
 * @param {String} email - email value
 * @returns {Boolean}
 */
 const emailValidation = email => {
    return email && emailRegex.test(email) ? true : false;
 }