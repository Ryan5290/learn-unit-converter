/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const testInput = 20

lengthEl.textContent = `${testInput} meters = ${convertToLength(testInput, true)} feet | ${testInput} feet = ${convertToLength(testInput, false)} meters`
volumeEl.textContent = `${testInput} `
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

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

// SetHTML


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