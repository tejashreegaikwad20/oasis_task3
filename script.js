var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//  close button 
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul'); 
list.addEventListener('click', function(el)//adding "checked" symbol
 {
  if (el.target.tagName === 'LI') {
    el.target.classList.toggle('checked');
  }
}, false);

// Create a new item  => "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input_part").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  
  if (inputValue === '') {
    alert("fist add the task !");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input_part").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
Foote