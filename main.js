document.getElementById("form-validacao")
    .addEventListener("submit", function (e) {
        e.preventDefault();
    });

const num1 = document.getElementById("numero1").value;
const num2 = document.getElementById("numero2").value;

function formValidation() {
    if (numero2 > numero1) {
        alert ("Este valor é válido!");
    }
    else {
        alert ("Valor inválido!");
    }
}





