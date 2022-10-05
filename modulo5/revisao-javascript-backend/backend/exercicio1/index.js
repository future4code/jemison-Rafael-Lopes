

const converteParaFahrenheit = (C) => { //input
    const celsiusParaFahrenheit = C * 9 / 5 + 32;
    let fahrenheit = `${C} \xB0 Celsius é equivalente a ${celsiusParaFahrenheit} \xB0 Farenheit.`
    return fahrenheit; // output   
}

const converteParaKelvin = (C) => {
    const celsiusParaKelvin = C + 273.15;
    let kelvin = `${C} \xB0 Celsius é equivalente a ${celsiusParaKelvin} \xB0 Kelvin.`
    return kelvin
}

console.log(converteParaFahrenheit(30));
console.log(converteParaKelvin(30));