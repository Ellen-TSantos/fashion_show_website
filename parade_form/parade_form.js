




// // script.js

// document.addEventListener('DOMContentLoaded', function () {
//     // Array of success messages
//     var successMessages = [
//         'Formulário enviado com sucesso!',
//         'Formulário enviado para o email cadastrado.'
//     ];

//     // Function to show success messages
//     function showSuccessMessages() {
//         var messagesContainer = document.getElementById('success-messages-container');

//         // Display each message with a delay
//         successMessages.forEach(function (message, index) {
//             setTimeout(function () {
//                 messagesContainer.innerHTML = '<p>' + message + '</p>';
//                 messagesContainer.style.display = 'block'; // Show the container

//                 // Hide the container after a short delay (e.g., 2 seconds)
//                 setTimeout(function () {
//                     messagesContainer.style.display = 'none';
//                 }, 2000);

//             }, index * 2500); // Delay between messages (e.g., 2.5 seconds)
//         });
//     }

//     // Function to validate the form
//     function validateForm() {
//         var requiredInputs = document.querySelectorAll('[required]');

//         for (var i = 0; i < requiredInputs.length; i++) {
//             if (!requiredInputs[i].value.trim()) {
//                 // If a required field is empty, display an error message and prevent form submission
//                 alert('Por favor, preencha todos os campos obrigatórios.');
//                 return false;
//             }
//         }

//         // Form is valid
//         return true;
//     }

//     // Function to handle the button click event
//     function handleButtonClick() {
//         // Validate the form
//         if (validateForm()) {
//             // Form is valid, show success messages
//             showSuccessMessages();
//         }
//         // If form validation fails, the error message will be displayed and the form won't submit.
//     }

//     // Attach the click event listener to the button
//     var confirmButton = document.querySelector('.button-form');
//     confirmButton.addEventListener('click', handleButtonClick);
// });




// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Array of success messages
    var successMessages = [
        'Formulário enviado com sucesso!',
        'Formulário enviado para o email cadastrado.'
    ];

    // Function to show success messages
    function showSuccessMessages() {
        var messagesContainer = document.getElementById('success-messages-container');

        // Display each message with a delay
        successMessages.forEach(function (message, index) {
            setTimeout(function () {
                messagesContainer.innerHTML = '<p>' + message + '</p>';
                messagesContainer.style.display = 'block'; // Show the container

                // Hide the container after a short delay (e.g., 2 seconds)
                setTimeout(function () {
                    messagesContainer.style.display = 'none';
                    clearForm(); // Clear the form after hiding the messages
                }, 2000);

            }, index * 2500); // Delay between messages (e.g., 2.5 seconds)
        });
    }

    // Function to clear the form
    function clearForm() {
        var form = document.querySelector('form');
        var inputFields = form.querySelectorAll('input, textarea, select');

        inputFields.forEach(function (input) {
            // Clear the value of each input field
            input.value = '';
        });
    }

    // Function to validate the form
    function validateForm() {
        var requiredInputs = document.querySelectorAll('[required]');

        for (var i = 0; i < requiredInputs.length; i++) {
            if (!requiredInputs[i].value.trim()) {
                // If a required field is empty, display an error message and prevent form submission
                alert('Por favor, preencha todos os campos obrigatórios.');
                return false;
            }
        }

        // Form is valid
        return true;
    }

    // Function to handle the button click event
    function handleButtonClick() {
        // Validate the form
        if (validateForm()) {
            // Form is valid, show success messages
            showSuccessMessages();
        }
        // If form validation fails, the error message will be displayed and the form won't submit.
    }

    // Attach the click event listener to the button
    var confirmButton = document.querySelector('.button-form');
    confirmButton.addEventListener('click', handleButtonClick);
});
