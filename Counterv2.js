let counting = document.getElementById('counting');
let incrementer = document.getElementById('incrementer');
let decrementer = document.getElementById('decrementer');
let reset = document.getElementById('reset');

let current = parseInt(counting.textContent);

// Function to update display and color
function updateCounter() {
    counting.textContent = current;

    // Color logic
    if (current < 0) {
        counting.style.color = "red";
    } else if (current === 0) {
        counting.style.color = "orange";
    } else {
        counting.style.color = "green";
    }
}

incrementer.addEventListener('click', function(){
    current++;
    updateCounter();
});

decrementer.addEventListener('click', function(){
    if (current > 0) {
        current--;
        updateCounter();
    }
});

reset.addEventListener('click', function(){
    current = 0;
    updateCounter();
});
