let inputArea = document.getElementById('calculation');
     
const Calc = (x) => {
     
    let value = x.innerHTML;
     
    if (value == '=') {
        inputArea.innerHTML = eval(inputArea.innerHTML);

    } else if (value == 'AC') {
        inputArea.innerHTML = '0';
         
    } else {
        if (inputArea.innerHTML == '0') {
            inputArea.innerHTML = value;
             
        } else {
            inputArea.innerHTML += value;   
        }
    }
}
