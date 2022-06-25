let arr = JSON.parse(localStorage.getItem("Products")) || [];
function appendfunc(main, counter) {
  //   let main = document.querySelector("#box");
  //   let counter = document.querySelector("#counter");
  counter.innerHTML = `COUNT: ${arr.length}`;
  main.innerHTML = null;
  arr.forEach(function (elem, index) {
    let div1 = document.createElement("div");
    div1.setAttribute("class", "product");
    let image = document.createElement("img");
    image.src = elem.image;
    let name = document.createElement("h1");
    name.innerText = `bramd: ${elem.name}`;
    let category = document.createElement("h1");
    category.innerText = `category: ${elem.category}`;

    let gender = document.createElement("h1");
    gender.innerText = `Gender: ${elem.gender}`;

    let price = document.createElement("h1");
    price.innerText = `Price: ${elem.price}`;

    let div2 = document.createElement("div");

    div2.setAttribute("id", "div2");
    let btn1 = document.createElement("button");
    btn1.innerText = "Remove";

    btn1.setAttribute("id", "remove");
    btn1.onclick = () => {
      deletefun(index);
    };
    let btn2 = document.createElement("button");
    if (elem.sold == true) {
      btn2.style.background = "red";
    } else {
      btn2.style.background = "green";
    }
    btn2.innerText = "Sold";
    btn2.setAttribute("id", "sold");
    btn2.onclick = () => {
      toggle(elem, btn2);
    };
    div2.append(btn1, btn2);

    div1.append(image, name, category, gender, price, div2);
    main.append(div1);
  });
}

let deletefun = (index) => {
  arr.splice(index, 1);
  localStorage.setItem("Products", JSON.stringify(arr));
  window.location.reload();
};
let toggle = (elem, btn2) => {
  if (elem.sold == true) elem.sold = false;
  else elem.sold = true;
  window.location.reload();
  localStorage.setItem("Products", JSON.stringify(arr));
};
export default appendfunc;
