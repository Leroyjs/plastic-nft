import Flickity from "flickity";

const initDesktopSlider = (arrayOfSliderObjects, itemExample) => {
  const setActiveSlide = (slider, newIndex) => {
    slider.itemsWrappers.forEach((itemsWrapper, sliderIndex) => {
      const isActive = itemsWrapper.classList.contains(
        "collection-slider__items-wrapper_active"
      );

      if (isActive) {
        itemsWrapper.classList.remove(
          "collection-slider__items-wrapper_active"
        );
        itemsWrapper.classList.add("collection-slider__items-wrapper_remove");

        setTimeout(() => {
          itemsWrapper.classList.remove(
            "collection-slider__items-wrapper_remove"
          );
        }, 1000);
      }

      if (newIndex === sliderIndex) {
        itemsWrapper.classList.add("collection-slider__items-wrapper_active");
      }
    });
  };

  const getSizes = (item) => item.getBoundingClientRect();

  const setSizesOfSliders = (newSizes) => {
    arrayOfSliderObjects.forEach((sliderObject) => {
      sliderObject.innerDesktop.style.width = newSizes.width * 3 + 32 + "px";
      sliderObject.innerDesktop.style.height = newSizes.width + "px";
    });
  };

  const withTimeout = (callback, slider) => {
    if (slider.isReady) {
      callback(slider);

      slider.isReady = false;

      setTimeout(() => {
        slider.isReady = true;
      }, 1200);
    }
  };

  const setPrevSlide = (slider) => {
    if (slider.activeIndex >= 1) {
      slider.activeIndex = slider.activeIndex - 1;
    } else {
      slider.activeIndex = slider.itemsWrappers.length - 1;
    }

    slider.innerDesktop.classList.remove("collection-slider__inner_next");
    slider.innerDesktop.classList.add("collection-slider__inner_prev");

    setActiveSlide(slider, slider.activeIndex);
  };

  const setNextSlide = (slider) => {
    if (slider.activeIndex <= slider.itemsWrappers.length - 2) {
      slider.activeIndex = slider.activeIndex + 1;
    } else {
      slider.activeIndex = 0;
    }

    slider.innerDesktop.classList.remove("collection-slider__inner_prev");
    slider.innerDesktop.classList.add("collection-slider__inner_next");

    setActiveSlide(slider, slider.activeIndex);
  };

  const initSlider = (slider) => {
    slider.nextButton.addEventListener("click", () =>
      withTimeout(setNextSlide, slider)
    );
    slider.prevButton.addEventListener("click", () =>
      withTimeout(setPrevSlide, slider)
    );
  };

  arrayOfSliderObjects.forEach(initSlider);

  setSizesOfSliders(getSizes(itemExample));

  window.addEventListener("resize", () =>
    setSizesOfSliders(getSizes(itemExample))
  );
};

const initMobileSlider = (arrayOfSliderObjects) => {
  arrayOfSliderObjects.forEach((sliderObject) => {
    const flkty = new Flickity(sliderObject.innerMobile, {
      cellAlign: "center",
      prevNextButtons: false,
      pageDots: false,
      groupCells: 2,
      wrapAround: true,
    });
    sliderObject.nextButton.addEventListener("click", () => flkty.next());
    sliderObject.prevButton.addEventListener("click", () => flkty.previous());
  });
};

export const initSlider = () => {
  const sliders = Array.from(document.querySelectorAll(".collection-slider"));
  const itemExample = sliders[0].querySelector(".collection-slider__item");

  const arrayOfSliderObjects = sliders.map((slider) => ({
    slider,
    innerDesktop: slider.querySelector(
      ".collection-slider__inner.collection-slider__inner_desktop"
    ),
    innerMobile: slider.querySelector(
      ".collection-slider__inner.collection-slider__inner_mobile"
    ),
    itemsWrappers: slider.querySelectorAll(".collection-slider__items-wrapper"),
    nextButton: slider.querySelector(".collection-slider__button_right"),
    prevButton: slider.querySelector(".collection-slider__button_left"),
    activeIndex: 0,
    isReady: true,
  }));

  initDesktopSlider(arrayOfSliderObjects, itemExample);
  initMobileSlider(arrayOfSliderObjects);
};
