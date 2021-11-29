"use strict"
let calcNum;
let flag = false;
let powFlag = false;

function addToCalculator(value) {
    if (flag) {
        $("#showCalc").html(calcNum);
        let newVal = +value;
        if (!isNaN(newVal)) {
            $("#showCalc").html("");
            $("#displayResult").val("");
        }
        flag = false;
    }
    $("#displayResult").val(function (index, curr) {
        $("#showCalc").append(`${value}`);
        return curr += value
    })
    if (powFlag) {
        flag = true;
        let numbers = document.getElementById('displayResult').value.split('^');
        document.getElementById('displayResult').value = Math.pow(numbers[0], numbers[1]);
        powFlag = false;
        // $("#showCalc").append(`=`);
    }
}

function finalResult() {
    $("#displayResult").val(function (index, curr) {
        $("#showCalc").html(`${curr}`);
        return calcNum = eval(curr)
    })
    flag = true;
}

function clearDisplay() {
    $("#showCalc").html("");
    $("#displayResult").val("")
}

function mathCalc(mathFunc) {

    if (mathFunc === "pow") {
        flag = false;
        powFlag = true;
        $("#displayResult").val(function (index, curr) {
            $("#showCalc").append("^");
            return curr += "^"
        })
    } else {
        $("#displayResult").val(function (index, curr) {
            $("#showCalc").html(Math[mathFunc](curr));
            return Math[mathFunc](curr)
        });
        flag = true;
    }

}
