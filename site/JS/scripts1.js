document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("register-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateForm()) {
            // enviar dados 
            // redirecionar
            console.log("Formulário válido. Enviando dados...");
        } else {
            // Se o formulário não for válido, exibe mensagens de erro
            console.log("Formulário inválido. Por favor, corrija os erros.");
        }
    });



    function validateForm() {
        let isValid = true;

        // Verificar se o nome é preenchido
        const fullNameField = document.getElementById("fullName");
        if (fullNameField.value.trim() === "") {
            isValid = false;
            displayErrorMessage(fullNameField, "Campo obrigatório.");
        } else {
            removeErrorMessage(fullNameField);
        }

        //senha e a confirmação de senha são preenchidas
        const passwordField = document.getElementById("password");
        const confirmPasswordField = document.getElementById("confirmPassword");
        if (passwordField.value.trim() === "" || confirmPasswordField.value.trim() === "") {
            isValid = false;
            displayErrorMessage(confirmPasswordField, "Senha inválida.");
        } else {
            removeErrorMessage(confirmPasswordField);
        }

        //e-mail é válido
        const emailField = document.getElementById("email");
        if (!isValidEmail(emailField.value)) {
            isValid = false;
            displayErrorMessage(emailField, "E-mail inválido.");
        } else {
            removeErrorMessage(emailField);
        }

        //telefone é válido
        const phoneField = document.getElementById("phone");
        if (!isValidPhoneNumber(phoneField.value)) {
            isValid = false;
            displayErrorMessage(phoneField, "Número de telefone inválido.");
        } else {
            removeErrorMessage(phoneField);
        }

        //os termos de uso
        const agreementCheckbox = document.getElementById("agreement");
        if (!agreementCheckbox.checked) {
            isValid = false;
            const agreementLabel = document.getElementById("agreement-label");
            displayErrorMessage(agreementLabel, "Você deve aceitar os termos de uso.");
        } else {
            removeErrorMessage(agreementLabel);
        }

        return isValid;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPhoneNumber(phone) {
       
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(phone) && phone.length >= 10 && phone.length <= 11;
    }

    function displayErrorMessage(element, message) {
        const errorMessageElement = document.createElement("p");
        errorMessageElement.classList.add("error-message");
        errorMessageElement.textContent = message;

        const existingErrorMessage = element.nextElementSibling;
        if (existingErrorMessage && existingErrorMessage.classList.contains("error-message")) {
            existingErrorMessage.textContent = message;
        } else {
            element.parentNode.insertBefore(errorMessageElement, element.nextSibling);
        }
    }

    function removeErrorMessage(element) {
        const existingErrorMessage = element.nextElementSibling;
        if (existingErrorMessage && existingErrorMessage.classList.contains("error-message")) {
            existingErrorMessage.remove();
        }
    }
});


function aperta(){
    var element = document.getElementById("")
}