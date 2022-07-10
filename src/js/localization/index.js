import i18next from "i18next";
import localesRu from "./locales-ru.json";
import localesEn from "./locales-en.json";
import localesDe from "./locales-de.json";

const dictionary = {
  ru: ["en", "de"],
  en: ["ru", "de"],
  de: ["en", "ru"],
};

export const initLocalization = () => {
  const lang = window.location.hash.substring(1) || "ru";
  const buttons = document.querySelectorAll(".header__lang");
  const burgerButtons = document.querySelectorAll(
    ".burger-menu__lang-burger-btn"
  );

  const setText = () => {
    const i18nItems = document.querySelectorAll("[data-i18n]");

    i18nItems.forEach((item) => {
      item.innerHTML = i18next.t(item.dataset.i18n);
    });
  };

  const setLangButtons = (firsLang, secondLang) => {
    buttons[0].innerHTML = firsLang;
    buttons[1].innerHTML = secondLang;
    burgerButtons[0].innerHTML = firsLang;
    burgerButtons[1].innerHTML = secondLang;

    buttons[0].setAttribute("data-lang", firsLang);
    buttons[1].setAttribute("data-lang", secondLang);
    burgerButtons[0].setAttribute("data-lang", firsLang);
    burgerButtons[1].setAttribute("data-lang", secondLang);
  };

  const setLinkst = (lang) => {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      const commonHref = link.getAttribute("href").split("#")[0];
      link.setAttribute("href", commonHref + "#" + lang);
    });
  };

  i18next.init(
    {
      lng: lang,
      debug: true,
      resources: {
        en: localesEn,
        ru: localesRu,
        de: localesDe,
      },
    },
    () => {
      setText();
      setLangButtons(...dictionary[lang]);
      setLinkst(lang);
    }
  );

  const changeLang = (lang) => {
    window.location.hash = lang;
    i18next.changeLanguage(lang, setText);
  };

  const onClick = (button, e) => {
    e.preventDefault();

    const lang = button.getAttribute("data-lang");

    changeLang(lang);
    setLangButtons(...dictionary[lang]);
    setLinkst(lang);
  };

  buttons.forEach((button) =>
    button.addEventListener("click", (e) => {
      onClick(button, e);
    })
  );

  burgerButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      onClick(button, e);
    })
  );
};
