
// Card 1 history 
document.getElementById("historyBtn").addEventListener('click', function () {
    document.getElementById('historySection').classList.remove('hidden');
    
    document.getElementById("historyBtn").style.backgroundColor = "#b4f461";
    document.getElementById("donateBtn").classList.add('border-2', 'border-secondary', 'bg-white');



})



// transaction 
document.getElementById('donateBtn').addEventListener('click', function () {
    document.getElementById("historySection").style.display = 'none';

    document.getElementById("donateBtn").style.backgroundColor = "#b4f461";
    document.getElementById("historyBtn").style.backgroundColor = "#fff";
    

})


/* const buttons = document.querySelectorAll('.buttons');
for (let btn of buttons) {
    btn.addEventListener('click', function (event) {

        event.target.classList.add('border-2', 'border-secondary', 'bg-white');
        


    })


} */