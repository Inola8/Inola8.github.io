// Start with projects active
filterSelection("filter-project");

function filterSelection(c)
{
  var x, i;
  x = document.getElementsByClassName("filterDiv");

  // Add the "show" to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show-filtered");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show-filtered");
  }
}

// Show filtered elements
function AddClass(element, name)
{
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function RemoveClass(element, name)
{
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  for (i = 0; i < arr2.length; i++)
  {
    while (arr1.indexOf(arr2[i]) > -1)
    {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Toggle active button
var btnContainer = document.getElementById("projectButtonContainer");
var btns = btnContainer.getElementsByClassName("project-btn");

for (var i = 0; i < btns.length; i++)
{
  btns[i].addEventListener("click", function()
  {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}