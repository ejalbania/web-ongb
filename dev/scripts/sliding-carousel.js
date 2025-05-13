const slides = [
  {
    name: "Brittany Hayles",
    role: "Founder/Ceo – Hayes Consulting",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7e013d5463c1d379a4f46.png",
  },
  {
    name: "Nannearl Brown",
    role: "Product Researcher",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f4b0d5463cf56b9a8600.png",
  },
  {
    name: "Jameelah Calhoun",
    role: "Director New Product Strategy",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f4b012053d663fd027ed.png",
  },
  {
    name: "Louvere Walker",
    role: "Hannon Application Engineer",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f51f12053d6c10d0289b.png",
  },
  {
    name: "Sonya Magett",
    role: "Content Manager - Samsung",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f51f70bdc604648ec5dc.png",
  },
  {
    name: "Pamela King",
    role: "Field Marketing – Google",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f51f63dd2eb8a94bb518.png",
  },
  {
    name: "Yvette Ankunda",
    role: "HR Generalist - Iterable",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f5b0b95d203a86a12240.png",
  },
  {
    name: "Cara Parrish",
    role: "Founder/Ceo at Cara Parrish Marketing",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f5b063dd2e0f124bb597.png",
  },
  {
    name: "Shayanna Sims",
    role: "UX Program Manager- Google",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f5b0d5463c480f9a870b.png",
  },
  {
    name: "Donna Auguste",
    role: "Founder/Ceo – Auguste Research Group",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f627720c8033f9fc6e83.png",
  },
  {
    name: "Equisha Glenn",
    role: "Civil Engineering – NASA",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f62712053da3bbd02ab3.png",
  },
  {
    name: "Tess Mercer",
    role: "Head of global marketing technology and analytics",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f62771d915eb6b8a25cb.png",
  },
  {
    name: "Alawna Jamison",
    role: "Cofounder Consultant-In Common",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f6803ccd3ed90002bca2.png",
  },
  {
    name: "Justine Clarke",
    role: "Software Engineer – Liberty Mutual",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f680720c803490fc708e.png",
  },
  {
    name: "Stephanie Davis",
    role: "IT Director - Support Center & Incident Management Operations – TIAA Bank",
    imgSrc:
      "https://storage.googleapis.com/msgsndr/isV4FSMuMQ1b68WLmJdq/media/67f7f680720c80d75bfc708d.png",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  let firstSlideIndex = 14;
  let isScrolling = false;
  let slider = document.querySelector("#sliding-carousel");
  let slidingContainer = slider.querySelector(".slides-container");

  let nextButton = slider.querySelector(".next-btn");
  let backButton = slider.querySelector(".back-btn");

  backButton.onclick = () => {
    if (!isScrolling) updateSlideIndex(-1, "back");
  };

  nextButton.onclick = () => {
    if (!isScrolling) updateSlideIndex(1, "next");
  };
  initSlideIndex(0, "init");

  function initSlideIndex(value) {
    firstSlideIndex = (firstSlideIndex + value + slides.length) % slides.length;
    const indices = "01234".split("").map((i) => {
      return (firstSlideIndex + parseInt(i)) % slides.length;
    });

    slidingContainer.innerHTML = indices
      .map((index) => getSlide(index))
      .map((slide) => slide.outerHTML)
      .join("");

    slidingContainer.scrollTo({
      left: slidingContainer.offsetWidth / indices.length,
      behavior: "instant",
    });
    setFocusedSlide(value);

    enableControls(true);
  }

  function updateSlideIndex(value) {
    enableControls(false);
    setScrollPosition(value);
    setFocusedSlide(value);
    firstSlideIndex = (firstSlideIndex + value + slides.length) % slides.length;

    setTimeout(() => {
      const newChildIndex =
        (firstSlideIndex + (value == 1 ? 4 : 0)) % slides.length;
      const newChild = getSlide(newChildIndex);
      const removePosition = value == 1 ? "first" : "last";

      slidingContainer.removeChild(
        slidingContainer.querySelector(`.slide:${removePosition}-child`)
      );

      value == 1
        ? slidingContainer.appendChild(newChild)
        : slidingContainer.prepend(newChild);

      slidingContainer.scrollTo({
        left: Math.floor(slidingContainer.scrollWidth / 5),
        behavior: "instant",
      });

      setTimeout(() => {
        enableControls(true);
      }, 1100);
    }, 900);
  }

  function getSlide(index) {
    const slide = slides[index];

    let slideElement = document.createElement("div");
    slideElement.classList.add(index);
    slideElement.classList.add("slide");

    let imgElement = document.createElement("img");
    imgElement.src = slide.imgSrc;
    imgElement.alt = slide.name;

    let nameElement = document.createElement("h1");
    nameElement.textContent = slide.name;

    let roleElement = document.createElement("p");
    roleElement.textContent = slide.role;

    slideElement.appendChild(imgElement);
    slideElement.appendChild(nameElement);
    slideElement.appendChild(roleElement);
    return slideElement;
  }

  function setScrollPosition(value) {
    slidingContainer.scrollBy({
      left: value * slidingContainer.offsetWidth,
      behavior: "smooth",
    });
  }

  function setFocusedSlide(value) {
    [...slidingContainer.children].forEach((child, index) => {
      if (index == 2 + value) {
        child.style.scale = 1.1;
      } else {
        child.style.scale = 1;
      }
    });
  }
  function enableControls(state) {
    isScrolling = !state;
    nextButton.disabled = state;
    backButton.disabled = state;
    slider.onwheel = state
      ? (event) => {
          if (!isScrolling) {
            const xValue = Math.sign(event.deltaX);
            let direction = [-1, 1].includes(xValue) ? "next" : "init";
            updateSlideIndex(xValue, direction);
          }
        }
      : null;
  }
});
