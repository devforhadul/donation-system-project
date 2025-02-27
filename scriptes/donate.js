
// Card 1 Donate
document.getElementById('card1Btn').addEventListener('click', function () {
    const card1Value = getInputValue('card1Amount');
    const mainBalance = getInnerText('mainBalance');



    if (card1Value < mainBalance) {
        if (card1Value > 0) {
            const sum = mainBalance - card1Value;
            document.getElementById('mainBalance').innerText = sum;
            // Cars balance update
            const card1Balance = parseFloat(getInnerText('card1Balance'));
            document.getElementById('card1Balance').innerText = card1Balance + card1Value;
            // add details in history
            const historySection = document.getElementById("historySection")
            const div = document.createElement('div');
            div.innerHTML = `
                     <div class="p-5 mb-3 border-2 border-gray-300 rounded-lg space-y-2 w-11/12 mx-auto">
                        <h5 class="font-bold">${getInputValue('card1Amount')} Taka is ${getInnerText('card1Title')}</h5>
                        <p class="text-gray-400">Date : ${new Date()}</p>
                    </div>
                `
            historySection.appendChild(div);
            // successfully donate popup
            document.getElementById('successBox').classList.remove('hidden');

        }
        else {
            alert("Enter Positive value")
        }
    }
    else {

        alert("Insufficent Balance")
    }
})

// Card 2 Donate
document.getElementById('card2Btn').addEventListener('click', function () {
    const mainBalance = getInnerText('mainBalance');
    const card2Value = getInputValue('card2Amount');

    if (card2Value < mainBalance) {
        if (card2Value > 0) {
            const sum = mainBalance - card2Value;
            document.getElementById('mainBalance').innerText = sum;

            // Cars balance update
            const card2Balance = parseFloat(getInnerText('card1Balance'));
            document.getElementById('card2Balance').innerText = card2Balance + card2Value;
            // add details in history
            const historySection = document.getElementById("historySection")
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="p-5 mb-3 border-2 border-gray-300 rounded-lg space-y-2 w-11/12 mx-auto">
               <h5 class="font-bold">${getInputValue('card2Amount')} Taka is ${getInnerText('card2Title')}</h5>
               <p class="text-gray-400">Date : ${new Date()}</p>
           </div>
       `
            historySection.appendChild(div);
            // successfully donate popup
            document.getElementById('successBox').classList.remove('hidden');
        }
        else {
            alert("Enter Positive value")
        }
    }
    else {

        alert("Insufficent Balance")
    }
})

// Card 2 Donate
document.getElementById('card3Btn').addEventListener('click', function () {
    const mainBalance = getInnerText('mainBalance');
    const card3Value = getInputValue('card3Amount');

    if (card3Value < mainBalance) {
        if (card3Value > 0) {
            const sum = mainBalance - card3Value;
            document.getElementById('mainBalance').innerText = sum;
            // Cars balance update
            const card3Balance = parseFloat(getInnerText('card3Balance'));
            document.getElementById('card3Balance').innerText = card3Balance + card3Value;

            // add details in history
            const historySection = document.getElementById("historySection")
            const div = document.createElement('div');
            div.innerHTML = `
    <div class="p-5 mb-3 border-2 border-gray-300 rounded-lg space-y-2 w-11/12 mx-auto">
       <h5 class="font-bold">${getInputValue('card3Amount')} Taka is ${getInnerText('card3Title')}</h5>
       <p class="text-gray-400">Date : ${new Date()}</p>
   </div>
`
            historySection.appendChild(div);
            // successfully donate popup
            document.getElementById('successBox').classList.remove('hidden');
        }
        else {
            alert("Enter Positive value")
        }

    }
    else {

        alert("Insufficent Balance")
    }

})

document.getElementById('closeBtn').addEventListener('click', function(){
    document.getElementById('successBox').classList.add('hidden');
})