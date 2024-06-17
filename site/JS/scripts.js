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

      // Verificar se todos os campos obrigatórios estão preenchidos
      const requiredFields = form.querySelectorAll("[data-required]");
      requiredFields.forEach(function(field) {
          if (field.value.trim() === "") {
              isValid = false;
              displayErrorMessage(field, "Campo obrigatório.");
          }
      });

      // Verificar se o e-mail é válido
      const emailField = document.getElementById("email");
      if (!isValidEmail(emailField.value)) {
          isValid = false;
          displayErrorMessage(emailField, "E-mail inválido.");
      }

      // Verificar se a senha e a confirmação de senha coincidem
      const passwordField = document.getElementById("password");
      const confirmPasswordField = document.getElementById("passconfirmation");
      if (passwordField.value !== confirmPasswordField.value) {
          isValid = false;
          displayErrorMessage(confirmPasswordField, "As senhas não coincidem.");
      }

      // Verificar se o usuário aceitou os termos de uso
      const agreementCheckbox = document.getElementById("agreement");
      if (!agreementCheckbox.checked) {
          isValid = false;
          const agreementLabel = document.getElementById("agreement-label");
          displayErrorMessage(agreementLabel, "Você deve aceitar os termos de uso.");
      }

      return isValid;
  }

  function isValidEmail(email) {
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
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
});