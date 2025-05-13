var Environment = Object.freeze({
  Development: "Development",
  Production: "Production",
  getCurrent() {
    return window.location.hostname === `girlsequitymovement.org`
      ? Environment.Production
      : Environment.Development;
  },

  getPath(prod, dev) {
    return this.getCurrent() == this.Production ? prod : dev;
  },

  getOrigin() {
    return Environment.getCurrent() == Environment.Production
      ? "https://www.girlsequitymovement.org"
      : "https://app.gohighlevel.com/v2/preview";
  },
});

var PathPatterns = {
  host: Environment.getOrigin(),
  home: Environment.getPath("home", "edz4ylD7YUehsYRrD9Ld"),
  about: Environment.getPath("about", "6iU8b3M9WngEsuCOZSWb"),
  gems: Environment.getPath("gems", "o4JuWPz0U4ujFzei84XB"),
  apply_here: Environment.getPath("apply_here", "IAZfvXhm13AFLo16vkZN"),
  join_us: Environment.getPath("join_us", "sIH4jlww3mawCaVuX4Nx"),
  support_us: Environment.getPath("support_us", "K9HZnHKbO5B7HAxkBGqS"),
  our_supporters: Environment.getPath("our_supporters", "rbKPpViT1FMiZzFPjI9j"),
  contact_us: Environment.getPath("contact_us", "Na2VhZkBBezXp6jZjsaF"),

  apply_form_2025: Environment.getPath(
    "apply_form_2025",
    "r6o5maMKufVFm46Kk6FG"
  ),

  getURL(path) {
    return `${this.host}/${path}`;
  },
};

var GEMsPage = Object.freeze({
  homepage() {
    return PathPatterns.home;
  },
  aboutpage() {
    return PathPatterns.about;
  },
  gemspage() {
    return PathPatterns.gems;
  },
  applyHerePage() {
    return PathPatterns.apply_here;
  },
  joinUsPage() {
    return PathPatterns.join_us;
  },
  supportUsPage() {
    return PathPatterns.support_us;
  },
  ourSupportersPage() {
    return PathPatterns.our_supporters;
  },
  contactUsPage() {
    return PathPatterns.contact_us;
  },
  applyForm2025Page() {
    return PathPatterns.apply_form_2025;
  },
});

class Router {
  static routeTo(page) {
    document
      .querySelector("#supporter-tags-container")
      .setAttribute("animate", "out");
    window.open(PathPatterns.getURL(page), "_self");
  }

  static getURL(page) {
    return PathPatterns.getURL(page);
  }
}
