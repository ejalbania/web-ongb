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
