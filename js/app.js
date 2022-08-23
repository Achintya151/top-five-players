// selection part 
const selectArray = [];

function display(selectPlayer) {
    if (selectArray.length < 6) {
        const tableBody = document.getElementById('player-list');
        tableBody.innerHTML = "";

        for (let i = 0; i < selectPlayer.length; i++) {

            const name = selectArray[i];

            const tr = document.createElement('tr');
            tr.innerHTML = `<th>${i + 1}</th>
        <td>${name}</td>`;
            tableBody.appendChild(tr);
        }
    }
    else {
        alert("You can select only 5 players");
        return alert;
    }


};

function addToSelected(element) {

    element.disabled = true;

    const playerName = element.parentNode.children[0].innerText;

    selectArray.push(playerName);
    document.getElementById('total-selected').innerText = selectArray.length;
    display(selectArray);
};
// budget part 
function inputFieldValues(element) {
    const saleryField = document.getElementById(element);
    const newSaleryString = saleryField.value;
    const newSalery = parseInt(newSaleryString);
    saleryField.value = '';
    return newSalery;

};

document.getElementById('btn-calculate').addEventListener('click', function () {

    const newPerPlayerAmount = inputFieldValues('input-field-per-player');

    const playerExpenseTotalElement = document.getElementById('player-expenses');

    const newPlayerExpenseTotal = newPerPlayerAmount * 5;
    playerExpenseTotalElement.innerText = newPlayerExpenseTotal;
});



document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const newManagerSalery = inputFieldValues('input-field-manager');

    const newCoachSalery = inputFieldValues('input-field-coach');

    const playerExpenseTotalElement = document.getElementById('player-expenses');
    const previousPlayerExpenseTotalString = playerExpenseTotalElement.innerText;
    const newPlayerExpense = parseInt(previousPlayerExpenseTotalString);
    const total = document.getElementById('total');
    const newTotal = newPlayerExpense + newManagerSalery + newCoachSalery;
    total.innerText = newTotal;
});