
function nextPicture() {
  var img = document.getElementById("changeImage");
  index = index % xmasImages.length;
  img.src = xmasImages[index];
  index++;
}


function previousPicture() {
  var img = document.getElementById("changeImage");
  if (index == 1) {
    index = 6;
  } else {
    index = index - 1;
  img.src = xmasImages[index];
  }
}

var xmasImages = ["xmas1.jpg", "xmas2.jpg", "xmas3.jpg", "xmas4.jpg", "xmas5.jpg", "mxas6.jpg", "xmas7.jpg"];
var index = 1;


function onmouseover() {
  alert("we are an organization dedicated to helping those who lack the basic necesities we take for granted in our everyday lives.");
}

 // function alertBox() {
 //   if (window.confirm) {
 //     window.location.href='https://www.google.com';
 //   }
   // var str = "supply list";
   // var result = str.link("https://www.w3schools.com");
   // alert("thank you for clicking to see our" + str);
//   //Users/girlswhocode/Desktop/html/xmasSupplies.html
// }
