class SliderProvider {
  constructor(id, elements) {
    this.id = id;
    this.elements = elements;
    this.slider = document.getElementById(this.id);
    this.currentValue = 0;

    document.addEventListener("DOMContentLoaded", (event) => {
      this.init();
    });
  }

  init() {
    const mainContainer = document.createElement("div");
    mainContainer.id = "animated-content-slider";
    this.slider.innerHTML = "";
    this.slider.appendChild(mainContainer);

    const slidersContainers = ["sliders-container", "sliders-container"].map(
      (className) => {
        let div = document.createElement("div");
        div.classList.add(className);
        return div;
      }
    );

    this.elements.forEach((element) => {
      slidersContainers.forEach((container) => {
        const sliderItem = document.createElement("div");
        sliderItem.classList.add("slider-content");
        sliderItem.innerHTML = element;

        container.appendChild(sliderItem);
      });
    });

    slidersContainers.forEach((container) =>
      mainContainer.appendChild(container)
    );
  }
}

var sliderProvider = new SliderProvider(
  "x-slider",
  [
    {
      href: "https://www.hiddengeniusproject.org/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-1.jpg",
    },
    {
      href: "https://www.weareteaminc.org/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-2.jpg",
    },
    {
      href: "https://www.colorintech.org/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-3.jpg",
    },
    {
      href: "https://www.chelseafc.com/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-4.jpg",
    },
    {
      href: "https://www.mmsnorcal.com/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-5.jpg",
    },
    {
      href: "https://www.primergysolar.com/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-6.jpg",
    },
    {
      href: "https://www.representedleadership.org/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-7.jpg",
    },
    {
      href: "https://www.frbsf.org/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-8.jpg",
    },
    {
      href: "https://www.portofoakland.com/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-9.jpg",
    },
    {
      href: "https://www.target.com/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-10.jpg",
    },
    {
      href: "https://www.tottenhamhotspur.com/the-club/foundation/about-us/",
      imgSrc:
        "https://girlsequitymovement.org/wp-content/uploads/2024/01/Partners-Logo-11.jpg",
    },
  ].map((item) => `<a href="${item.href}"><img src="${item.imgSrc}" /></a>`)
);

var homeSliderProvider = new SliderProvider(
  "home-x-slider",
  [
    {
      name: "Pamela King",
      imgSrc:
        "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/68080f2e81c3b078fb0de980.png",
      testimonial: "Loved my quick 15 minutes with the girls!",
    },
    {
      name: "Rose Lejiste",
      imgSrc:
        "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/68080f2ec68223fa3afb820e.png",
      testimonial:
        "Beautiful and intelligent group of young ladies. I was extremely impressed with the engagement. I loved their fearlessness when asking questions and making comments. That type of confidence is key when they graduate high school and start their college career. Honored to have spoken to them and I look forward to working with these ladies in the future.",
    },
    {
      name: "Yvette Ankunda",
      imgSrc:
        "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/68080f2ed46db1a8dcc9e9c7.png",
      testimonial:
        "It was amazing to speak with the GEMS. The girls are all lovely and engaged. I received wonderful questions and was inspired by their ambition and aspirations. I think they will all go very far and I cant wait to see them blossom even more!",
    },
  ].map((item) => {
    return `<div class="card">
        <div class="testimonial">
        <p>${item.testimonial}</p>
        </div>
    
        <div class="details">
        <img
            src="${item.imgSrc}"
            alt="${item.name.toLowerCase().replace(" ", "-")}"
            srcset=""
        />
        <h4>${item.name}</h4>
        </div>
    </div>`;
  })
);
