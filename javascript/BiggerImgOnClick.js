var background = document.getElementById("my-background-overlay");

// Get the image and insert it inside the modal
var image = document.getElementById("to-bigger-img");
var expandedImg = document.getElementById("img-ref");
var captionText = document.getElementById("bigger-img-caption");

function ExpandImage(img) //param = num
{
  background.style.display = "block";

  let thisImage = img.src;
  expandedImg.src = thisImage;

  let thisCaption = img.alt;
  captionText = thisCaption;
}

function CloseImage()
{
  background.style.display = "none";
}