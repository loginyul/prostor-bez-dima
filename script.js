"use strict";

const translations = {
  sr: {
    allProjects: "Сви пројекти ауторке",
    htmlLang: "sr-Cyrl", pageTitle: "Простор без дима — знак за преузимање",
    description: "Знак за просторе без дима и просторије са пречишћеним ваздухом. Преузмите AI и PNG. Ауторка: IULIIA LOGINOVA. Слободна употреба уз CC BY 4.0.",
    skip: "Пређи на садржај", eyebrow: "ЗНАК ЗА ЧИСТ ВАЗДУХ", title: "Простор<br><span>без дима.</span>",
    intro: "За места у којима се не пуши и просторије са пречишћеним ваздухом. Мали знак бриге о ваздуху који делимо.",
    venues: "За кафиће, канцеларије, студије и ваше омиљено место.",
    downloadAi: "Преузми AI", aiDetail: "Векторски оригинал · 2,3 MB", downloadPng: "Преузми PNG", pngDetail: "Слика · 1586 × 1578 px",
    freeNote: "Бесплатно. Без регистрације. Уз навођење ауторке.",
    imageAlt: "Знак ПРОСТОР БЕЗ ДИМА: насмејани облак, зелени листови и кров",
    originalCaption: "Оригинални знак · српска ћирилица", transparency: "Провидни делови",
    meaningLabel: "ИДЕЈА", meaningTitle: "Пријатељски подсетник.",
    meaningText: "Насмејани облак, листови и кров повезују чист ваздух, природу и осећај добродошлице. Порука бриге о заједничком простору.",
    glassLabel: "ЗА СТАКЛО", glassTitle: "Нека светлост прође.",
    glassText: "Знак има провидне делове и може да се штампа на провидној самолепљивој фолији. Бела испуна облака и доњег дела остаје део дизајна.",
    printSummary: "Напомена за штампарију",
    printText: "За штампу користите AI. Провидне делове оставите без боје и беле подлоге; беле елементе одштампајте белом бојом. Ако се знак лепи изнутра, а чита споља, договорите страну лепљења, огледалну штампу и редослед слојева. Проверите пробни отисак пре тиража.",
    licenseTitle: "Користите.<br>Преведите. Поделите.",
    licenseText: "Знак можете бесплатно штампати, делити и мењати, укључујући комерцијалну употребу. Слободно преведите натпис или замените његов текст.",
    attribution: "Наведите ауторку IULIIA LOGINOVA, приложите линк ка извору и лиценци и назначите измене, ако их има.",
    licenseLink: "О лиценци", sourceLink: "Извор и све датотеке", createdBy: "Ауторка знака", footer: "Чист ваздух је за све."
  },
  ru: {
    allProjects: "Все проекты автора",
    htmlLang: "ru", pageTitle: "Простор без дима — скачать знак",
    description: "Знак для мест, где не курят, и помещений с очищенным воздухом. Скачать AI и PNG. Автор: IULIIA LOGINOVA. Свободное использование по CC BY 4.0.",
    skip: "Перейти к содержимому", eyebrow: "ЗНАК ЧИСТОГО ВОЗДУХА", title: "Пространство<br><span>без дыма.</span>",
    intro: "Для мест, где не курят, и помещений с очищенным воздухом. Небольшой знак заботы о воздухе, которым мы дышим вместе.",
    venues: "Для кафе, офисов, студий и вашего любимого места.",
    downloadAi: "Скачать AI", aiDetail: "Векторный оригинал · 2,3 МБ", downloadPng: "Скачать PNG", pngDetail: "Изображение · 1586 × 1578 px",
    freeNote: "Бесплатно. Без регистрации. С указанием автора.",
    imageAlt: "Знак ПРОСТОР БЕЗ ДИМА: улыбающееся облако, зелёные листья и крыша",
    originalCaption: "Оригинал · сербская кириллица", transparency: "Прозрачные области",
    meaningLabel: "ИДЕЯ", meaningTitle: "Дружелюбное напоминание.",
    meaningText: "Улыбающееся облако, листья и крыша объединяют чистый воздух, природу и чувство уюта. Знак заботы о пространстве, которое мы делим.",
    glassLabel: "ДЛЯ СТЕКЛА", glassTitle: "Пусть проходит свет.",
    glassText: "В знаке есть прозрачные области: его можно напечатать на прозрачной самоклеящейся плёнке. Белая заливка облака и нижней части остаётся частью дизайна.",
    printSummary: "Что сказать типографии",
    printText: "Для печати используйте AI. Оставьте прозрачные области без краски и белой подложки; белые элементы напечатайте белой краской. Если наклейка крепится изнутри для чтения снаружи, согласуйте сторону приклеивания, зеркальную печать и порядок слоёв. Перед тиражом проверьте пробный отпечаток.",
    licenseTitle: "Используйте.<br>Переводите. Делитесь.",
    licenseText: "Знак можно бесплатно печатать, распространять и изменять, в том числе в коммерческих целях. Надпись можно переводить на другой язык или менять её текст.",
    attribution: "Укажите автора IULIIA LOGINOVA, приложите ссылки на источник и лицензию и отметьте изменения, если они есть.",
    licenseLink: "Условия лицензии", sourceLink: "Исходник и все файлы", createdBy: "Автор знака", footer: "Чистый воздух — для всех."
  },
  en: {
    allProjects: "All projects by the creator",
    htmlLang: "en", pageTitle: "Smoke-Free Space — download the sign",
    description: "A friendly sign for smoke-free spaces and spaces with purified air. Download AI and PNG. Created by IULIIA LOGINOVA. Free to use under CC BY 4.0.",
    skip: "Skip to content", eyebrow: "A SIGN FOR CLEAN AIR", title: "A space<br><span>without smoke.</span>",
    intro: "For smoke-free places and indoor spaces with purified air. A small sign of care for the air we share.",
    venues: "For cafés, offices, studios and your favourite place.",
    downloadAi: "Download AI", aiDetail: "Vector original · 2.3 MB", downloadPng: "Download PNG", pngDetail: "Image · 1586 × 1578 px",
    freeNote: "Free. No sign-up. Credit the creator.",
    imageAlt: "The ПРОСТОР БЕЗ ДИМА sign: a smiling cloud, green leaves and a roof",
    originalCaption: "Original sign · Serbian Cyrillic", transparency: "Transparent areas",
    meaningLabel: "THE IDEA", meaningTitle: "A friendly reminder.",
    meaningText: "The smiling cloud, leaves and roof bring together clean air, nature and a sense of welcome. A sign of care for the spaces we share.",
    glassLabel: "MADE FOR GLASS", glassTitle: "Let the light through.",
    glassText: "The sign has transparent areas and can be printed on clear self-adhesive film. The white fills in the cloud and lower panel are part of the design.",
    printSummary: "A note for your printer",
    printText: "Use the AI file for printing. Leave transparent areas free of ink and white underbase; print white elements in white ink. For a sticker applied inside a window and read from outside, agree the adhesive side, reverse printing and layer order with your printer. Check a printed proof before production.",
    licenseTitle: "Use it.<br>Translate it. Share it.",
    licenseText: "You may print, share and modify the sign free of charge, including for commercial use. Feel free to translate the lettering or replace its text.",
    attribution: "Credit IULIIA LOGINOVA, link to the source and licence, and indicate any changes you make.",
    licenseLink: "Licence terms", sourceLink: "Source & all files", createdBy: "Sign created by", footer: "Clean air is for everyone."
  }
};

const htmlKeys = new Set(["title", "licenseTitle"]);

function setLanguage(language, updateUrl = true) {
  const languageKey = Object.hasOwn(translations, language) ? language : "sr";
  const text = translations[languageKey];
  document.documentElement.lang = text.htmlLang;
  document.title = text.pageTitle;
  document.querySelector('meta[name="description"]').content = text.description;
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (htmlKeys.has(key)) element.innerHTML = text[key];
    else element.textContent = text[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    element.alt = text[element.dataset.i18nAlt];
  });
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === languageKey));
  });
  document.getElementById("license-link").href = languageKey === "ru"
    ? "https://creativecommons.org/licenses/by/4.0/deed.ru"
    : "https://creativecommons.org/licenses/by/4.0/";
  document.querySelector('.all-projects').href = 'https://loginyul.github.io/?lang=' + languageKey;
  try { localStorage.setItem('loginyul-language', languageKey); } catch (_) {}
  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", languageKey);
    window.history.replaceState(null, "", url);
  }
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
document.getElementById("transparency-toggle").addEventListener("click", event => {
  const button = event.currentTarget;
  const enabled = button.getAttribute("aria-pressed") !== "true";
  button.setAttribute("aria-pressed", String(enabled));
  document.getElementById("artwork-stage").classList.toggle("show-transparency", enabled);
});
function initialLanguage() {
  const requested = new URLSearchParams(location.search).get('lang');
  if (Object.hasOwn(translations, requested)) return requested;
  try { const saved = localStorage.getItem('loginyul-language'); if (Object.hasOwn(translations, saved)) return saved; } catch (_) {}
  return 'sr';
}
window.addEventListener('pageshow', () => setLanguage(initialLanguage(), false));
setLanguage(initialLanguage(), false);
