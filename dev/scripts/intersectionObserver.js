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

const leftTransition = document.querySelectorAll(".left-transition");
const rightTransition = document.querySelectorAll(".right-transition");
const fadeInTransition = document.querySelectorAll(".fade-in-transition");
const steppingNumber = document.querySelectorAll(".stepping-number");

leftTransition.forEach((element) => {
  element.classList.add("slide-in-from-left-animated");
  observer.observe(element);

  element.classList.remove("left-transition");
});

rightTransition.forEach((element) => {
  element.classList.add("slide-in-from-right-animated");
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
