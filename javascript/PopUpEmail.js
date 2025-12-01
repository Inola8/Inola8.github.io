// Toggles the passed button from OFF to ON and vice-versa.
function toggle(button)
{
  if (button.value == "OFF")
  {
    button.value = "ON";
    document.getElementById("myForm").style.display = "block";
  }
  else
  {
    button.value = "OFF";
    document.getElementById("myForm").style.display = "none";
  }
}

function copyEmail()
{
  // Get the text 
  var copyText = document.getElementById("myInput");

  // Select the text 
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside 
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc()
{
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}