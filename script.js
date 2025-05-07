// Change text content
function changeText() {
  document.getElementById("message").textContent = "Text has been changed!";
}

// Modify CSS style
function changeStyle() {
  document.getElementById("title").style.color = "crimson";
  document.body.style.backgroundColor = "#f0f0f0";
}

// Add a new element
function addElement() {
  const newPara = document.createElement("p");
  newPara.id = "dynamicPara";
  newPara.textContent = "I'm a new paragraph added dynamically!";
  document.body.appendChild(newPara);
}

// Remove the added element
function removeElement() {
  const elem = document.getElementById("dynamicPara");
  if (elem) {
    elem.remove();
  }
}
