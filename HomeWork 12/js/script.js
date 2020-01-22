let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', function() {

    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type',
        'application/json; charset=utf-8');
    request.send();

    let data = JSON.parse(request.response);

    function currency(data) {
        return new Promise(function (resolve, reject) {
            request.onreadystatechange = function() {
                if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            };
        });
    }

    currency(data)
        .then(()=> inputUsd.value = inputRub.value / data.usd)
        .catch(()=> inputUsd.value = "Что-то пошло не так!");
});