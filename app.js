function toggleSideNavigationMenu() {
  const target = document.getElementById("sideNavigationMenu");
  const targetClassName = target.className;
  target.className =
    targetClassName === "nav-menu-background-open"
      ? "nav-menu-background-close"
      : "nav-menu-background-open";

  const menuButton = document.getElementById("navbar-menu-button");
  menuButton.innerHTML =  targetClassName === "nav-menu-background-open"
      ? "MENU"
      : "CLOSE";
  return;
}
