document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerField = document.getElementById('input-field-per-player');
    const newPerPlayerAmountString = perPlayerField.value;
    const newPerPlayerAmount = parseInt(newPerPlayerAmountString);

    perPlayerField.value = '';

    const playerExpenseTotalElement = document.getElementById('player-expenses');
    const previousPlayerExpenseTotalString = playerExpenseTotalElement.innerText;
    const previousPlayerExpenseTotal = parseInt(previousPlayerExpenseTotalString);

    const newPlayerExpenseTotal = newPerPlayerAmount * 5;
    playerExpenseTotalElement.innerText = newPlayerExpenseTotal;
})