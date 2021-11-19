var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


var order=document.getElementById('order');
var orderbtn=document.getElementById('order-btn');
var umair=document.getElementById('umair');
order.remove();

orderbtn.addEventListener('click', add);
function add(e){
  e.preventDefault();
 umair.appendChild(order);
  //console.log(umair)
}


