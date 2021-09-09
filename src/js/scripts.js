// hamburger
window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
    menuItem = document.querySelectorAll('.header__item'),
    menu = document.querySelector('.header__menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
})

// percent for slider
let slider = document.getElementById("range");
let output = document.getElementById("percent");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

// add file button
let inputs = document.querySelectorAll('.order__file');
Array.prototype.forEach.call(inputs, function (input) {
    let label = input.nextElementSibling,
    labelVal = label.querySelector('.order__file-text').innerText;

    input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
        countFiles = this.files.length;

    if (countFiles)
        label.querySelector('.order__file-text').innerText = 'Выбрано файлов: ' + countFiles;
    else
        label.querySelector('.order__file-text').innerText = labelVal;
    });
});
