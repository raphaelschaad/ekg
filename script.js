function showElement(element) {
  element.style.visibility = 'visible';
}

function hideElement(element) {
  element.style.visibility = 'hidden';
}

function show(id) {
  const elements = document.getElementsByClassName(id);
  console.log(elements);
  for (let element of elements) {
    showElement(element);
  }
}

function hide(id) {
  const elements = document.getElementsByClassName(id);
  for (let element of elements) {
    hideElement(element);
  }
}

function toggleVisibility(id) {
  const elements = document.getElementsByClassName(id);
  for (let element of elements) {
    if (element.style.visibility === 'visible') {
      hideElement(element);
    } else if (element.style.visibility === 'hidden') {
      showElement(element);
    } else {
      console.log('Unknown visibility for element:');
      console.log(element);
    }
  }
}
