// Config Menu
const configMenu = document.querySelector("#configMenu");
const configBtn = document.querySelector("#configBtn");

function openAndCloseMenu(){
  configMenu.classList.toggle("openMenu");

  if(configMenu.classList.contains("openMenu")){
    configBtn.classList.add("configBtnOpen");
  } else {
    configBtn.classList.remove("configBtnOpen");
  }
}

configBtn.addEventListener("click", openAndCloseMenu);

window.addEventListener("keyup", (event) => {
  if(event.key === "Escape"){
    openAndCloseMenu();
  }
})

// Increase and Decrease Font-Size
const increasesBtn = document.querySelector("#increasesBtn");
const decreasesBtn = document.querySelector("#decreasesBtn");

const body = document.body;
const address = document.querySelector(".address");
const titles = document.querySelectorAll(".title");

increasesBtn.addEventListener("click", () => {
  let currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue("font-size"));
  body.style.fontSize = (currentFontSize + 2) + "px";

  let currentFontSizeAddress = parseFloat(window.getComputedStyle(address, null).getPropertyValue("font-size"));
  address.style.fontSize = (currentFontSizeAddress + 2) + "px";

  titles.forEach(title => {
    let currentFontSizeTitles = parseFloat(window.getComputedStyle(title, null).getPropertyValue("font-size"));
    title.style.fontSize = (currentFontSizeTitles + 2) + "px";
  })
});

decreasesBtn.addEventListener("click", () => {
  let currentFontSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue("font-size"));
  body.style.fontSize = (currentFontSize + -2) + "px";
  
  let currentFontSizeAddress = parseFloat(window.getComputedStyle(address, null).getPropertyValue("font-size"));
  address.style.fontSize = (currentFontSizeAddress + -2) + "px";

  titles.forEach(title => {
    let currentFontSizeTitles = parseFloat(window.getComputedStyle(title, null).getPropertyValue("font-size"));
    title.style.fontSize = (currentFontSizeTitles + -2) + "px";
  })
})