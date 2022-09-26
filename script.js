//Task 1: Bulb on and off
function bulbOn() {
    document.getElementById("bulb-image").src="pic_bulbon.gif";
}

function bulbOff() {
    document.getElementById("bulb-image").src="pic_bulboff.gif";
}

//Task2: Changing image

function changeImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("jack-o-lanterns")) {image.src="woman-with-pumpkin.jpg";}
    else {image.src="jack-o-lanterns.jpg";}
}

//Task 3: BMI converter
window.onload = () => {
    let button = document.querySelector("#button");
    button.addEventListener("click", calculateBMI);
}

function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid height value";

    else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid weight value";

    else {
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);

        if (bmi < 18.6) result.innerHTML = `Underweight : <span>${bmi}</span>`;

        else if (bmi >= 18.6 && bmi < 24.9) result.innerHTML = `Normal : <span>${bmi}</span>`;

        else result.innerHTML = `Overweight : <span>${bmi}</span>`;
    }
}
