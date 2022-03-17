// Кнопки переключения языка
const langswitchToRuButton = document.querySelector('#AboutRu');
const langswitchToEnButton = document.querySelector('#AboutEn');

// Текстовые элементы страницы
const aboutHeaderLink = document.querySelector('.header__link');
const mainText =document.querySelector('.about__container');

// Функции изнемения языка
function changeLanguageToRus() {
  aboutHeaderLink.textContent = 'Домой';
  langswitchToRuButton.classList.add('header__lang-selector_type_active');
  langswitchToEnButton.classList.remove('header__lang-selector_type_active');
  mainText.innerHTML = `<h2 class="about__title">Об авторе</h2>
  <p class="about__text">Добрый день! Меня зовут Андрей и&nbsp;я&nbsp;веб разработчик. <br> Мой основной язык &nbsp;&mdash; JavaScript. Я&nbsp;могу верстать сайты на&nbsp;чистом html и&nbsp;CSS, знаком с&nbsp;принципами работы фреймворков и&nbsp;препроцессоров, в&nbsp;частности Bootstrap и&nbsp;less. <br> Работаю с&nbsp;репозиториями на&nbsp; <a href="https://github.com/AndreyKalachikov" class="about__span-link links" target="_blank">Github</a>, соответственно, готов к&nbsp;работе в&nbsp;команде над совместными проектами. <br> Работаю с&nbsp;проектами, в&nbsp;основном, в&nbsp;Figma, в&nbsp;том числе, с&nbsp;позиции веб-дизайнера (умение создавать макеты, запускать прототипы).</p>
  <p class="about__text">Контакты: +79099580897; andreykalachikov@gmail.com</p>`
}

function changeLanguageToEng() {
  aboutHeaderLink.textContent = 'Home';
  langswitchToRuButton.classList.remove('header__lang-selector_type_active');
  langswitchToEnButton.classList.add('header__lang-selector_type_active');
  mainText.innerHTML = `<h2 class="about__title">About me</h2>
  <p class="about__text">Hello! My&nbsp;name is&nbsp;Andrew and I&nbsp;am a&nbsp;web developer. <br> My&nbsp;main language is&nbsp;JavaScript. I&nbsp;can create websites in&nbsp;pure html and CSS, know the principles of&nbsp;frameworks and preprocessors, in&nbsp;particular &laquo;Bootstrap&raquo; and &laquo;less&raquo;. <br> I&nbsp;work with repositories on&nbsp; <a href="https://github.com/AndreyKalachikov" class="about__span-link links" target="_blank">Github</a>, so&nbsp;I&nbsp;am ready to&nbsp;team work projects. <br> I&nbsp;work with projects mainly in&nbsp;Figma, including as&nbsp;a&nbsp;web designer (know how to&nbsp;create layouts, launch prototypes).</p>
  <p class="about__text">Contacts: +79099580897; andreykalachikov@gmail.com</p>`
}

// Слушатели на кнопках изменения языка
langswitchToRuButton.addEventListener('click', changeLanguageToRus);
langswitchToEnButton.addEventListener('click', changeLanguageToEng);
