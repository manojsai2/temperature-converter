const celsiusE1 = document.getElementById("celsius");
const fahrenheitE1 = document.getElementById("fahrenheit");
const kelvinE1 = document.getElementById("kelvin");
const button = document.querySelector(".button button");

function computeTemp(event){
    const currentvalue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinE1.value=(currentvalue + 273.32).toFixed(2);
            fahrenheitE1.value=(currentvalue * 1.8 + 32).toFixed(2);
            break;
        case "fahrenheit":
            celsiusE1.value = ((currentvalue - 32) / 1.8).toFixed(2);
            kelvinE1.value = ((currentvalue - 32) / 1.8 + 273.32).toFixed(2);
            break;
        case "kelvin":
            celsiusE1.value = (currentvalue-273.32).toFixed(2);
            fahrenheitE1.value = ((currentvalue-273.32)*1.8 + 32).toFixed(2);
            break;

    }
}

button.addEventListener('click',()=>{
    celsiusE1.value = ""
    fahrenheitE1.value = ""
    kelvinE1.value = ""
})