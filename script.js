const transactionUL = document.querySelector('#transactions');

const dummyTransactions = [
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},
    {id: 2, name: 'Salario', amount: 300},
    {id: 3, name: 'Torta de frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
];

const addTransactionIntoDOM = transaction => {

    const operator = transaction.amount < 0 ? '-' : '+';
    const CSSCalss = transaction.amount < 0 ? 'minus' : 'plus';
    const amountWithoutOperator = Math.abs(transaction.amount);
    const li = document.createElement('li');
    li.classList.add(CSSCalss);
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

    const expense = transactionsAmounts
        .filter((value) => value < 0)
        .reduce((accumulator, number) => accumulator + number, 0)
        .toFixed(2);

};

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM);
};


init();
