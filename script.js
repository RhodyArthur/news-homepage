const menuEl = document.querySelector('.menu');
const sidebarEl = document.querySelector('.sidebar');
const closeEl = document.getElementById('close');


menuEl.addEventListener('click', () => {
    sidebarEl.classList.remove('hidden')
})

closeEl.addEventListener('click', () => {
    sidebarEl.classList.add('hidden')
})