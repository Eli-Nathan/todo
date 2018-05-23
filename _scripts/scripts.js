document.addEventListener("DOMContentLoaded", function() {
  sortThem();
  addClose();
  // Create a "close" button and append it to each list item
  function addClose() {
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {

      ev.target.classList.toggle('checked');
      ev.target.innerHTML = "<span class='checkmark draw load-complete'></span>" + ev.target.innerHTML;
      sortThem();
      addClose();
    }
  }, false);
  document.getElementById("add").addEventListener("click", function() {
    // Create a new list item when clicking on the "Add" button
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    //making sure it still is an array
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    sortThem();
    addClose();
  });

  function sortThem() {
    var list = document.getElementById('myUL');

    var items = list.childNodes;
    var itemsArr = [];
    for (var i in items) {
      if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
      }
    }

    itemsArr.sort(function(a, b) {
      return a.className == b.className ?
        0 :
        (a.className > b.className ? 1 : -1);
    });

    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
  }

});
