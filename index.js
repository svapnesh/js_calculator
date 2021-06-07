document.onkeydown = function (e) 
{
    return false;
}
    
function buttonClick(value){
    var displayValue = document.getElementById("display").value;
    var lastValue = displayValue[displayValue.length - 1]; 
    if((lastValue == '+' || lastValue == '-' || lastValue == '/' || lastValue == '*') && (value == '+' || value == '-' || value == '/' || value == '*'))
    {
        displayValue = displayValue.replace(/.$/,value);
        document.getElementById("display").value = displayValue;
    }
    else if(value === '='){
        document.getElementById("display").value = eval(document.getElementById("display").value);
    }
    else if(value === 'c'){
        document.getElementById("display").value = '';
    }
    else{
        document.getElementById("display").value = document.getElementById("display").value + value;
    }
}
