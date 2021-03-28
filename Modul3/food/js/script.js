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
            if (this.classes.length === 0) {
                this.classes = ['menu__item'];
            }

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


    const getResource = async (url) => {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url} Status: ${res.status}`);

        }

        return await res.json();
    };

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new MenuCard(img, altimg, title, descr, price, '.menu .container', 'menu__item').render();
            });
        });



    // Send Contacts me Forms 

    const forms = document.querySelectorAll('form');
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    forms.forEach(item => { //? Навешиваем события на формы отправки контактов
        // postDataNotJSON(item); //? FormData
        // postDataJSON(item); //? FormData to JSON
        bindPostDataJSON(item); //? FormData to JSON with JSON Server
    });

    function postDataNotJSON(form) {
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

            const formData = new FormData(form);

            fetch('server.php', {
                method: "POST",
 /*                headers: {
                    'Content-type': 'aplication/json'
                }, */
                body: formData 
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
                statusMessage.remove();
            });



/*             request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);
                } else {
                    statusMessage.textContent = message.failure;
                }
            });

 */
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

            const formData = new FormData(form);

           //? переводим FormData в объект для передачи в JSON напрямую не принимает
           const object = {};
           formData.forEach((value, key) => {
               object[key] = value;
           });


            fetch('serverjson.php', {
                method: "POST",
                headers: {
                    'Content-type': 'aplication/json'
                },
                body: JSON.stringify(object) 
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
                statusMessage.remove();
            });

 


/*             request.send(JSON.stringify(object));

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
 */

        });

    }

    // Работаем с JSON SERVER

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: data
        });

        return await res.json();
    };


    function bindPostDataJSON(form) {
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

            const formData = new FormData(form);

/*            //? переводим FormData в объект для передачи в JSON напрямую не принимает
           let object = {};
           formData.forEach((value, key) => {
               object[key] = value;
           });
 */
           //? Современный способ перевести FormData в object -> JSON

           const json = JSON.stringify(Object.fromEntries(formData.entries()));

            // postData('http://localhost:3000/requests', JSON.stringify(object)) //?старый способ
            postData('http://localhost:3000/requests', json) //? новый способ
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
                statusMessage.remove();
            });
        });

    }



    // modal window for message contacts me

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');

        modalShow();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class='modal__content'>
                <div data-modal='close' class="modal__close">&times;</div>
                <div class='modal__title'>${message}</div>
            </div>
        
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            modalHide();
        }, 4000);
    }


    /*     fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json));
     */

/*     fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify({
                name: 'Alex'
            }),
            headers: {
                'Content-type': 'Aplication/json'
            }
        })

        .then(response => response.json())
        .then(json => console.log(json));
 */
/*     fetch(' http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));
 */

    // sliders

    const slides       = document.querySelectorAll('.offer__slide'),
          prev         = document.querySelector('.offer__slider-prev'),
          next         = document.querySelector('.offer__slider-next'),
          current      = document.querySelector('#current'),
          total        = document.querySelector('#total'),
          slideWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField  = document.querySelector('.offer__slider-inner'),
          width        = window.getComputedStyle(slideWrapper).width;


    
//TODO Slider var.2

    let slideIndex = 1;  //TODO Slider variant 1
    let offset = 0;

    total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;
    current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;



    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slideWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });
    
    next.addEventListener('click', () => {
        
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)){
            offset = 0;
            slideIndex = 1;
        } else {
            offset += +width.slice(0, width.length - 2);
            ++slideIndex;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
    });

    prev.addEventListener('click', () => {
        
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            slideIndex = slides.length;
        } else {
            offset -= +width.slice(0, width.length - 2);
            --slideIndex;
        }
        slidesField.style.transform = `translateX(-${offset}px)`;
        current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;
    });


/*     let slideIndex = 1;  //TODO Slider variant 1

    showSlides(0);
    total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;


    function showSlides(n) {
        slideIndex += n;

        if (slideIndex > slides.length){
            slideIndex = 1;
        } else if (slideIndex < 1){
            slideIndex = slides.length;
        }

        current.textContent = slideIndex < 10 ? `0${slideIndex}` : slideIndex;

        slides.forEach((item, index) => {
            if (index + 1 !== slideIndex) {
                item.classList.add('hide');
            } else {
                item.classList.remove('hide');
            }

        });
    }

    prev.addEventListener('click', () => {
        showSlides(-1);
    });

    next.addEventListener('click', () => {
        showSlides(1);
    });
 */


});