function toggleSideNavigationMenu() {
  const target = document.getElementById("sideNavigationMenu");
  const targetClassName = target.className;
  target.className =
    targetClassName === "nav-menu-background-open"
      ? "nav-menu-background-close"
      : "nav-menu-background-open";
  return;
}
