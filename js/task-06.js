const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
  const enteredLength = validationInput.value.length;
  const requiredLength = parseInt(validationInput.dataset.length);

  if (enteredLength === requiredLength) {
    validationInput.style.borderColor = "green";
  } else {
    validationInput.style.borderColor = "red";
  }
});
