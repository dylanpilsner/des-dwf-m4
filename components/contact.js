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

  myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const data = { to: form.email.value, message: form.message.value };

    form.name.value = "";
    form.email.value = "";
    form.message.value = "";

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    const status = form.querySelector(".contact__form-status");
    if (data.to !== "" && data.message !== "") {
      status.textContent = "Su mensaje se ha enviado correctamente!";
    } else if (data.to == "" && data.message == "") {
      status.textContent = "Por favor, complete los campos email y mensaje";
      status.style.color = "red";
    } else if (data.to == "") {
      status.textContent = "Por favor, ingrese un destinatario";
      status.style.color = "red";
    } else if (data.message == "") {
      status.textContent = "Por favor, ingrese un mensaje";
      status.style.color = "red";
    }
  });

  el.appendChild(componentEl);
}
