function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('got 3 disit so calling again', pin)
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;

}
document.getElementById('cal-keypad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('takeInput');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previusNumber = calcInput.value;
        const newNumber = previusNumber + number;
        calcInput.value = newNumber;
    }
 });

function verifyPin(){
    // console.log('clicked submit')
    const pinNumber= document.getElementById('display-pin').value;
    const typedNumber= document.getElementById('takeInput').value;
    const successMessage=document.getElementById('pin-success');
    const failError=document.getElementById('pin-failed');
    if(pinNumber ==typedNumber){
        failError.style.display='none';
        successMessage.style.display='block';
    }
    else{
        successMessage.style.display='none';
        failError.style.display='block';
    }

};
