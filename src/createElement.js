function createElement(element = "div", content = "") {
  const newElement = document.createElement(element);

  newElement.insertAdjacentHTML("beforeend", content);

  return newElement;
}
