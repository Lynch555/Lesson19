const hello = document.getElementById('hello')
const today = document.getElementById('today')
const newYearDate = document.getElementById('new-year')

let date = new Date();

const sayHello = function () {
    const hours = date.getHours();

    if (hours < 6) {
        hello.textContent = 'Доброй ночи'
    } else if (hours > 5 && hours < 12) {
        hello.textContent = 'Доброе утро'
    } else if (hours > 11 && hours < 18) {
        hello.textContent = 'Добрый день'
    } else if (hours > 17) {
        hello.textContent = 'Добрый вечер'
    }
}

const getToday = function () {
    const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let index = date.getDay();
    today.textContent = `Сегодня: ${week[index]}`
}
	
setInterval(function () {  
	date = new Date()  
	hours = date.getHours(),  
	minutes = date.getMinutes(), 
	seconds= date.getSeconds(),  
	midday = 'AM';

    if (hours >= 12) {
        midday = 'PM'
    }

    if (hours == 0) {
        hours = 12
    } else if (hours > 12) {
        hours = hours - 12
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }  
	time.textContent = `Текущее время: ${hours}:${minutes}:${seconds} ${midday}`   
	
},);  

const daysToNewYear = function () {
    let dateStop = new Date('1 januar 2023').getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    if ((days % 10 == 1) && (days != 11)) {
        newYearDate.textContent = `До нового года осталось ${days} день`
    } else if (((days % 10 == 2) && (days != 12)) || ((days % 10 == 3) && (days != 13)) || ((days % 10 == 4) && (days != 14))) {
        newYearDate.textContent = `До нового года осталось ${days} дня`
    } else {
        newYearDate.textContent = `До нового года осталось ${days} дней`
    }
}

sayHello();
getToday();
daysToNewYear();