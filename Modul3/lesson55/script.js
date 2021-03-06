'use strict';

console.log('Data request...');

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Data preparation...');
    
        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);

    }, 2000);})
    .then((product) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                product.status = 'order';
                // reject();
                resolve(product); //? не исполнится
            }, 2000);        
        });})

    .then(data => {
        data.modify = true;
        return data;
    })
    .then(data => {
        console.log(data);
    }).catch(() => {
        console.error('error');

    }).finally(() => {
        console.log('finally');
    });

/* req.then((product) => {
    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);

    // console.log('Data received!');
}); */


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(2000).then(() => console.log('2000 ms'));
// test(3000).then(() => console.log('3000 ms'));

Promise.all([test(2000), test(3000)]).then(() => { //Ожидаем выполнение всех промисов, потом результат
    console.log('all complete');
});

Promise.race([test(2000), test(3000)]).then(() => { //первый отработавший дает результат
    console.log('first complete');
});


