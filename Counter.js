let counting = document.getElementById('counting');
let incrementer = document.getElementById('incrementer');
let decrementer = document.getElementById('decrementer');
let reset = document.getElementById('reset');

let current = parseInt(counting.textContent);

incrementer.addEventListener('click', function(){
    current++;
    counting.textContent = current;
});

decrementer.addEventListener('click', function(){
    if (current>0) {
        current--;
    }
    counting.textContent = current;
});

reset.addEventListener('click', function(){
    current=0;
    counting.textContent = current;
});