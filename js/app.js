function inputFieldValues(element) {
    const saleryField = document.getElementById(element);
    const newSaleryString = saleryField.value;
    const newSalery = parseInt(newSaleryString);
    saleryField.value = '';
    return newSalery;

}
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
})