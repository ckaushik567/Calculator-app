const btn = document.querySelectorAll('button');
const textArea = document.querySelector('input');
const eqlBtn = document.getElementById('eqlbtn');
const restBtn = document.getElementById('restbtn');
const delBtn = document.getElementById('delbtn');
for (let i = 0; i < 16; i++) {
    btn[i].addEventListener('click', myfunc);
    btn[3].removeEventListener('click', myfunc);
};
function myfunc(e) {
    const btnValue = e.target.textContent;
    textArea.value += btnValue;
};
function restFunc(e) {
    textArea.value = "";
};

function solveFunc() {
    if (String(textArea.value).charAt((String(textArea.value)).length - 1) == '+'
        || String(textArea.value).charAt((String(textArea.value)).length - 1) == '-'
        || String(textArea.value).charAt((String(textArea.value)).length - 1) == '/'
        || String(textArea.value).charAt((String(textArea.value)).length - 1) == 'x') {
        alert("Invalid Input!");
    }
    else {
            textArea.value = String(textArea.value).replace("x","*");
            textArea.value = eval(String(textArea.value));
    }
};
function delFunc(e) {
    textArea.value = textArea.value.toString().split('').slice(0, -1).join('');
};
eqlBtn.addEventListener('click', solveFunc);
restBtn.addEventListener('click', restFunc);
delBtn.addEventListener('click', delFunc);

