document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  const inputField = document.getElementById('inputField');
  
  // Prevent form from submitting
  form.addEventListener('submit', function(event) {

    event.preventDefault();

    // Retrieve the input field value
    // Regular expression pattern for alphanumeric input
    let inputValue = inputField.value.trim();
    const alphanumeric = /^[a-zA-Z0-9]+$/;
        
    if (alphanumeric.test(inputValue)) {
      alert("The Form has been Submitted.")
      inputField.value = ""
    } else {
      alert("Error: \nPlease enter only alphabets and numbers.")
    }
  });
});