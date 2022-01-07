function addPresentation(param) {
  const template = document.querySelector("#about-me__template");
  const container = document.querySelector(".about-me-cont");
  template.content.querySelector(".about-me__title").textContent = param.title;
  template.content.querySelector(".about-me__text").textContent =
    param.description;
  template.content.querySelector(".about-me__pic").src = param.image;
  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function addService(param) {
  const template = document.querySelector("#services__card-template");
  const container = document.querySelector(".services__card-content");
  template.content.querySelector(".services__card-title").textContent =
    param.title;
  template.content.querySelector(".services__card-text").textContent =
    param.description;
  template.content.querySelector(".services__card-img").src = param.image;
  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getData(fetchURL) {
  return fetch(fetchURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const dataArray = data.items.map((i) => {
        return {
          title: i.fields.title,
          description: i.fields.description,
          imageId: i.fields.image.sys.id,
          includes: data.includes.Asset,
        };
      });
      dataArray.forEach((i) => {
        var idEncontrado = matchImageId(i.imageId, i.includes);
        i.image = idEncontrado.fields.file.url;
      });

      return dataArray;
    });
}

function matchImageId(imageId, includes) {
  return includes.find((i) => {
    return i.sys.id == imageId;
  });
}

function main() {
  const headerContainer = document.querySelector(".header-container");
  const contactContainer = document.querySelector(".contact-content");
  const footerContainer = document.querySelector(".footer-content");
  headerComponent(headerContainer);
  contactComponent(contactContainer);
  footerComponent(footerContainer);
  getData(
    "https://cdn.contentful.com/spaces/n78vv1r6yy69/environments/master/entries?access_token=EbyMSWQ_mT5RglLlwECaIKlxTJsCb35BsVvE9ft75t0&content_type=presentation"
  ).then((presentation) => {
    for (let p of presentation) {
      addPresentation(p);
    }
  });

  getData(
    "https://cdn.contentful.com/spaces/n78vv1r6yy69/environments/master/entries?access_token=EbyMSWQ_mT5RglLlwECaIKlxTJsCb35BsVvE9ft75t0&content_type=services"
  ).then((services) => {
    for (let s of services) {
      addService(s);
    }
  });
}

main();
