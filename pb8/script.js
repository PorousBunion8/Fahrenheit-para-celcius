function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    var resultElement = document.getElementById("result");
  
    if (fahrenheitInput.value === "" || isNaN(fahrenheitInput.value)) {
      resultElement.innerText = "Por favor, insira um valor válido em Fahrenheit.";
      return;
    }
  
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
  
    resultElement.innerText = fahrenheit + " Fahrenheit é igual a " + celsius.toFixed(2) + " Celsius.";
  
    
    var body = document.body;
    if (celsius > 30) {
      body.style.backgroundColor = "#87ceeb"; 
    } else {
      body.style.backgroundColor = "#ffa500"; 
    }
  }
  
  
  
  
  
  