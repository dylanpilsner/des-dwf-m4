function footerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<footer class="footer">
  <img src="./images/logo.png" alt="" class="logo__footer" />
  <div class="footer__social-medias">
    <a
      href="https://www.instagram.com/dylan.pilsner/"
      class="footer__instagram-link"
    >
      <img
        src="./images/instagram-logo.png"
        alt="instagram"
        class="footer__social-media-logo"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/dylan-pilsner/"
      class="footer__linkedin-link"
    >
      <img
        src="./images/linkedin-logo.png"
        alt="linkedin"
        class="footer__social-media-logo"
      />
    </a>
    <a href="https://github.com/dylanpilsner" class="footer__github-link">
      <img
        src="./images/github-logo.png"
        alt="github"
        class="footer__social-media-logo"
      />
    </a>
  </div>
</footer>`;

  el.appendChild(componentEl);
}
