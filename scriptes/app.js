
document.getElementById("historyBTn").addEventListener('click', function () {
    document.getElementById("historyBTn").style.backgroundColor = "#b4f461";
    document.getElementById("donateBTn").classList.add('border-2', 'border-secondary', 'bg-white');

    // History show
    const historySection = document.getElementById("historySection")
    const div = document.createElement('div');
    div.innerHTML = `
         <div class="p-5 mb-3 border-2 border-gray-300 rounded-lg space-y-2 w-11/12 mx-auto">
            <h5 class="font-bold">${getInputValue('card1Amount')} Taka is ${getInnerText('card1Title')}</h5>
            <p class="text-gray-400">Date : ${new Date()}</p>
        </div>
    `
    historySection.appendChild(div);



})

document.getElementById('donateBTn').addEventListener('click', function(){
    document.getElementById("donateBTn").style.backgroundColor = "#b4f461";
    document.getElementById("historySection").style.display = 'none';
    document.getElementById("historyBTn").style.backgroundColor = 'white'
})