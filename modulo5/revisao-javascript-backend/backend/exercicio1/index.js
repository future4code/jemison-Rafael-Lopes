const ConversorDeTemperatura = (temperatura) => {
    const tCelsius = temperatura;
    const celsiusParaFahrenheit = tCelsius * 9 / 5 + 32;
    let texto = tCelsius + '\xB0C é ' + celsiusParaFahrenheit + ' \xB0F';
    console.log(ConversorDeTemperatura(20, texto))
}

