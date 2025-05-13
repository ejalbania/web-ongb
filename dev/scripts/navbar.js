let navbarTag = `
        <li class="menu-item">
          <a
            href="https://girlsequitymovement.org/"
            style="animation-delay: 70ms"
            ><span>Home</span></a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://girlsequitymovement.org/about/"
            style="animation-delay: 140ms"
            ><span>About</span></a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://girlsequitymovement.org/gems/"
            style="animation-delay: 210ms"
            ><span>GEMs</span></a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://girlsequitymovement.org/refined-gems-2024/"
            style="animation-delay: 280ms"
            ><span>Apply Here</span></a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://girlsequitymovement.org/membership/"
            style="animation-delay: 350ms"
            ><span>Join Us</span></a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://girlsequitymovement.org/support/"
            style="animation-delay: 420ms"
            ><span>Support Us</span></a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://girlsequitymovement.org/about-our-supporters/"
            style="animation-delay: 490ms"
            ><span>Our Supporters</span></a
          >
        </li>
        <li class="menu-item">
          <a
            href="https://girlsequitymovement.org/contact-us/"
            style="animation-delay: 560ms"
            ><span>Contact Us</span></a
          >
        </li>
      </ul>
      `;

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  const menuButton = document.querySelector("#ej-brgr-btn");
  const menuButtonIcon = menuButton.querySelector("#brgr-btn-icon");
  const navMenu = document.createElement("div");

  navMenu.id = "navmenu";

  menuButton.addEventListener("click", () => {
    console.log(menuButton);

    if (menuButton.classList.contains("active")) {
      menuButton.classList.remove("active");
      navbar.classList.remove("active");
      navMenu.classList.remove("visible");
    } else {
      menuButton.classList.add("active");
      navbar.classList.add("active");
      navMenu.classList.add("visible");
    }
  });
  navMenu.innerHTML = navbarTag;
  document.body.appendChild(navMenu);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("fade-in-animated")) {
          entry.target.classList.add("fade-in-show");

          console.log("fade-in-show");
        } else {
          entry.target.classList.add("slide-in-show");
        }

        if (entry.target.classList.contains("stepping-number")) {
          let element = entry.target.querySelector(".stepper-value");
          let dataValue = parseInt(
            entry.target.querySelector(".counter-element").getAttribute("data")
          );
          let dataIncrement = parseInt(
            entry.target
              .querySelector(".counter-element")
              .getAttribute("data-increment")
          );
          numberStepper(element, dataValue, dataIncrement);

          console.log("stepping-number");
        }
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "80px" }
);

console.log("Test");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded 36");
  const leftTransition = document.querySelectorAll(".left-transition");
  const rightTransition = document.querySelectorAll(".right-transition");
  const fadeInTransition = document.querySelectorAll(".fade-in-transition");
  const steppingNumber = document.querySelectorAll(".stepping-number");

  console.log("rightTransition", rightTransition);

  leftTransition.forEach((element) => {
    element.classList.add("slide-in-from-left-animated");
    observer.observe(element);

    element.classList.remove("left-transition");
  });

  rightTransition.forEach((element) => {
    element.classList.add("slide-in-from-right-animated");
    console.log("right transition", element);
    observer.observe(element);

    element.classList.remove("right-transition");
  });

  fadeInTransition.forEach((element) => {
    element.classList.add("fade-in-animated");
    observer.observe(element);

    element.classList.remove("fade-in-transition");
  });

  steppingNumber.forEach((element) => {
    observer.observe(element);
  });
});

function stepper(
  min,
  max,
  duration,
  increment = 1,
  callback,
  completion = () => {}
) {
  var current = min;

  var timer = setInterval(() => {
    current += increment;

    if (current >= max) {
      callback(max);
      clearInterval(timer);
      completion();
    } else {
      callback(current);
    }
  }, duration);
}

function numberStepper(element, value, increment) {
  stepper(0, value, 32, increment, (count) => {
    element.textContent = count;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let menuButtons = document.querySelectorAll(".ej-brgr-btn");
  let navBar = document.querySelector(".navbar");

  let navMenu = document.createElement("div");
  navMenu.id = "navmenu";
  navMenu.innerHTML = navbarTag;
  document.querySelector("#__nuxt").appendChild(navMenu);

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (menuButtons.classList.contains("active")) {
        menuButtons.classList.remove("active");
        navBar.classList.remove("active");
        navMenu.classList.remove("visible");
      } else {
        menuButtons.classList.add("active");
        navBar.classList.add("active");
        navMenu.classList.add("visible");
      }
    });
  });
});
