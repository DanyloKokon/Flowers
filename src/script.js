// Отримуємо модальне вікно
const modal = document.getElementById("myHeroModal");

// Отримуємо кнопку для відкриття модального вікна
const btn = document.getElementById("openHeroModalBtn");

// Отримуємо елемент <span> для закриття модального вікна
const span = document.getElementsByClassName("closeheromodal")[0];

// Коли користувач натискає на кнопку, відкриваємо модальне вікно
btn.onclick = function() {
  modal.style.display = "block";
}

// Коли користувач натискає на <span> (x), закриваємо модальне вікно
span.onclick = function() {
  modal.style.display = "none";
}

// Закриваємо модальне вікно, якщо користувач клацне за його межі
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




