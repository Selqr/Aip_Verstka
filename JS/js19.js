let currentDate = new Date();
let today = currentDate.getDate();
console.log(today); 

let now = new Date();
let currentMonth = now.getMonth();
console.log(currentMonth); 
let monthNumber = currentMonth + 1;
console.log(`Месяц: ${monthNumber}`); 

let dateObj = new Date();
let currentYear = dateObj.getFullYear();
console.log(currentYear); 

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

let date = new Date();

let hours = date.getHours();
let ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; 

let minutes = addZero(date.getMinutes());
let seconds = addZero(date.getSeconds());

let inputDate = '2025-12-31';
let partsArray = inputDate.split('-');

let resultDate = partsArray[2] + '.' + partsArray[1] + '.' + partsArray[0];

console.log(resultDate); 

let currentDay = new Date();
let dayOfWeekNum = currentDay.getDay();

console.log("Номер дня недели: " + dayOfWeekNum);

let todayDate = new Date();
let weekdayIndex = todayDate.getDay();

if (weekdayIndex === 0 || weekdayIndex === 6) {
    console.log("Сегодня выходной день");
} else {
    console.log("Сегодня рабочий день");
}

let monthNames = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

let dateInfo = new Date();
let dayNum = dateInfo.getDate();
let monthIndex = dateInfo.getMonth();
let yearValue = dateInfo.getFullYear();

let monthText = monthNames[monthIndex];
console.log("Сегодня: " + dayNum + " " + monthText + " " + yearValue + " года");

let birthdayDate = new Date(2000, 4, 15); 
let weekdayNum = birthdayDate.getDay(); 
let weekdaysArr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
let weekdayName = weekdaysArr[weekdayNum];
console.log("Мой день рождения был в " + weekdayName);

let firstJan2025 = new Date(2025, 0, 1); 
let timestampValue = firstJan2025.getTime();

console.log(timestampValue);

let startDate = new Date(1988, 2, 1);  
let endDate = new Date(2000, 0, 10);    
let startTimestamp = startDate.getTime();
let endTimestamp = endDate.getTime()
let timeDifference = endTimestamp - startTimestamp;
let daysBetween = timeDifference / (1000 * 60 * 60 * 24);
console.log("Количество дней между датами: " + Math.floor(daysBetween) + " дней");

let firstDate = new Date(2000, 8, 1);     
let secondDate = new Date(2010, 1, 15);  
let millisecondsBetween = secondDate - firstDate;
console.log("Разница в миллисекундах: " + millisecondsBetween);

let dateStart = new Date(2000, 8, 1);
let dateEnd = new Date(2010, 1, 15);
let differenceInMs = dateEnd - dateStart;
let daysBetweeny = differenceInMs / (1000 * 60 * 60 * 24);
console.log("Разница в днях: " + Math.floor(daysBetweeny) + " дней");

let testDate1 = new Date(2018, 1, 35);
console.log(testDate1); 

let testDate2 = new Date(2018, 15, 1);
console.log(testDate2);

let testDate3 = new Date(2018, 3, 31);
console.log(testDate3);

let testDate4 = new Date(2018, 1, 31);
console.log(testDate4);

function getLastDayOfMonth(yearValue, monthIndex) {
    let lastDayDate = new Date(yearValue, monthIndex + 1, 0);
    return lastDayDate.getDate();
}
console.log("Последний день января 2023: " + getLastDayOfMonth(2023, 0)); 

function isLeap(checkYear) {
    let febLastDay = new Date(checkYear, 2, 0);
    return febLastDay.getDate() === 29;
}

function checkDate(yearValue, monthValue, dayValue) {
    let dateObject = new Date(yearValue, monthValue, dayValue);
    let yearMatches = dateObject.getFullYear() === yearValue;
    let monthMatches = dateObject.getMonth() === monthValue;
    let dayMatches = dateObject.getDate() === dayValue;
    return yearMatches && monthMatches && dayMatches;
}

let todays = new Date();
let year = todays.getFullYear();
let lastDayOfYear = new Date(year, 11, 31);
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log("31.12." + year + " - " + days[lastDayOfYear.getDay()]);

let nowTime = new Date();
let previousMonth = new Date(nowTime.getFullYear(), nowTime.getMonth() - 1, 1);
console.log("Текущий месяц: " + nowTime.getMonth());
console.log("Месяц назад: " + previousMonth.getMonth());
console.log("Дата: " + previousMonth.toLocaleDateString());

let todayses = new Date();
let nextYear = todayses.getFullYear() + 1;
let nextYearDec31 = new Date(nextYear, 11, 31);
let weekdayNume = nextYearDec31.getDay();
let weekdayNames = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
console.log("31 декабря " + nextYear + " года будет " + weekdayNames[weekdayNume]);

let nowObj = new Date();
let oneYearAgo = new Date(nowObj.getFullYear() - 1, nowObj.getMonth(), nowObj.getDate());
let pastWeekdayNum = oneYearAgo.getDay();
let dayList = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'сббота'];
console.log("Год назад (" + oneYearAgo.toLocaleDateString() + ") был(а) " + dayList[pastWeekdayNum]);

let currentYeares = new Date().getFullYear();
let januaryFirst = new Date(currentYeares, 0, 1);    
let septemberTenth = new Date(currentYeares, 8, 10);
let timeDifferenceMs = septemberTenth - januaryFirst;
let daysBetweenes = timeDifferenceMs / (1000 * 60 * 60 * 24);
console.log("Между 1 января и 10 сентября " + currentYear + " года: " + Math.floor(daysBetweenes) + " дней");

let nows = new Date();
let currentYearNum = nows.getFullYear();
let currentMonthNum = nows.getMonth();

let twentiethCurrent = new Date(currentYearNum, currentMonthNum, 20);
let tenthNextMonth = new Date(currentYearNum, currentMonthNum + 1, 10);
let diffMilliseconds = tenthNextMonth - twentiethCurrent;
let dayCount = diffMilliseconds / (1000 * 60 * 60 * 24);
console.log("Между 20 числом текущего месяца и 10 числом следующего: " + Math.floor(dayCount) + " дней");

let currentMoment = new Date();
let yesterdayNoon = new Date(
    currentMoment.getFullYear(),
    currentMoment.getMonth(),
    currentMoment.getDate() - 1, 
    12, 
    0,   
    0,  
    0   
);
let timeDifferenceMse = currentMoment - yesterdayNoon;
let hoursPassed = timeDifferenceMse / (1000 * 60 * 60);
console.log("Текущее время: " + currentMoment.toLocaleString());
console.log("Вчерашний полдень: " + yesterdayNoon.toLocaleString());
console.log("Часов прошло: " + hoursPassed.toFixed(2));

let currentTime = new Date();
let dayStart = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate()
);
let timeDiffMs = currentTime - dayStart;
let hoursElapsed = timeDiffMs / (1000 * 60 * 60);
console.log("Текущее время: " + currentTime.toLocaleTimeString());
console.log("Начало дня: " + dayStart.toLocaleTimeString());
console.log("Часов прошло с начала дня: " + hoursElapsed.toFixed(2));

let currentTimes = new Date();
let endOfDay = new Date(
    currentTimes.getFullYear(),
    currentTimes.getMonth(),
    currentTimes.getDate(),
    23, 59, 59, 999
);
let timeRemainingMs = endOfDay - currentTime;
let hoursRemaining = timeRemainingMs / (1000 * 60 * 60);
console.log("Текущее время: " + currentTime.toLocaleTimeString());
console.log("Конец дня: " + endOfDay.toLocaleTimeString());
console.log("Часов осталось до конца дня: " + hoursRemaining.toFixed(2));