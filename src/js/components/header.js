export const initHeader = () => {
  const burgerBtn = document.querySelector(".header__burger-btn");
  const burgerMenu = document.querySelector(".burger-menu");

  const toggleBurgerActive = () => {
    if (burgerBtn.classList.contains("header__burger-btn_active")) {
      burgerBtn.classList.remove("header__burger-btn_active");
      burgerMenu.classList.remove("burger-menu_active");
    } else {
      burgerBtn.classList.add("header__burger-btn_active");
      burgerMenu.classList.add("burger-menu_active");
    }
  };

  burgerBtn.addEventListener("click", toggleBurgerActive);
};
