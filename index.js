function saturdayFun(str="roller-skate") {
    return `This Saturday, I want to ${str}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(str="special") {
        return `You are ${flair}${str}${flair}!`
    }
}

let Calculator = {

    add() {
        return 1 + 3
    },

    subtract() {
        return 1 - 3
    },

    multiply() {
        return 1 * 3
    },

    divide() {
        return 10 / 5
    }
}

function actionApplyer(int, array) {
    if (array === []) {
        return int
    }
    else {
        for (let i = 0; i < array.length; i++) {
            int = array[i](int)
        }
        return int
    }
}