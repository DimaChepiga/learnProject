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
        tabs[item].classList.add('tabheader__item_active')
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


});