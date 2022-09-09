document.getElementById("footerYear").innerText = new Date().getFullYear();
// dark mode
const checkBox = document.getElementById("checkBox");

checkBox.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

function chat() {
  const whatsapp = `https://wa.me/62895638069206`;
  open(whatsapp, `_blank`);
}
