const addCollapseToggle = () => {
  const toggles = document.querySelectorAll("[toggle=collapse]");
  console.log(toggles);
  toggles.forEach((toggle) => {
    const targetQuery = toggle.getAttribute("target");
    const targets = document.querySelectorAll(targetQuery);
    targets.forEach((target) => {
      target.classList.add("collapse-target");
    });
    toggle.addEventListener("click", () => {
      targets.forEach((target) => {
        target.classList.toggle("collapsed");
      });
    });
  });
};

const injector = () => {
  addCollapseToggle();
};

setTimeout(() => {
  injector();
  console.log("injector");
}, 0);
