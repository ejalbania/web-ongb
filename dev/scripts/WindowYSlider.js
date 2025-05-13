let YDirection = Object.freeze({ Up: "Up", Down: "Down" });

class ScrollDirection {
  constructor(yDirection) {
    this.yDirection = yDirection;
  }

  getPointerDirection() {
    return this.yDirection === YDirection.Down ? 1 : -1;
  }

  getOppositeDirection() {
    return new ScrollDirection(
      this.yDirection === YDirection.Down ? YDirection.Up : YDirection.Down
    );
  }
}

class WindowSlider {
  constructor(slider, initialIndex, maxIndex) {
    this.slider = slider;
    this.maxIndex = maxIndex;
    this.initialIndex = initialIndex;
    this.didInitializeToPosition = false;
    this.isScrolling = false;

    this.configureComponents();
  }

  configureComponents() {
    this.height = this.slider.getBoundingClientRect().height;
    this.top = this.index * this.height;
    this.resetPosition();
  }

  resetPosition() {
    this.didInitializeToPosition = false;
    this.setNewIndex(this.initialIndex);

    setTimeout(() => {
      this.didInitializeToPosition = true;
    }, 1000);
  }

  getDirection(scrollValue) {
    return new ScrollDirection(
      scrollValue < 0 ? YDirection.Up : YDirection.Down
    );
  }

  setTrigger(callback) {
    this.slider.onwheel = (event) => {
      let scrollValue = event.deltaY;

      if (!this.isScrolling && scrollValue !== 0) {
        this.isScrolling = true;
        let direction = this.getDirection(scrollValue);
        callback(direction);
        console.log(
          "Scroll direction:",
          direction,
          "in",
          this.slider.classList
        );

        setTimeout(() => {
          this.isScrolling = false;
        }, 1000);
      }
    };
  }

  moveTo(direction) {
    if (this.didInitializeToPosition) {
      let newIndex = this.index + direction.getPointerDirection();
      this.setNewIndex(newIndex);
    }
  }

  setNewIndex(index) {
    this.index = index < 0 ? 0 : index > this.maxIndex ? this.maxIndex : index;
    this.slider.scrollTop = this.index * this.height;
  }
}

class WindowSliderManager {
  constructor(sliders) {
    this.sliders = sliders;

    this.sliders.forEach((slider, index) => {
      slider.setTrigger((direction) => {
        slider.moveTo(direction);

        if (sliders[(1 + index) % 2] !== undefined) {
          sliders[(1 + index) % 2].moveTo(direction.getOppositeDirection());
        }
      });
    });
  }
}

var sliderManager;

document.addEventListener("DOMContentLoaded", function () {
  let leftSlider = document.querySelector(".window-y-slider .left-slider");
  let rightSlider = document.querySelector(".window-y-slider .right-slider");

  sliderManager = new WindowSliderManager([
    new WindowSlider(leftSlider, 0, 4),
    new WindowSlider(rightSlider, 4, 4),
  ]);
});
