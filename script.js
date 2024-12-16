// dropdown function

function dropdown(element, icon) {
  myId = document.getElementById(element);
  TurnArrow = document.getElementById(icon);
  if (myId.classList.contains("show")) {
    myId.classList.remove("show");
    myId.classList.add("hide");
    TurnArrow.classList.remove("turn");
  } else {
    myId.classList.remove("hide");
    myId.classList.add("show");
    TurnArrow.classList.add("turn");
  }
}
