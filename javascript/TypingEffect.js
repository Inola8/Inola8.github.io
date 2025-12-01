var i = 0;
var txt = 'Typing effect!';
var speed = 50; // in milliseconds

function typeWriter()
{
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}