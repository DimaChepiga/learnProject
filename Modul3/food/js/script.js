"use strict";
window.addEventListener('DOMContentLoaded', () => {
    // Tab Navigation

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    //Инициализация табов на странице
    hideTabContent();
    showTabContent();
    //Инициализация табов на странице


    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(item = 0) {
        tabsContent[item].classList.add('show', 'fade');
        tabsContent[item].classList.remove('hide');
        tabs[item].classList.add('tabheader__item_active');
    }


    tabsParent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (event.target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });


    // End Tab Navigation

    // Begin Timer

    const dateOfBirthDay = new Date('2021-05-31');

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60);


        return {
            'total': t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            initTimer = setInterval(updateTimer, 1000);

        updateTimer();

        function updateTimer() {
            const t = getTimeRemaining(endTime);

            if (t.total <= 0) {
                clearInterval(initTimer);
            } else {
                /*                 days.textContent = t.days < 10 ? '0' + t.days : t.days;
                                hours.textContent = t.hours < 10 ? '0' + t.hours : t.hours;
                                minutes.textContent = t.minutes < 10 ? '0' + t.minutes : t.minutes;
                                seconds.textContent = t.seconds < 10 ? '0' + t.seconds : t.seconds;
                 */
                days.textContent = getZero(t.days);
                hours.textContent = getZero(t.hours);
                minutes.textContent = getZero(t.minutes);
                seconds.textContent = getZero(t.seconds);
            }
        }
    }

    function getZero(num) {
        return num < 10 ? `0${num}` : `${num}`;
    }


    setClock('.timer', dateOfBirthDay);

    // End Timer

    /*     timerDays.textContent = +timerDays.textContent + 1;

        console.log(`${timerDays.textContent}  
            ${timerHours.textContent}  
            ${timerMinutes.textContent} 
            ${timerSeconds.textContent}`);
        console.log(dateOfEnd - dateNow);

        let timeOfEnd = dateOfEnd - dateNow;
        let testDate = new Date(timeOfEnd);

        timerDays.textContent = Math.round(testDate.getTime() / (1000 * 60 * 60 * 24));
        timerHours.textContent = Math.round((testDate.getTime() / (1000 * 60 * 60 )) % 24);
        timerMinutes.textContent = Math.round((testDate.getTime() / (1000 * 60 )) % 60);
        timerSeconds.textContent = Math.round((testDate.getTime() / 1000) % 60);

        console.log(testDate.getTime());

          

     */


    // Modal Window begin

    const modalW = document.querySelector('.modal');


    // modalW.style.display = 'block';

    function modalShow() {
        modalW.classList.add('show');
        modalW.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearTimeout(showWinTimeout);
    }

    function modalHide() {
        modalW.classList.remove('show');
        modalW.classList.add('hide');
        document.body.style.overflow = '';
    }

    document.addEventListener('keydown', (e) => {
        if ((modalW.classList.contains('show') && e.code == 'Escape')) {
            modalHide();
        }
    });

    document.addEventListener('click', (e) => {
        let m = e.target.dataset.modal; //TODO можно попробовать оптимизировать код убрав переменную m
        if (m == 'linkAs') {
            modalShow(); 
            // modalW.style.display = 'block'; // мой ваиант без классов
        } else if (m == 'close') {
            modalHide();
            // modalW.style.display = 'none';  // мой вариант без классов
        }
    });

    // Show Modal Window SetTimeout

    const showWinTimeout = setTimeout(modalShow, 50000);
    // clearTimeout(showWinTimeout); //! Don't fogget remove this
 

    // Show Modal Window if scroll page is down
    function showModalScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            modalShow();
            window.removeEventListener('scroll', showModalScroll);
        }
    }

    window.addEventListener('scroll', showModalScroll);



    // window.addEventListener('click', () => {
    //     // callback function body
    // }, {once: true});  //? Дополнительные опции в листенерах, once: true разовый вызов, см доки
    // Modal Window end


    //? Classes lesson 48 Use class for menu card

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {this.classes = ['menu__item'];}

            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);

        }

    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item'

    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container',
        'menu__item'
    ).render();


    // Send Contacts me Forms 

    const forms = document.querySelectorAll('form');
    const message = {
            loading: 'img/form/spinner.svg',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так'
    };

    forms.forEach(item => {//? Навешиваем события на формы отправки контактов
        // postData(item); //? FormData
        postDataJSON(item); //? FormData to JSON
    });


    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();

            request.open('POST', 'server.php');
            //! request.setRequestHeader('Content-type', 'multipart/form-data'); НЕ НАДО ЭТОГО ДЕЛАТЬ!!!

            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => { statusMessage.remove();}, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });


        });
        
    }


    function postDataJSON(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage); //? Добавляем в саму форму сообщение
            form.insertAdjacentElement('afterend', statusMessage); //? Добавляем спинер после формы, в нижней форме

            const request = new XMLHttpRequest();

            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'aplication/json');
            
            const formData = new FormData(form);

            //? переводим FormData в объект для передачи в JSON напрямую не принимает
            const object = {};
            formData.forEach((value, key) => {
                object[key] = value;
            });

            request.send(JSON.stringify(object));

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    showThanksModal(message.success);
                    form.reset();
                    statusMessage.remove();
                    // setTimeout(() => { statusMessage.remove();}, 2000);
                } else {
                    showThanksModal(message.failure);
                }
            });


        });
        
    }


    // modal window for message contacts me

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');

        modalShow(); 

        const thanksModal =document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div data-modal='close' class="modal__close">&times;</div>
                <div class='modal__title'>${message}</div>
            </div>
        
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout( () => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            modalHide();
        }, 4000);
    }

});

