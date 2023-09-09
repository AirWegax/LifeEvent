let dayBtn = document.getElementById('day_btn');
let monthBtn = document.getElementById('month_btn');
let yearBtn = document.getElementById('year_btn');

let dayOutput = document.getElementById('day');
let monthOutput = document.getElementById('month');
let yearOutput = document.getElementById('year');

let dayBtnValue = dayBtn.value,
    dayBtnValueEnd = dayBtnValue;
let monthBtnValue = monthBtn.value;
let yearBtnValue = yearBtn.value;


const errorColor = (dayNum, monthNum, yearNum) => {
    if (dayNum === 1) {
        dayBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.199)';
        dayBtn.style.border = '2px solid red';
    } else if (monthNum === 1) {
        monthBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.199)';
        monthBtn.style.border = '2px solid red';
    } else if (yearNum === 1) {
        yearBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.199)';
        yearBtn.style.border = '2px solid red';
    }
}

// let dayBtnValue = dayBtn.value;
// let monthBtnValue = monthBtn.value;
// let yearBtnValue = yearBtn.value;

let date = new Date();
let year = date.getFullYear();

let dayLimit = 31; 
 
const monthsValidate = (num) => {
    if (num == 2) {
        if (statusDate.value == undefined) {
            statusDate.remove();
        }
        if (yearBtnValue % 4 === 0) {
            dayLimit = 29;
        } else {
            dayLimit = 28;
        }
    } else if (num == 4 || num == 6 || num == 9 || num == 11) {
        if (statusDate.value == undefined) {
            statusDate.remove();
        }
        dayLimit = 30;
    } else if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) {
        if (statusDate.value == undefined) {
            statusDate.remove();
        }
        dayLimit = 31;
    } else if (num == ' '){
        statusDate.textContent = 'Status date: Enter Month';
        blockValidation.appendChild(statusDate); 
        dayLimit = '';
    }
}

let validationD = 'none';
let validationM = 'none';
let validationY = 'none';
const checkDay = () => {
    dayBtnValueEnd = dayBtnValue;
    monthsValidate(monthBtnValue)
    if (dayBtnValue == '') {
        validationD = 'none';
        //set default value
        dayBtnValueEnd = 0;
        dayBtn.style.border = '2px solid #ffae00';
        dayBtn.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        dayOutput.textContent = '0' + dayBtnValueEnd + '.';
    } else if (dayBtnValue == 0) {
        validationD = 'none';
        //set default value
        dayBtnValueEnd = 0;
        errorColor(1, 0, 0)
        dayOutput.textContent = '0' + dayBtnValueEnd + '.';
    } else if (dayBtnValue < 0 || dayBtnValue > dayLimit) {
        validationD = 'none';
        // verification not done, reset date value
        errorColor(1, 0, 0)
        dayBtnValueEnd = 0;
        dayOutput.textContent = '0' + dayBtnValueEnd + '.';
    } else if (dayBtnValue > 0 && dayBtnValue <= dayLimit) {
        // verification done
        validationD = 'done';
        dayBtn.style.border = '2px solid #ffae00';
        dayBtn.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        if (dayBtnValue > 9) {
            dayOutput.textContent = dayBtnValue + '.';
        } else {
            dayOutput.textContent = '0' + dayBtnValue + '.';
        }
        if (validationD === 'done' && validationM === 'done' && validationY=== 'done') {
            statusDate.remove();
        }
    } else {
        // verification not done, reset date value
        dayBtnValueEnd = 0
        dayBtn.style.backgroundColor = 'rgba(255, 0, 0, 0.199)';
        dayBtn.style.border = '2px solid red';
        dayOutput.textContent = '0' + dayBtnValueEnd + '.';;
    }
    monthsValidate(monthBtnValue)
}
const checkMonth = () => {
    monthsValidate(monthBtnValue)
    if (monthBtnValue < 0 || monthBtnValue > 12) {
        validationM = 'none';
        // verification not done, reset date value
        errorColor(0, 1, 0)
        monthOutput.textContent = '0' + 1+ '.';
        monthBtnValue = 0;
    } else if (monthBtnValue > 0 && monthBtnValue <= 12) {
        checkDay();
        validationM = 'done';
        // verification done
        monthBtn.style.border = '2px solid #ffae00';
        monthBtn.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        if (monthBtnValue > 9) {
            checkDay();
            monthOutput.textContent = monthBtnValue + '.';
        } else {
            checkDay();
            monthOutput.textContent = '0' + monthBtnValue + '.';
        }
        if (validationD === 'done' && validationM === 'done' && validationY=== 'done') {
            statusDate.remove();
        }
    } else if (monthBtnValue == '') {
        validationM = 'none';
        // wait verification 
        monthBtn.style.border = '2px solid #ffae00';
        monthBtn.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        //set default value
        monthBtnValue = 0;
        monthOutput.textContent = '0' + monthBtnValue + '.';
    } else {
        validationM = 'none';
        // verification not done, reset date value
        errorColor(0, 1, 0)
        monthOutput.textContent = '0' + 1 + '.';
        monthBtnValue = 0;
    }
}
const checkYear = () => {
    if (yearBtnValue == '') {
        validationY = 'none';
        // wait verification 
        yearBtn.style.border = '2px solid #ffae00';
        yearBtn.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        //set default value
        yearBtnValue = 0;
        yearOutput.textContent = `${yearBtnValue}000`;
    } else if (yearBtnValue < 1984 || yearBtnValue > year) {
        validationY = 'none';
        // verification not done, reset date value
        errorColor(0, 0, 1)
        yearBtnValue = 0;
        yearOutput.textContent = `${yearBtnValue}000`;
    } else if (year > 0 && year <= year) {
        monthsValidate(monthBtnValue)
        checkDay();
        validationY = 'done';
        // verification done
        yearBtn.style.border = '2px solid #ffae00';
        yearBtn.style.backgroundColor = 'rgba(255, 0, 0, 0)';
        yearOutput.textContent = yearBtnValue;
        if (validationD === 'done' && validationM === 'done' && validationY=== 'done') {
            statusDate.remove();
        }
    } else {
        validationY = 'none';
        // verification not done, reset date value
        errorColor(0, 0, 1)
        yearOutput.textContent = '2000';
        yearBtnValue = 0;
    } 
}

dayBtn.addEventListener('input', () => {
    dayBtnValue = dayBtn.value
    checkDay()
});
monthBtn.addEventListener('input', () => {
    monthBtnValue = monthBtn.value
    checkMonth()
});
yearBtn.addEventListener('input', () => {
    yearBtnValue = yearBtn.value
    checkYear()
});

const blockValidation = document.querySelector('.validation');
const dateBtn = document.querySelector('.date_submit');

const statusDate = document.createElement('p');
statusDate.classList.add('status_date');
statusDate.textContent = 'Status date: Error';

const dateExample = document.querySelector('.date_example');
const dateBlock = document.querySelector('.date')

const saveData = () => {
    localStorage.setItem('day', dayBtnValueEnd);
    localStorage.setItem('month', monthBtnValue);
    localStorage.setItem('year', yearBtnValue);
}

dateBtn.addEventListener('click', () => {
    checkDay();
    checkMonth();
    checkYear();

    if (dayBtnValueEnd == '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(1, 0, 0)
    } else if (monthBtnValue == '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 1, 0)
    } else if (yearBtnValue == '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 0, 1)
    } else if (validationD === 'done' && validationM === 'done' && validationY === 'done') {
        saveData();
        window.location.href = 'event.html';
    }

    if (monthBtnValue == '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 1, 0)
    } else if (dayBtnValueEnd == '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(1, 0, 0)
    } else if (yearBtnValue == '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 0, 1)
    } else if (validationD === 'done' && validationM === 'done' && validationY === 'done') {
        saveData();
        window.location.href = 'event.html';
    }

    if (yearBtnValue == '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 0, 1)
    } else if (monthBtnValue === '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 1, 0)
    } else if (dayBtnValueEnd === '') {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(1, 0, 0)
    } else if (validationD === 'done' && validationM === 'done' && validationY === 'done') {
        saveData();
        window.location.href = 'event.html';
    }

    if (dayBtnValueEnd == 0) {
        blockValidation.appendChild(statusDate)
        statusDate.textContent = 'Status date: Error';; 
        errorColor(1, 0, 0)
    } else if (monthBtnValue == 0) {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 1, 0)
    } else if (yearBtnValue == 0) {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 0, 1)
    } else if (validationD === 'done' && validationM === 'done' && validationY === 'done') {
        saveData();
        window.location.href = 'event.html';
    }

    if (monthBtnValue == 0) {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 1, 0)
    } else if (dayBtnValueEnd == 0) {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(1, 0, 0)
    } else if (yearBtnValue == 0) {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 0, 1)
    } else if (validationD === 'done' && validationM === 'done' && validationY === 'done') {
        saveData();
        window.location.href = 'event.html';
    }

    if (yearBtnValue == 0) {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 0, 1)
    } else if (monthBtnValue === 0) {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(0, 1, 0)
    } else if (dayBtnValueEnd === 0) {
        blockValidation.appendChild(statusDate);
        statusDate.textContent = 'Status date: Error'; 
        errorColor(1, 0, 0)
    } else if (validationD === 'done' && validationM === 'done' && validationY === 'done') {
        saveData();
        window.location.href = 'event.html';
    }

    console.log(`if1 ${dayBtnValueEnd} if2 ${monthBtnValue} if3 ${yearBtnValue}`)
})
