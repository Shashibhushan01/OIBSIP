function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const resultElement = document.getElementById("result");
    let result;

    if (fromUnit === "celsius") {
        result = (inputTemp * 9/5) + 32;
    } else {
        result = (inputTemp - 32) * 5/9;
    }

    resultElement.textContent = `Result: ${result.toFixed(2)} ${fromUnit === "celsius" ? "°F" : "°C"}`;
}