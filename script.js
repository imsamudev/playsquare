window.onload = () => {
  const caja = document.getElementById("caja");
  let rotation = 0;

  const rotateBox = (direction) => {
    rotation += direction;
    caja.style.transform = `rotate(${rotation}deg)`;
  };

  const cambiarTamaño = function (direction) {
    ["width", "height"].forEach((p) => {
      const nuevoTamaño =
        parseInt(window.getComputedStyle(caja)[p]) + direction;
      caja.style[p] =
        (nuevoTamaño <= 400 && nuevoTamaño >= 100
          ? nuevoTamaño
          : parseInt(caja.style[p])) + "px";
    });
  };

  document.querySelectorAll(".control").forEach((b) => {
    b.addEventListener("click", () =>
      cambiarTamaño(parseInt(b.dataset.action))
    );
    b.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        cambiarTamaño.call(b, e.key === "ArrowUp" ? 10 : -10);
      }
    });
  });

  document
    .getElementById("reset")
    .addEventListener("click", () =>
      ["width", "height"].forEach((p) => (caja.style[p] = "200px"))
    );
  document
    .getElementById("resetColor")
    .addEventListener("click", () => (caja.style.backgroundColor = "white"));

  document.querySelectorAll(".color").forEach((c) => {
    c.addEventListener(
      "click",
      () =>
        (caja.style.backgroundColor =
          window.getComputedStyle(c).backgroundColor)
    );
  });

  document
    .getElementById("right")
    .addEventListener("click", () => rotateBox(20));
  document
    .getElementById("left")
    .addEventListener("click", () => rotateBox(-20));
  document.getElementById("resetRotate").addEventListener("click", () => {
    rotation = 0;
    caja.style.transform = `rotate(${rotation}deg)`;
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") rotateBox(20);
    if (e.key === "ArrowLeft") rotateBox(-20);
    if (e.key === "ArrowUp") cambiarTamaño(50);
    if (e.key === "ArrowDown") cambiarTamaño(-50);
  });
};
