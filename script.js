function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    var result = document.getElementById('result').value;
    try {
        var answer = eval(result);
        document.getElementById('result').value = answer;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
