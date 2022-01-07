function headerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<header class="header">
  <a href="./index.html" class="header__logo-home-link">
    <img src="./images/logo.png" alt="logo" class="header__logo" />
  </a>
  <div class="header__open-nav-menu">
    <div class="header__hamburger-top-bread"></div>
    <div class="header__hamburger-patty"></div>
    <div class="header__hamburger-bottom-bread"></div>
  </div>
  <nav class="header__desktop-nav-container">
    <a href="./portfolio.html" class="header__desktop-nav-item"
      >Portfolio</a
    >
    <a href="./servicios.html" class="header__desktop-nav-item"
      >Servicios</a
    >
    <a href="./contacto.html" class="header__desktop-nav-item"
      >Contacto</a
    >
  </nav>
  <div class="header__nav-menu">
    <div class="header__close-nav-menu-cont">
      <div class="header__close-nav-menu">×</div>
    </div>
    <div class="header__nav-menu-item-cont">
      <a href="./portfolio.html" class="header__nav-menu-item"
        >Portfolio</a
      >
      <a href="./servicios.html" class="header__nav-menu-item"
        >Servicios</a
      >
      <a href="./contacto.html" class="header__nav-menu-item"
        >Contacto</a
      >
    </div>
  </div>
</header>`;

  const openMenu = componentEl.querySelector(".header__open-nav-menu");
  const menu = componentEl.querySelector(".header__nav-menu");
  openMenu.addEventListener("click", (e) => {
    menu.style.display = "initial";
    openMenu.style.display = "none";
  });
  menu.addEventListener("click", (e) => {
    menu.style.display = "";
    openMenu.style.display = "";
  });

  el.appendChild(componentEl);
}
