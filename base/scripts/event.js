// load user date
let daySave = localStorage.getItem('day');
let monthSave = localStorage.getItem('month');
let yearSave = localStorage.getItem('year');

let yearSaveOrignal = yearSave;

// import html element to variable 
const year = document.querySelector('.year');

// create Date object
const date = new Date();

let nowYear = date.getFullYear();
let nowMonth = date.getMonth();
let nowDay = date.getDate();

// set default format month
nowMonth += 1;

// input values to .year element
year.innerHTML = `Year: ${yearSave} | <span class="user_age_text">Age: <span class="user_age_value">1y</span>`;
const userAgeValue = document.querySelector('.user_age_value')

// check years old max.
let userAge = 0;    

const userAgeOldMax = () => {
    if (nowMonth > monthSave) {
        userAge = nowYear - yearSave;
    } else if (nowMonth == monthSave) {
        if (nowDay >= daySave) {
            userAge = nowYear - yearSave; 
        } else {
            userAge = (nowYear - yearSave) - 1;    
        }
    } else {
        userAge = (nowYear - yearSave) - 1;
    }
}

// for (let i = 0; i < userAge; i++) {
    
// }

userAgeValue.textContent = userAge; 


// processing history.js
let monthsID = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
}


const numsId = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december'
}


let monthValueID = [];
let monthCounter = 1;

const checkYearOriginal = () => {
    Object.values(monthsID).forEach(monthValue => {
        if (monthSave > monthValue) {
            monthValueID.push(monthValue)
        }
    });
    Object.keys(numsId).forEach(numTag => {
        monthValueID.forEach(function(entry) {
            if (entry == numTag) { 
                Object.values(numsId).forEach(monthValue => {
                    if (monthsID[monthValue] == entry) {
                        Reflect.deleteProperty(monthsID, monthValue);
                    }
                });
            }
        });
    });
}

checkYearOriginal();

Object.values(monthsID).forEach(monthElementValue => {
    monthCounter += 1;
});

const btnYear = document.querySelector('#next_year');
const btnBackYear = document.querySelector('#back_year');

let monthText = '';
let infoText = '';

let counterCycle = 1;

let yearObject = 'idyear' + yearSave;   

const createMonthBlock = () => {
    const eventBlock = document.querySelector('.event_block');

    let monthElement = document.createElement('div')
    monthElement.classList.add('month')

    const monthTitleElement = document.createElement('span');
    monthTitleElement.classList.add('month_title');
    
    const monthTitleSpanElement = document.createElement('span');
    
    const monthEventElement = document.createElement('p');
    monthEventElement.classList.add('month_event');


    eventBlock.insertBefore(monthElement, btnYear);
    monthElement.appendChild(monthTitleElement);
    monthTitleElement.appendChild(monthTitleSpanElement);
    monthElement.appendChild(monthEventElement);

    Object.values(monthsID).forEach(monthElementValue => {
        
    });
    let counterCycleNow = 1;
    Object.keys(monthsID).every(numTagA => {
        monthText = numTagA;
        if (counterCycleNow >= counterCycle) {
            Object.values(history).forEach( historyElement => {
                if (historyElement.year == yearSave) {
                    infoText = history[yearObject].months[numTagA]
                }
            });
            counterCycle += 1;
            return false;
        }
        counterCycleNow += 1;
        return true;
    });

    monthTitleSpanElement.textContent = `${monthText}: `;

    monthEventElement.textContent = infoText;


}
for (let i = 1; i < monthCounter; i++) {
    createMonthBlock();
}

let yearSaveCopy = yearSave;
let userAgeCorrect = 0;

const yearHistory = () => {
    year.innerHTML = `Year: ${yearSaveCopy} | <span class="user_age_text">Age: <span class="user_age_value">${userAgeCorrect}</span>`;
    userAgeValue.textContent = userAge;

}

const resetHistory = () => {
    yearObject = 'idyear' + yearSave;
    monthSave = 1;
    monthText = '';
    infoText = '';
    monthCounter = 1;
    Object.values(monthsID).forEach(monthElementValue => {
        monthCounter += 1;
    });
    const monthElementGet = document.querySelectorAll('.month');
    monthElementGet.forEach(elementRem => {
        elementRem.remove();
    });
    counterCycle = 1;
    yearSave = yearSaveCopy;
    for (let i = 1; i < monthCounter; i++) {
        createMonthBlock();
    }
}

const resetMonth = () => {
    monthsID = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12,
    };
}

btnYear.addEventListener('click', () => {
    yearSaveCopy = parseInt(yearSaveCopy) + 1;
    yearSave = parseInt(yearSave) + 1;
    userAgeCorrect += 1;
    resetMonth();
    resetHistory();
    yearHistory();
    const monthElementStyle = document.querySelectorAll('.month');
    monthElementStyle.forEach(element => {
        element.style.cssText = `
            opacity: 0;
        `;
    });
    setTimeout( () => {
        monthElementStyle.forEach(element => {
            element.style.cssText = `
                transition: all 1.2s;
                opacity: 1;
            `;
        });
    }, 10)
})

function btnBackYearEvent() {
    yearSaveCopy = parseInt(yearSaveCopy) - 1;
    yearSave = parseInt(yearSave) - 1;
    userAgeCorrect -= 1;
    if (yearSaveCopy < yearSaveOrignal) {
        yearSaveCopy = yearSaveOrignal;
        yearSave = yearSaveOrignal;
        userAgeCorrect = 0;
        return false;
    }
    resetHistory();
    yearHistory();
    const monthElementStyle = document.querySelectorAll('.month');
    monthElementStyle.forEach(element => {
        element.style.cssText = `
            opacity: 0;
        `;
    });
    setTimeout( () => {
        monthElementStyle.forEach(element => {
            element.style.cssText = `
                transition: all 1.2s;
                opacity: 1;
            `;
        });
    }, 10)
}

btnBackYear.addEventListener('click', btnBackYearEvent)

