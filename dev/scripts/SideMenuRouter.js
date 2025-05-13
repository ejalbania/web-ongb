var Environment = Object.freeze({
  Development: "Development",
  Production: "Production",
  getCurrent() {
    return window.location.hostname === `drnyeishadewitt.com`
      ? Environment.Production
      : Environment.Development;
  },

  getPath(prod, dev) {
    return this.getCurrent() == this.Production ? prod : dev;
  },

  getOrigin() {
    return Environment.getCurrent() == Environment.Production
      ? "https://www.drnyeishadewitt.com/"
      : "https://app.gohighlevel.com/v2/preview";
  },
});

var PathPatterns = {
  host: Environment.getOrigin(),
  home: Environment.getPath("home", "U3KbXBfqtMkjyAr8g4iz"),
  about: Environment.getPath("about", "ykbqA8U0ZGgFBGbfbpSw"),
  media: Environment.getPath("media", ""),
  connect: Environment.getPath("connect", ""),
  contact: Environment.getPath("contact", ""),

  getURL(path) {
    return `${this.host}/${path}`;
  },
};

var Pages = Object.freeze({
  homepage() {
    return PathPatterns.home;
  },
  aboutpage() {
    return PathPatterns.about;
  },
  mediapage() {
    return PathPatterns.media;
  },
  connectpage() {
    return PathPatterns.connect;
  },
  contactpage() {
    return PathPatterns.contact;
  },
});

class Router {
  static routeTo(page) {
    // document
    //   .querySelector("#supporter-tags-container")
    //   .setAttribute("animate", "out");
    window.open(PathPatterns.getURL(page), "_self");
  }

  static getURL(page) {
    return PathPatterns.getURL(page);
  }

  static getPages() {
    return Object.keys(PathPatterns).filter((key) => {
      return !["host", "getURL"].includes(key, 0);
    });
  }
}

export { Router, Pages, PathPatterns, Environment };
