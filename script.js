let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется");
            if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
                (a != '') && (b != '') && (a.length < 50)) {
                appData.expenses[a] = b;
            } else {
                i -= 1;
            }
        }

        // Второй способ цикла

        // do {
        //     let i = 0;
        //     let a = prompt("Введите обязательную статью расходов в этом месяце"),
        //         b = prompt("Во сколько обойдется");
        //     if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
        //         (a != '') && (b != '') && (a.length < 50)) {
        //         appData.expenses[a] = b;
        //     } else {
        //         answer();
        //     }
        //     i++;
        // } while (i < 2);

        // Третий способ цикла
        // let i = 0;
        // while (i < 2){
        // let a = prompt("Введите обязательную статью расходов в этом месяце"),
        //         b = prompt("Во сколько обойдется");
        //     if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (b) != null) &&
        //         (a != '') && (b != '') && (a.length < 50)) {
        //         appData.expenses[a] = b;
        //     } else {
        //         answer();
        //     }
        //     i++;
        // };
    },
    detectDayBudget: function () {
        appData.money = money;
        appData.timeData = time;

        appData.moneyPerDay = (appData.money / 30).toFixed();

        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накопления?");
            let percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        appData.optionalExpenses = {};
        for (let i = 0; i < 3; i++) {
            appData.optionalExpenses[i + 1] = prompt("Статья необязательных расходов?");
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет допольнительный доход (Перечислите через запятую)");
        if ((typeof (items) === 'string') && (items != "") && (items != null)) {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
            alert("Способы доп. заработка: " + appData.income.join(", "));
        } else {
            appData.chooseIncome();
        }
    }
};

for(let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
}