# Simulación de Crecimiento de Bacterias con Fibonacci

## Descripción del Proyecto

Este proyecto consiste en una simulación web del crecimiento de bacterias utilizando la sucesión Fibonacci. La aplicación permite ingresar una cantidad de etapas o meses y observar cómo aumenta una población bacteriana de manera progresiva.

Además, el sistema incluye distintos ambientes de reproducción como clima cálido, frío, contaminado y laboratorio, modificando la velocidad de crecimiento bacteriano para representar distintos escenarios biológicos.

---

## Problema Real

En la vida real, algunas bacterias pueden reproducirse rápidamente dependiendo del ambiente donde se encuentren. Factores como la temperatura, contaminación y disponibilidad de nutrientes influyen directamente en su crecimiento.

Este proyecto busca representar de manera educativa cómo las matemáticas y la programación pueden utilizarse para modelar fenómenos reales relacionados con el crecimiento poblacional y la reproducción bacteriana.

Aunque las bacterias reales no siguen exactamente la sucesión Fibonacci, esta serie matemática permite crear una simulación simplificada y comprensible del crecimiento progresivo.

---

## Algoritmo Utilizado

El sistema utiliza la sucesión Fibonacci para generar el crecimiento de bacterias.

La lógica principal consiste en sumar los dos valores anteriores para generar el siguiente número de bacterias.

Ejemplo:

1, 1, 2, 3, 5, 8, 13...

Cada número representa la cantidad de bacterias presentes en una etapa determinada.

El algoritmo también utiliza multiplicadores según el ambiente seleccionado:

* 🔥 Ambiente cálido → crecimiento normal
* ❄️ Ambiente frío → crecimiento reducido
* ☢️ Ambiente contaminado → crecimiento alterado
* 🧪 Laboratorio → crecimiento acelerado

---

## Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript
* Git
* GitHub
* GitHub Pages

---

## Conceptos de Programación Aplicados

* Variables `let`
* Ciclos `for`
* Condicionales `if`
* Manipulación del DOM
* `getElementById`
* Validación de datos

---

## Restricciones

El sistema permite un máximo de 50 etapas para evitar números demasiado grandes y mantener una simulación estable.

---

## Conclusión

Este proyecto demuestra cómo las matemáticas pueden utilizarse para representar simulaciones de crecimiento biológico y cómo la programación permite visualizar datos dinámicamente en una página web interactiva.
