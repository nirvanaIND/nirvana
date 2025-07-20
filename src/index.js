const toggleMenu = () => {
  const menu = document.getElementById("menu");
  const menuContent = document.getElementById("menuContent");
  menu.style.display = "none";
  menuContent.style.display = "block";
};
const toggleMenuContent = () => {
  const menu = document.getElementById("menu");
  const menuContent = document.getElementById("menuContent");
  menu.style.display = "block";
  menuContent.style.display = "none";
};
