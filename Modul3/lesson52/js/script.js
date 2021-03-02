'use strict';

const inputRub = document.querySelector('#rub'),
      inputUSD = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass); 
    //? method get/post, url, async true/false, login, pass
    request.open('GET', 'js/current.json'); 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    /*
        status
        statusText
        response
        readyState
    */

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const reqResp = JSON.parse(request.response);
            console.log(reqResp.current.usd);
            inputUSD.value = (inputRub.value / reqResp.current.usd).toFixed(3);
        } else {
            inputUSD.value = "Нет ответа сервера";
        }


    });
});


inputUSD.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass); 
    //? method get/post, url, async true/false, login, pass
    request.open('GET', 'js/current.json'); 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    /*
        status
        statusText
        response
        readyState
    */

    request.addEventListener('load', () => { //load is easy method
        if (request.status === 200) {
            console.log(request.response);
            const reqResp = JSON.parse(request.response);
            console.log(reqResp.current.usd);
            inputRub.value = (inputUSD.value * reqResp.current.usd).toFixed(3);
        } else {
            inputRub.value = "Нет ответа сервера";
        }


    });
});