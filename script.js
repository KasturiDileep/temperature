// Get the necessary elements from the DOM
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertButton = document.getElementById("convertButton");
const resultDiv = document.getElementById("result");

// Add event listener to the convert button
convertButton.addEventListener("click", convertTemperature);

// Function to convert the temperature
function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;
  let convertedTemperature;

  if (unit === "celsius") {
    convertedTemperature = convertToCelsius(temperature);
    resultDiv.innerText = `${temperature} °C = ${convertedTemperature} °F`;
  } else if (unit === "fahrenheit") {
    convertedTemperature = convertToFahrenheit(temperature);
    resultDiv.innerText = `${temperature} °F = ${convertedTemperature} °C`;
  } else if (unit === "kelvin") {
    convertedTemperature = convertToKelvin(temperature);
    resultDiv.innerText = `${temperature} K = ${convertedTemperature} °C`;
  }
}

// Conversion functions
function convertToCelsius(temperature) {
  return ((temperature - 32) * 5) / 9;
}

function convertToFahrenheit(temperature) {
  return (temperature * 9) / 5 + 32;
}

function convertToKelvin(temperature) {
  return temperature + 273.15;
}
