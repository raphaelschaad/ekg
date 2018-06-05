function show(id) {
  let elements = document.getElementsByClassName(id);
  console.log(elements);
  for (let element of elements) {
    element.style.visibility = 'visible';
  }
}

function hide(id) {
  let elements = document.getElementsByClassName(id);
  for (let element of elements) {
    element.style.visibility = 'hidden';
  }
}
