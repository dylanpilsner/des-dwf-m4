function main() {
  const headerContainer = document.querySelector(".header-container");
  const contactContainer = document.querySelector(".contact-content");
  const footerContainer = document.querySelector(".footer-content");
  headerComponent(headerContainer);
  contactComponent(contactContainer);
  footerComponent(footerContainer);
  document.querySelector(".title--form").textContent = "Contacto";
}

main();
