// Get skillImage and Text to display
let images = document.getElementsByClassName("skillImage");
let texts = document.getElementsByClassName("skillText");
let skillNames = document.getElementsByClassName("skillName");

function ClickOnSkill(num)
{
  let image = images[num];
  let text = texts[num];
  let name = skillNames[num];

  image.style.visibility = "hidden";
  text.style.visibility = "visible";
  name.style.visibility = "hidden";
}