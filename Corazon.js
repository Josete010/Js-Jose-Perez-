const asciiHeart = [
    
]



//console.log(asciiHeart[0].length)

const animateByChart = (ms) => {
    let delay = 0
    for (let i = 0; i < asciHeart.length; i++) {
        for (let j = 0; j < asciHeart.length; j++) {
            if(j === asciHeart[i].length - 1) {
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
    for (let i = 0; i < asciHeart.length; i++) {
        
        setTimeout(() => {
            console.log(asciiHeart[i])
        }, delay += ms);

    }
}

//animateByChart(100)
animateByLine(100)
