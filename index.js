/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const converBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

converBtn.addEventListener("click", function() {
    const inputNum = Number(inputEl.value)

    if (inputNum) {
        lengthEl.textContent = `${inputNum} meters = ${convertToLength(inputNum, true)} feet | ${inputNum} feet = ${convertToLength(inputNum, false)} meters`
        volumeEl.textContent = `${inputNum} liters = ${convertToVolume(inputNum, true)} gallons | ${inputNum} gallons = ${convertToVolume(inputNum, false)} liters`
        massEl.textContent = `${inputNum} kilos = ${convertToMass(inputNum, true)} pounds | ${inputNum} pounds = ${convertToMass(inputNum, false)} kilos`
    } else {
        inputEl.value = ""
    }
})



// Conversions
function convertToLength(input, isMeter) {
    if (isMeter) {
        return (input * 3.281).toFixed(3) // returns feet
    } else {
        return (input / 3.281).toFixed(3) // returns meters
    }
}

function convertToVolume(input, isLiter) {
    if (isLiter) {
        return (input * 0.264).toFixed(3) // returns liters
    } else {
        return (input / 0.264).toFixed(3) // returns gallons
    }
}

function convertToMass(input, isKg) {
    if (isKg) {
        return (input * 2.204).toFixed(3) // returns punds
    } else {
        return (input / 2.204).toFixed(3) // returns kg
    }
}


// Tests
// Length tests
// let lengthTestM = convertToLength(20, true)
// let lengthTestF = convertToLength(20, false)
// console.log(lengthTestM)
// console.log(lengthTestF)

// Volume Tests
// let volTestL = convertToVolume(20, true)
// let volTestG = convertToVolume(20, false)
// console.log(volTestL)
// console.log(volTestG)

// Mass Tests
// let massTestKg = convertToMass(20, true)
// let massTestP = convertToMass(20, false)
// console.log(massTestKg)
// console.log(massTestP)