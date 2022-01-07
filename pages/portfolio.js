function addWork(param) {
  const template = document.querySelector("#portfolio__card-template");
  const container = document.querySelector(".portfolio");
  template.content.querySelector(".portfolio__card-title").textContent =
    param.title;
  template.content.querySelector(".portfolio__card-text").textContent =
    param.description;
  template.content.querySelector(".portfolio__card-img").src = param.image;
  template.content.querySelector(".portfolio__card-link").href = param.url;
  var clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getPortfolioData() {
  return fetch(
    "https://cdn.contentful.com/spaces/n78vv1r6yy69/environments/master/entries?access_token=EbyMSWQ_mT5RglLlwECaIKlxTJsCb35BsVvE9ft75t0&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const dataArray = data.items.map((i) => {
        return {
          title: i.fields.title,
          description: i.fields.description,
          url: i.fields.url,
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
  const footerContainer = document.querySelector(".footer-content");
  headerComponent(headerContainer);
  footerComponent(footerContainer);

  getPortfolioData().then((works) => {
    for (let w of works) {
      addWork(w);
    }
  });
}

main();
