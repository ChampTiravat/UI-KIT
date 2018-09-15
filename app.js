function toggleSideNavigationMenu() {
    const target = document.getElementById("sideNavigationMenu")
    const targetClassName = target.className
    console.log(targetClassName)
    target.className = targetClassName === "nav-menu-background"
        ? "nav-menu-background-close"
        : "nav-menu-background"
    return
}
