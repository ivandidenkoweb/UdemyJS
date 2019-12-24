let startBtn = document.querySelector('#start'),
    resultTable = document.querySelector('.result-table'),
    values = resultTable.querySelectorAll('[class$="-value"]'),
    expensesItems = document.querySelectorAll('.expenses-item'),
    btns = document.getElementsByTagName('button'),
    expensesItemBtn = btns[0],
    optionalexpensesBtn = btns[1],
    countBudgetBtn = btns[2],
    optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checksaving = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

expensesItemBtn.disabled = 'disabled';
expensesItemBtn.style.cursor = 'default';
optionalexpensesBtn.disabled = 'disabled';
optionalexpensesBtn.style.cursor = 'default';
countBudgetBtn.disabled = 'disabled';
countBudgetBtn.style.cursor = 'default';

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    appData.budget = money;
    appData.timeData = time;
    values[0].textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesItemBtn.disabled = '';
    expensesItemBtn.style.cursor = 'pointer';
    optionalexpensesBtn.disabled = '';
    optionalexpensesBtn.style.cursor = 'pointer';
    countBudgetBtn.disabled = '';
    countBudgetBtn.style.cursor = 'pointer';
});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let a = expensesItems[i].value,
            b = expensesItems[++i].value;
        if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
            (a != '') && (b != '') && (a.length < 50)) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i -= 1;
        }
    }

    values[3].textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesItems.length; i++) {
        appData.optionalExpenses[i] = optionalexpensesItems[i].value;
        values[4].textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        if (values[3].textContent != undefined) {
            appData.moneyPerDay = ((appData.budget - +values[3].textContent) / 30).toFixed();
            values[1].textContent = appData.moneyPerDay;
        } else {
            appData.moneyPerDay = ((appData.budget) / 30).toFixed();
            values[1].textContent = appData.moneyPerDay;
        }

        if (appData.moneyPerDay < 100) {
            values[2].textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            values[2].textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            values[2].textContent = "Высокий уровень достатка";
        } else {
            values[2].textContent = "Произошла ошибка";
        }
    } else {
        values[1].textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    values[5].textContent = appData.income;
});

checksaving.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

chooseSum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        values[6].textContent = appData.monthIncome.toFixed(1);
        values[7].textContent = appData.yearIncome.toFixed(1);
    }
});

choosePercent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        values[6].textContent = appData.monthIncome.toFixed(1);
        values[7].textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};