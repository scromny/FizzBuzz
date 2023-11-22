var elForm = document.querySelector(".form")
var elFormInput = document.querySelector(".input")
var elFormText = document.querySelector(".text")

function FizzBuzz(num = 0) {
    var Text = ''

    if(num % 3 === 0 && num % 5 === 0) {
        Text = "FizzBuzz"
    }else if (num % 3 === 0){
        Text = "Fizz"
    }else if (num % 5 === 0){
        Text = "Buzz"
    }else {
        Text = num;
    }

    return Text
}

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    var input = Number(elFormInput.value.trim())

    elFormText.textContent = `${FizzBuzz(input)}`
})