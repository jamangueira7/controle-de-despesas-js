const transactionUL = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');

const dummyTransactions = [
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},
    {id: 2, name: 'Salario', amount: 300},
    {id: 3, name: 'Torta de frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
];

const addTransactionIntoDOM = transaction => {

    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus';
    const amountWithoutOperator = Math.abs(transaction.amount);
    const li = document.createElement('li');
    li.classList.add(CSSClass);
    li.innerHTML = `
        ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
    `;

    transactionUL.append(li);
};

const updateBalanceValues = () => {
    const transactionsAmounts = dummyTransactions
        .map(transaction => transaction.amount);

    const total = transactionsAmounts
        .reduce((accumulator, number) => accumulator + number, 0)
        .toFixed(2);

    const income = transactionsAmounts
        .filter((value) => value > 0)
        .reduce((accumulator, number) => accumulator + number, 0)
        .toFixed(2);

    const expense = Math.abs(transactionsAmounts
        .filter((value) => value < 0)
        .reduce((accumulator, number) => accumulator + number, 0))
        .toFixed(2);

    balanceDisplay.textContent = `R$ ${total}`;
    incomeDisplay.textContent = `R$ ${income}`;
    expenseDisplay.textContent = `R$ ${expense}`;
};

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM);
    updateBalanceValues();
};


init();
