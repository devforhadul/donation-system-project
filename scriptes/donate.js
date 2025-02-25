
document.getElementById('card1Btn').addEventListener('click', function () {
    const card1Value = getInputValue('card1Amount');
    const mainBalance = parseFloat(document.getElementById('mainBalance').innerText);
    
    const sum = mainBalance - card1Value;
    document.getElementById('mainBalance').innerText = sum;


    
    
})