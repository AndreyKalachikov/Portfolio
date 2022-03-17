// Кнопки переключения языка
const langswitchToRusButton = document.querySelector('#Ru');
const langswitchToEngButton = document.querySelector('#En');

// Все текстовые элементы страницы
const headerLink = document.querySelector('.header__link');
const welcomeSectionTitle = document.querySelector('.welcome-section__title');
const worksMainTitle = document.querySelector('.works__main-title');
const paragrafs = Array.from(document.querySelectorAll('.works__paragraph'));
const allImages = Array.from(document.querySelectorAll('img'));


// Функции изменения языка
function changeLanguageToRus() {
  headerLink.textContent = ruContentObject[0];
  welcomeSectionTitle.textContent = ruContentObject[1];
  worksMainTitle.textContent = ruContentObject[2];
  langswitchToRusButton.classList.add('header__lang-selector_type_active');
  langswitchToEngButton.classList.remove('header__lang-selector_type_active');
  paragrafs.forEach(paragrafElement => {
    paragrafElement.textContent = rusParagrafsObject[paragrafs.indexOf(paragrafElement)]
  });
  allImages.forEach(imageElement => {
    imageElement.alt = rusImagesAlt[allImages.indexOf(imageElement)]
  });
}

function changeLanguageToEng() {
  headerLink.textContent = engContentObject[0];
  welcomeSectionTitle.textContent = engContentObject[1];
  worksMainTitle.textContent = engContentObject[2];
  langswitchToRusButton.classList.remove('header__lang-selector_type_active');
  langswitchToEngButton.classList.add('header__lang-selector_type_active');
  paragrafs.forEach(paragrafElement => {
    paragrafElement.textContent = engParagrafsObject[paragrafs.indexOf(paragrafElement)]
  });
  allImages.forEach(imageElement => {
    imageElement.alt = engImagesAlt[allImages.indexOf(imageElement)]
  });
}

// Слушатели на кнопках изменения языка
langswitchToRusButton.addEventListener('click', changeLanguageToRus);
langswitchToEngButton.addEventListener('click', changeLanguageToEng);
