import data from "../data/gems_home-slideshow-data.js";

class SlideShowProvider {
  constructor({ autoplay, slides }, updateCallback) {
    this.slides = this.processData(slides);
    this.pointer = 0;
    this.updateCallback = updateCallback;

    this.autoplay = autoplay.isActive;
    this.interval = autoplay.interval;

    this.resetTimer();
  }

  processData(data) {
    return data.map((slide) => {
      return new Slide(slide);
    });
  }

  resetTimer() {
    if (this.autoplay) {
      clearInterval(this.timer);

      this.timer = setInterval(() => {
        this.nextSlide();
      }, this.interval);
    }
  }

  getCurrentSlide() {
    return this.slides[this.pointer];
  }

  nextSlide() {
    this.pointer = (this.pointer + 1) % 3;
    this.updateCallback();
    this.resetTimer();
  }

  previousSlide() {
    this.pointer = (3 + (this.pointer - 1)) % 3;
    this.updateCallback();
    this.resetTimer();
  }
}

class Slide {
  constructor({ background, label, icons }) {
    this.backgroundImg = new SlideImageContent(background).setID("sld-bg");
    this.label = new Label(label).addClass("sld-lbl");
    this.icons = this.processIcons(icons);
  }

  processIcons(icons) {
    return icons.map((icon) => {
      return new SlideIconContent(icon);
    });
  }

  getBackground() {
    return this.backgroundImg.createElement();
  }

  getLabel() {
    return this.label.createElement();
  }

  addIconsIn(element) {
    this.icons.forEach((icon, index) => {
      element.appendChild(icon.createElement(index));
    });
  }
}

class Label {
  constructor({ text, size, offset }) {
    this.text = text;
    this.offset = new Offset(offset);
    this.size = size;
    this.classList = [];
  }

  addClass(name) {
    this.classList.push(name);
    return this;
  }

  createElement() {
    let label = document.createElement("p");
    label.innerText = this.text;
    label.classList = this.classList;
    label.style.fontSize = `${this.size}px`;
    label.style.left = `${this.offset.x}%`;
    label.style.top = `${this.offset.y}%`;

    return label;
  }
}

class SlideImageContent {
  constructor({ src, offset }) {
    this.src = src;
    this.offset = new Offset(offset);

    this.id = "";
    this.classList = [];
  }

  setID(name) {
    this.id = name;
    return this;
  }

  createElement() {
    let image = new Image();
    image.src = this.src;
    image.id = this.id;
    image.classList = this.classList;
    image.style.left = `${this.offset.x}%`;
    image.style.top = `${this.offset.y}%`;

    return image;
  }
}

class SlideIconContent extends SlideImageContent {
  constructor(data) {
    super(data);
    this.scale = data.scale;
    this.rotate = data.rotate ?? 0;
  }

  createElement(delay = 0) {
    let image = new Image();
    image.src = this.src;
    image.style.rotate = `${this.rotate}deg`;
    image.style.animationDelay = `${(delay % 3) * 0.1 + 1.3}s`;

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");
    iconContainer.style.left = `${this.offset.x}%`;
    iconContainer.style.top = `${this.offset.y}%`;
    iconContainer.style.scale = this.scale;

    iconContainer.appendChild(image);

    return iconContainer;
  }
}

class Offset {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
  }
}

export { SlideShowProvider };
