/* 
Funciones a elaborar:

* animateByLine: 
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.

* animateByChart: 
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter. 
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea. 
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:

- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js

*/


const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
]

//console.log(asciiHeart[0].length)

const animateByChart = (ms) => {
    let delay = 0
    for (let i = 0; i < asciiHeart.length; i++) {
        for (let j = 0; j < asciiHeart[i].length; j++) {
            if (j === asciiHeart[i].length - 1) {
                setTimeout(() => {
                    process.stdout.write(asciiHeart[i][j])
                    console.log('')
                }, delay += ms);

            }
            else {
                setTimeout(() => {
                    process.stdout.write(asciiHeart[i][j])
                }, delay += ms);

            }

        }

    }

}





const animateByLine = (ms) => {
    let delay = 0
    for (let i = 0; i < asciiHeart.length; i++) {
        console.log(delay)
        setTimeout(() => {
            console.log(asciiHeart[i])
        }, delay += ms);

    }
}

animateByChart(1000)
//animateByLine(1000)
