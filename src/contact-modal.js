const modal = document.getElementById("myHeroModal");

const btn = document.getElementById("openHeroModalBtn");

const span = document.getElementsByClassName("closeheromodal")[0];

const closecontactmodal = document.getElementsByClassName("closesendmodal")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

closecontactmodal.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




