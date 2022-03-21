export default function conversor(graus, tipo, valor) {
    switch (tipo) {
        case 'celsius':
            if (valor === "F") {
                return (parseFloat(graus * 9) / 5 + 32).toFixed(2) + " °F";
            }
            if (valor === "K") {
                return (parseFloat(graus) + 273.15).toFixed(2) + " K";
            }
            return graus + " °C";
        case 'fahrenheit':
            if (valor === "K") {
                return (((graus - 32) * (5 / 9)) + 273.15).toFixed(2) + " K";

            }
            if (valor === "C") {
                return ((graus - 32) * (5 / 9)).toFixed(2) + " °C";
            }
            return graus + " °F";

        case 'kelvin':
            if (valor === "F") {
                return ((graus - 273.15) * (9 / 5) + 32).toFixed(2) + " °F";
            }
            if (valor === "C") {
                return (graus - 273.15).toFixed(2) + " °C";
            }
            return graus + " K";
        default:
            console.log('Tipo de conversão inválido');
            break;
    }
}