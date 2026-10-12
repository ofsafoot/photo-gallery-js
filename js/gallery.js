function upDate(previewPic) {
  console.log(previewPic.alt);
  console.log(previewPic.src);

  let image = document.getElementById("image");
  image.innerHTML = previewPic.alt;
  image.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  let image = document.getElementById("image");
  image.innerHTML = "Hover over an image below to display here.";
  image.style.backgroundImage = "url('')";
}
