function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(activity = "go to the office") {
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective(flair = "*") {
    return function(x = "special") {
        return `You are ${flair}${x}${flair}!`
    }
}

let Calculator = {add: add, subtract: subtract, multiply: multiply, divide: divide}

function add(num1, num2) {
    return (num1 + num2)
}

function subtract(num1, num2) {
    return (num1 - num2)
}

function multiply(num1, num2) {
    return (num1 * num2)
}

function divide(num1, num2) {
    return (num1 / num2)
}

function actionApplyer(index, array) {
    if (array.length === 0) {
        return index
    } else {
        for (const x of array) {
            index = x(index)
        }
        return index
    }

}