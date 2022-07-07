const addCollapseToggle = () => {
  const toggles = document.querySelectorAll("[toggle=collapse]");
  console.log(toggles);
  toggles.forEach((toggle) => {
    const targetQuery = toggle.getAttribute("target");
    console.log("targetQuery, ", targetQuery);
    const targets = document.querySelectorAll(targetQuery);
    console.log("targets, ", targets);
    targets.forEach((target) => {
      target.classList.add("collapse-target");
    });
    toggle.addEventListener("click", () => {
      targets.forEach((target) => {
        console.log("toggle", toggle);
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
