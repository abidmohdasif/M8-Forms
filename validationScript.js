document.getElementById("submit").addEventListener("click", (event) => {

    const inputvalue = document.getElementById("inputField")
    if (/^[a-zA-Z0-9]+$/.test(inputvalue.value)){
         inputvalue.setCustomValidity("");
        alert("Your form has been submitted.");
    } else{
         inputvalue.setCustomValidity("Error! Your input is not alphanumeric!")
        }
  });