function display_nav() {
  if (document.getElementById('dropdown').style.display == "block") {
    document.getElementById('dropdown').style.display = "none";
  } else {
    document.getElementById('dropdown').style.display = "block";
    document.getElementById('dropdown').innerHTML = "<a href='introduction.html'>INTRODUCTION</a><a href='variables.html'>VARIABLES</a><a>link 3</a><a>link 4</a>";
  }
}
function main_block(x) {
  var y = document.getElementsByClassName('topics-displayer');
  for (var i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = "#d3d3d3";
  }
  x.style.backgroundColor = "#ff4500";
  document.getElementById('content-displayer').innerHTML = document.getElementById(x.innerHTML).innerHTML;
}
