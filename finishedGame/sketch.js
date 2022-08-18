let button;

function setup() {
    createCanvas(1900, 1000);
    background(0, 0, 0)
    fill(255, 255, 255)
}


 let firstWord = ['a', 100]
 let secondWord = ['b', 200]
 let thirdWord = ['c', 300]
 let wordOrderList = [firstWord, secondWord, thirdWord]
 let boolean1 = false
 let boolean2 = false
 let boolean3 = false
 let booleanCorrect1 = false
 let booleanCorrect2 = false
 let booleanCorrect3 = false
 
function draw() {
    textSize(35)
    if (boolean1 == true) {
        fill(255, 0, 0)  
    }
    if (booleanCorrect3 == true) {
        fill(0, 255, 0)
    }
    text("1. Credit score", 100, wordOrderList[0][1])
    fill(255, 255, 255)

    if (boolean2 == true) {
        fill(255, 0, 0)
    }

    if (booleanCorrect1 == true) {
        fill(0, 255, 0)
    }
    text("2. Low Credit Score", 100, wordOrderList[1][1])
    fill(255, 255, 255)

    if (boolean3 == true) {
        fill(255, 0, 0)  
    }
    if (booleanCorrect2 == true) {
        fill(0, 255, 0)
    }
    text('3. High Credit Score', 100, wordOrderList[2][1])
    fill(255, 255, 255)
    textSize(20)
    
    if (booleanCorrect3 == true) {
        fill(0, 255, 0)
    }
    text('c) The status of ones bank account.', 800, 300)
    fill(255, 255, 255)


    if (booleanCorrect1 == true) {
        fill(0, 255, 0)
    }
    text('a) Lenders, banks, and credit card issuers will be more reluctant to lend money.', 800, 100)
    fill(255, 255, 255)


    if (booleanCorrect2 == true) {
        fill(0, 255, 0)
    }
    text('b) You are seen as more trustworthy when you pay loans or bills on time', 800, 200)

    if (booleanCorrect1 == true && booleanCorrect2 == true && booleanCorrect3 == true) {
        fill(random(255), random(255), random(255))
        text('YOU WIN!!!', 900, 500)
    }
}
let arraymatch = []
function keyPressed() {
    if (keyCode == 49) { // one
        arraymatch.push(49)
        console.log(arraymatch)
        if (arraymatch[1] < 65) {
            console.log("error")
            boolean1 = false
            boolean2 = false
            boolean3 = false
            arraymatch = []
        }
        else {
            boolean1 = true //allows the 1. credit score to turn red
        }
    }
    if (keyCode == 50) { //two
        arraymatch.push(50)
        console.log(arraymatch)
        if (arraymatch[1] < 65) {
            console.log("error")
            boolean2 = false
            boolean1 = false
            boolean3 = false
            arraymatch = []
        }
        else {
            boolean2 = true
        }
    }
    if (keyCode == 51) { //three
        arraymatch.push(51)
        console.log(arraymatch)
        if (arraymatch[1] < 65) {
            console.log("error")
            boolean2 = false
            boolean1 = false
            boolean3 = false
            arraymatch = []

        }
        else {
            boolean3 = true
        }
    }

    if (keyCode == 65) {
        arraymatch.push(65)
        console.log(arraymatch)
        if (arraymatch[0] == 50) {
            booleanCorrect1 = true
            arraymatch = []
        }
        else {
            console.log("error")
            boolean2 = false
            boolean1 = false
            boolean3 = false
            arraymatch = []
        }
    }

    if (keyCode == 66) {
        arraymatch.push(66)
        console.log(arraymatch)
        if (arraymatch[0] == 51) {
            booleanCorrect2 = true //allows the corresponding words to turn green
            arraymatch= []
        }
        else {
            console.log("error")
            boolean2 = false
            boolean1 = false
            boolean3 = false
            arraymatch = []
        }
    }
    if (keyCode == 67) {
        arraymatch.push(67)
        console.log(arraymatch)
        if (arraymatch[0] == 49) {
            booleanCorrect3 = true
            arraymatch= []
        }
        else {
            console.log("error")
            boolean2 = false
            boolean1 = false
            boolean3 = false
            arraymatch = []
        }
    }
    
    

 }

