class MenuItem {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  generateElement() {
    let item = document.createElement("li");
    item.classList.add("menu-item");
    item.innerHTML = `
      <a href=${this.link}>
        <span>${this.name.toUpperCase()}</span>
      </a>`;

    return item;
  }
}

class MenuList {
  constructor(items) {
    this.items = items;
  }

  generateElement() {
    let list = document.createElement("ul");
    list.classList.add("menu-list");

    this.items.forEach((item) => {
      list.appendChild(item.generateElement());
    });

    return list;
  }
}

class SideMenu {
  constructor(id, items) {
    this.id = id;

    this.menuList = new MenuList(
      items.map((item) => new MenuItem(item.name, item.link))
    );
    document.addEventListener("DOMContentLoaded", () => {
      this.initComponents();
      this.setupListeners();
    });
  }

  initComponents() {
    let mainView = document.querySelector("body");

    let navMenu = document.createElement("div");
    navMenu.id = "nav-menu";
    navMenu.innerHTML = `
      <div id="menu-bar">
        <button class="exit-btn">
          <svg id="menu-bar-exit" width="60" height="60" viewBox="0 0 60 60">
            <path d="M1.5 1.5L58.5 58.5M58.5 1.5L1.5 58.5" />
          </svg>
        </button>
      </div>`;

    mainView.appendChild(navMenu);

    document
      .querySelector(`#${this.id}`)
      .appendChild(this.menuList.generateElement());
  }

  setupListeners() {
    this.hamburgerBtn = document.querySelector("#nav-bar .hamburger");
    this.exitBtn = document.querySelector("#nav-menu .exit-btn");

    this.hamburgerBtn.onclick = this.openMenu;
    this.exitBtn.onclick = this.closeMenu;
  }

  openMenu() {
    document.querySelector("#nav-menu").setAttribute("visible", "");
  }

  closeMenu() {
    document.querySelector("#nav-menu").setAttribute("disappearing", "");

    setTimeout(() => {
      document.querySelector("#nav-menu").removeAttribute("visible");
      document.querySelector("#nav-menu").removeAttribute("disappearing");
    }, 500);
  }
}

export { SideMenu, MenuItem, MenuList };
