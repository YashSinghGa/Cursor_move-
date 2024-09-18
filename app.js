let image = document.getElementById("image");
let message = document.getElementById("message");

image.addEventListener("mousemove", (e) => {
  message.textContent += "\nHI";

  let newElement = document.createElement("div");
  newElement.className = "dot";
  document.body.insertBefore(newElement, image);
  newElement.style.top = `${e.clientY}px`;
  newElement.style.left = `${e.clientX}px`;
});
// background.addEventListener("mousemove", onmousemove);
