
function getInputValue(id){
    const value = document.getElementById(id).value;
    const convetValue = parseFloat(value);
    return convetValue;
}

function getInnerText(id){
    const a = document.getElementById(id).innerText;
    return a;
}