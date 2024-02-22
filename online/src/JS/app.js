const modal = document.querySelector(".modal");
const netAbout = document.querySelector(".netAbout");
const wifi = document.querySelector("i");

function hideModal() {
  modal.style.display = "none";
}

if (navigator.onLine) {
  modal.style.display = "block";
  setTimeout(hideModal, 2000);
}

window.addEventListener("online", () => {
  modal.style.display = "block";
  netAbout.textContent = "You are online!";
  wifi.style.color = "green";
  setTimeout(hideModal, 2000);
});

window.addEventListener("offline", () => {
  modal.style.display = "block";
  netAbout.textContent = "You are offline!";
  wifi.style.color = "red";

});