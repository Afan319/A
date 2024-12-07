const form = document.querySelector('.form form'); // Select the form element

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get the input value
  const inputValue = document.getElementById('fname').value;

  // Check the input value (you can add your specific logic here)
  if (inputValue === "") {
    alert("Please enter a name");
  } else {
if(inputValue === "Alex Armstrong"){
   window.location.href = 'message.html'; 
}
  }
});