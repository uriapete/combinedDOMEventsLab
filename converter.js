const input = document.querySelector("input");
// console.log(input);

const convertFrom = document.querySelector("#from")
// console.log(convertFrom.value);

const convertTo = document.getElementById("to")
// console.log(convertTo);

const submitButton = document.querySelector(".submit");
// console.log(submitButton);

const clearButton = document.querySelector(".clear");
// console.log(clearButton);

let degrees;

function convertTemperature() {
    // if (convertFrom.value === 'c' && convertTo==='f'){
    //     degrees=input.value*1.8+32;
    //     console.log(degrees);
    // } else if (convertFrom.value==='f'&&convertTo.value==='c') {
    //     degrees=(input.value/1.8)-32;
    //     console.log(degrees);
    // } else if(convertFrom.value === 'c' && convertTo.value === 'k') {
    //     degrees=input.value+273.15;
    //     console.log(degrees);
    // }
    let parsedInput = parseInt(input.value)
    if(convertFrom.value === 'c' && convertTo.value === 'f') {
        degrees = parsedInput * 1.8 + 32;
        // console.log(degrees);
    } else if(convertFrom.value === 'f' && convertTo.value == 'c') {
        degrees = (parsedInput - 32) / 1.8;
        // console.log(degrees);
    } else if(convertFrom.value === 'c' && convertTo.value === 'k') {
        degrees = parsedInput + 273.15;
        // console.log(degrees);
    } else if (convertFrom.value === 'f' && convertTo.value === 'k'){
        degrees=((parsedInput-32)*5/9)+273.15
    }
    console.log(degrees);
}

submitButton.addEventListener("click", convertTemperature)