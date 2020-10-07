// custom cursor
var parser = new DOMParser();
var domString = '<div id="cursor"></div>';
var html = parser.parseFromString(domString, 'text/html');
document.body.append(html.body.firstChild);
var cursor = document.getElementById('cursor');

var body = document.getElementById('body');
var a = document.querySelectorAll('a');

// set loeding screen time
setTimeout(function(){
    body.classList.add('loaded');
    body.style.overflow = 'visible';
    body.addEventListener("mousemove", function(e) {
        var x = e.clientX;
        var y = e.clientY;    
        cursor.style.top = y+'px';
        cursor.style.left = x+'px';
      });
}, 3000);  

// scroll to top on reload
window.onbeforeunload = function () {
  if(window.scrollTo) window.scrollTo(0,0);
  if(history && history.scrollRestoration) history.scrollRestoration = "manual";
};

//scrollbar
window.onscroll = function() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}