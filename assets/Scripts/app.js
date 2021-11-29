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

let flagMode = true;
$("#mode_btn").click(function () {

    if (flagMode) {
        flagMode = false;
        $(this).animate({
            left: "55%"
        })
        document.documentElement.style.setProperty('--calc-dark-background', 'rgba(22,22,22,0.92)');
        document.documentElement.style.setProperty('--calc-dark-btn-color', '#D8E9A8');
        document.documentElement.style.setProperty('--calc-display-color', '#D8E9A8');
        document.documentElement.style.setProperty('--mode-btn', 'rgba(22,22,22)');
        document.documentElement.style.setProperty('--mode-btn-background', '#f0f2f8');
    } else {
        flagMode = true;
        $(this).animate({
            left: "-5%"
        })
        document.documentElement.style.setProperty('--calc-dark-background', '#f0f2f8');
        document.documentElement.style.setProperty('--calc-dark-btn-color', 'linear-gradient(120deg, hsla(220, 13%, 87%, 0.9) 0%, hsla(220, 5%, 37%, 1) 100%)');
        document.documentElement.style.setProperty('--calc-display-color', 'rgba(22,22,22,0.92)');
        document.documentElement.style.setProperty('--mode-btn', '#f0f2f8');
        document.documentElement.style.setProperty('--mode-btn-background', 'rgba(22,22,22,0.92)');
    }
})