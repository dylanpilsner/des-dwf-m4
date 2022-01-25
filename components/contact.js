function getContactData() {}

function contactComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `<div class="contact">
  <h2 class="title title--form">Escribime</h2>
  <form class="contact__form">
    <label class="contact__form-label">
      <div class="contact__form-label-data">Nombre</div>
      <input type="text" name="name" class="contact__form-label-input" />
    </label>
    <label class="contact__form-label">
      <div class="contact__form-label-data">Email</div>
      <input type="email" name="email" class="contact__form-label-input" />
    </label>
    <label class="contact__form-label last-label">
      <div class="contact__form-label-data">Mensaje</div>
      <textarea name="message"
        class="contact__form-label-input contact__form-label-textarea"
      ></textarea>
    </label>
    <span class="contact__form-status"></span>
    <div class="contact__form-button-cont">
      <button class="contact__form-button">Enviar</button>
    </div>
  </form>
</div>`;

  const myForm = componentEl.querySelector(".contact__form");

  myForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = new FormData(myForm);

    const response = await fetch("https://formspree.io/f/mbjwdeoz", {
      method: "post",
      body: form,
      headers: { Accept: "application/json" },
    });

    const status = myForm.querySelector(".contact__form-status");
    if (myForm.message.value !== "" && myForm.email.value !== "") {
      status.textContent = "Su mensaje se ha enviado correctamente!";
      myForm.name.value = "";
      myForm.email.value = "";
      myForm.message.value = "";
    } else if (myForm.message.value == "" && myForm.email.value == "") {
      status.textContent = "Por favor, complete los campos email y mensaje";
      status.style.color = "red";
    } else if (myForm.email.value == "") {
      status.textContent = "Por favor, ingrese su email";
      status.style.color = "red";
    } else if (myForm.message.value == "") {
      status.textContent = "Por favor, ingrese un mensaje";
      status.style.color = "red";
    }
  });

  el.appendChild(componentEl);
}
