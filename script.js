let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = prompt("Во сколько обойдется");

let expenses = {};

expenses[answer1] = answer2;

let appData = {
    money: money,
    timeData: time,
    expenses: expenses,
    optionalExpenses: undefined,
    income: undefined,
    savings: false
};

alert(Number(appData.money) / 30);