var inputValues = document.querySelectorAll(".calcpoint")
var outputValue = document.getElementById("result")
var clearButton = document.getElementById("clearBtn")
var calcValue = document.getElementById("calculateResult")

clearButton.addEventListener("click", () => {
    clearButton.textContent = ""
})
inputValues.forEach(ele => {
    ele.addEventListener("click", event => {
        let tempVal = event.target.textContent
        outputValue.value += tempVal.toString()               // input box
        // outputValue.textContent += tempVal.toString()      // table-td
        // outputValue.innerText+=tempVal.toString();         // table-td
    })
})

calcValue.addEventListener("click", () => {
    outputValue.value = eval(outputValue.value)
    // outputValue.textContent = eval(outputValue.textContent)
    // outputValue.innerText = eval(outputValue.innerText)
})

