const logo = document.querySelector('.logo_animate');

setTimeout( () => {
    logo.style.opacity = '1';
}, 50)


const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

const eventBlockAni = document.querySelector('.event_block');

const settingsApp = document.querySelector('.settings_app');

const dateBlockReset = document.querySelector('.date_block_reset');

setTimeout( () => {
    settingsApp.style.opacity = '1';
}, 700)

setTimeout( () => {
    dateBlockReset.style.opacity = '1';
}, 600)

setTimeout( () => {
    eventBlockAni.style.opacity = '1';
}, 1000)

setTimeout( () => {
    main.style.opacity = '1';
}, 700)

setTimeout( () => {
    footer.style.opacity = '1';
}, 1000)

logo.addEventListener('mouseover', () => {
    logo.style.color = '#ffc400';
})
logo.addEventListener('mouseout', () => {
    logo.style.color = '#ffffff';
})
