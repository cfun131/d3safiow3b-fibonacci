function calcular() {

    let etapas =
        parseInt(
            document.getElementById("etapas").value
        );

    let ambiente =
        parseFloat(
            document.getElementById("ambiente").value
        );

    let resultado =
        document.getElementById("resultado");

    let a = 0;
    let b = 1;
    let c;

    let texto = "";

    let total = 0;

    if (isNaN(etapas) || etapas <= 0) {

        resultado.innerHTML =
            "Ingrese un número válido";

        return;
    }

    if (etapas > 50) {

        resultado.innerHTML =
            "Máximo permitido: 50 etapas";

        return;
    }

    texto +=
        "<table>" +
        "<tr>" +
        "<th>Etapa</th>" +
        "<th>Bacterias</th>" +
        "<th>Ilustración</th>" +
        "</tr>";

    for (let i = 1; i <= etapas; i++) {

        c = a + b;

        let bacterias =
            Math.floor(b * ambiente);

        total += bacterias;

        let dibujo = "";

        if (bacterias <= 20) {

            for (let j = 1; j <= bacterias; j++) {

                dibujo += "🦠";

            }

        } else {

            for (let j = 1; j <= 20; j++) {

                dibujo += "🦠";

            }

            dibujo +=
                " +" + (bacterias - 20);

        }

        texto +=
            "<tr>" +
            "<td>" + i + "</td>" +
            "<td>" + bacterias + "</td>" +
            "<td class='bacterias'>" +
            dibujo +
            "</td>" +
            "</tr>";

        a = b;
        b = c;

    }

    texto += "</table>";

    texto +=
        "<br><h2>Total estimado: "
        + total +
        " bacterias</h2>";

    resultado.innerHTML = texto;

}