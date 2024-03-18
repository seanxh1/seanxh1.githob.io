 <script>  
    document.getElementById('registerForm').addEventListener('submit', function(event) {  
      event.preventDefault(); Blocks the default submission behavior of forms  
      var name = document.getElementById('name').value;  
      var email = document.getElementById('email').value;  
      var password = document.getElementById('password').value;  
      var errorMessages = document.getElementById('errorMessages');  
      errorMessages.innerHTML = ''; Clear the previous error message  
  
      Validation rules  
      if (name == '') {  
        showError('Name cannot be empty');  
        return;  
      }  
      if (email == '') {  
        showError('Mailbox cannot be empty');  
        return;  
      } else if (!isValidEmail(email)) {  
        showError('Incorrect mailbox format');  
        return;  
      }  
      if (password == '') {  
        showError('Password cannot be empty');  
        return;  
      } else if (password.length < 6) { // The password must be at least 6 characters long. }  
        showError('Password length is at least 6 characters');  
        return;  
      }  
