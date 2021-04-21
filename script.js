//There is so much repetitive code. Sorry for that! All the code will be refactored soon! //

const mainTabs = document.querySelector(".main-tabs");
const mainSliderCircle = document.querySelector(".main-slider-circle");
const roundButtons = document.querySelectorAll(".round-button");

const colors = {
  blue: {
    50: {
      value: "#e3f2fd",
    },
    100: {
      value: "#bbdefb",
    },
  },
  green: {
    50: {
      value: "#e8f5e9",
    },
    100: {
      value: "#c8e6c9",
    },
  },
  purple: {
    50: {
      value: "#f3e5f5",
    },
    100: {
      value: "#e1bee7",
    },
  },
  orange: {
    50: {
      value: "#ffe0b2",
    },
    100: {
      value: "#ffe0b2",
    },
  },
  red: {
    50: {
      value: "#ffebee",
    },
    100: {
      value: "#ffcdd2",
    },
  },
};

const getColor = (color, variant) => {
  return colors[color][variant].value;
};

const handleActiveTab = (tabs, event, className) => {
  tabs.forEach((tab) => {
    tab.classList.remove(className);
  });

  if (!event.target.classList.contains(className)) {
    event.target.classList.add(className);
  }
};

mainTabs.addEventListener("click", (event) => {
  const root = document.documentElement;
  const targetColor = event.target.dataset.color;
  const targetTranslateValue = event.target.dataset.translateValue;
  const ac = document.getElementsByClassName("address-container");

  if (event.target.classList.contains("round-button")) {
    mainSliderCircle.classList.remove("animate-jello");
    void mainSliderCircle.offsetWidth;
    mainSliderCircle.classList.add("animate-jello");

    root.style.setProperty("--translate-main-slider", targetTranslateValue);
    root.style.setProperty("--main-slider-color", getColor(targetColor, 50));
    root.style.setProperty("--background-color", getColor(targetColor, 100));

    handleActiveTab(roundButtons, event, "active");

    if (event.target.classList.contains("profile")) {
      root.style.setProperty("--profile-container-display", "block");
    } else {
      root.style.setProperty("--profile-container-display", "none");
    }

    if (event.target.classList.contains("address")) {
      root.style.setProperty("--address-container-display", "block");
      root.style.setProperty("--address-container-opacity", "1");
    } else {
      root.style.setProperty("--address-container-display", "none");
      root.style.setProperty("--address-container-opacity", "0");
    }

    if (event.target.classList.contains("gallery")) {
      root.style.setProperty("--gallery-container-display", "block");
    } else {
      root.style.setProperty("--gallery-container-display", "none");
    }

    if (event.target.classList.contains("skills")) {
      root.style.setProperty("--skills-container-display", "block");
    } else {
      root.style.setProperty("--skills-container-display", "none");
    }

    if (event.target.classList.contains("contact")) {
      root.style.setProperty("--contact-container-display", "block");
    } else {
      root.style.setProperty("--contact-container-display", "none");
    }
  }
});
