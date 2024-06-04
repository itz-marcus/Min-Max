let arrayN = document.querySelector("input")
let calculate = document.querySelector("button")
let answer = document.querySelectorAll("label")[1]

calculate.addEventListener('click',()=>{
    let numbers = arrayN.value.split(',') //turning the string to an array and removing the commas
    let min = Math.min(...numbers)  //using spread operator to set the min and max to the values of the array
    let max = Math.max(...numbers)

answer.innerText = `Result: This is the minimum value (${min}) This the the Maximum value (${max})`
})
