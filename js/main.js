const date = function(a) {
  return (Math.round(a / 31536000) + 1970);
}
let elList = document.querySelector(".list");

function appendToDom(array,node) {
  for (items of array) {
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

    node.appendChild(newItem);
  }
}

appendToDom(films, elList)

let elSelect = document.querySelector('.js-select')

let result = []
elSelect.addEventListener("change", ()=> {
  result = [];
  elList.innerHTML = "";
  let elSelectVal = elSelect.value
  films.forEach((res) => {
    if(res.genres.includes(elSelectVal)) {
      result.push(res)
    }
  })
  appendToDom(result,elList)
})


let optionList = new Set();

films.forEach((item) => {
  optionList.add(...item.genres);
});

optionList.forEach((elment) => {
  let newOption = document.createElement("option");
  newOption.textContent = elment;
  newOption.value = elment;
  elSelect.appendChild(newOption)
});