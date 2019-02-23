function toggleSideNavigationMenu() {
  const target = document.getElementById("sideNavigationMenu");
  const targetClassName = target.className;
  target.className =
    targetClassName === "nav-menu-background-open"
      ? "nav-menu-background-close"
      : "nav-menu-background-open";

  const menuButton = document.getElementById("navbar-menu-button");
  menuButton.innerHTML =
    targetClassName === "nav-menu-background-open" ? "MENU" : "CLOSE";
  return;
}

function toggleModal() {
  const target = document.getElementById("subscribeModal");
  const targetClassName = target.className;
  target.className =
    targetClassName === "modal-background-open"
      ? "modal-background-close"
      : "modal-background-open";
}
