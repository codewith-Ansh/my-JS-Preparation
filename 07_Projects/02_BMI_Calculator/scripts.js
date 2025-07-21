const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    
    if(height <= 0 || weight <= 0 || height == NaN || weight == NaN){
        results.innerHTML = "Enter valid input"
    }
    else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    // results.innerHTML = (weight / ((height * height) / 10000)).toFixed(2); 
    }
})