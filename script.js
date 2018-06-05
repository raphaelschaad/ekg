function show(videoId) {
  let video = document.getElementById(videoId);
  for (let element of video.children) {
    element.style.visibility = 'visible';
  }
}

function hide(videoId) {
  let video = document.getElementById(videoId);
  for (let element of video.children) {
    element.style.visibility = 'hidden';
  }
}
