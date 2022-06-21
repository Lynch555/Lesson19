'use strict';

const hello = document.getElementById('hello');
const today = document.getElementById('today');
const time = document.getElementById('time');
const newYearDate = document.getElementById('new-year');
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

const getTime = currentTime

function currentTime() {
	let midday = "AM";
	midday = (hour >= 12) ? "PM" : "AM";
	var hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();

	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);

	document.getElementById("time").innerText = "Текущее время:" + " " + hour + " : " + min + " : " + sec + " " + midday;
	let t = setTimeout(function () {
		currentTime()
	}, 1000);
}

function updateTime(k) {
	if (k < 10) {
		return "0" + k;
	} else {
		return k;
	}

}

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
getTime();
daysToNewYear()