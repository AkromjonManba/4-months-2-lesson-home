
let elList = document.querySelector(".js-list");

const date = function(a) {
  return (Math.round(a / 31536000) + 1970);
}

for (items of films) {
  let newItem = document.createElement("li");
  let elTitle = document.createElement("h2");
  let elId = document.createElement("span");
  let elImg = document.createElement("img");
  let elGenres = document.createElement("p");
  let elOverview = document.createElement("p");
  let data = document.createElement("time");
  elTitle.textContent = `${items.title}`;
  elId.textContent = `${items.id}`;
  elImg.src = `${items.poster}`;
  elGenres.textContent = `action: ${items.genres}`;
  elOverview.textContent = `${items.overview}`;
  data.textContent = `Release date of the film: ${date(items.release_date)}`;

  elImg.setAttribute('class','img')
  newItem.setAttribute('class','box')


  newItem.appendChild(elImg)
  newItem.appendChild(elTitle)
  newItem.appendChild(elId)
  newItem.appendChild(elGenres)
  newItem.appendChild(elOverview)
  newItem.appendChild(data)


  elList.appendChild(newItem);
}
