// custom cursor
let parser = new DOMParser();
let domString = '<div id="cursor"></div>';
let html = parser.parseFromString(domString, 'text/html');
document.body.append(html.body.firstChild);
let cursor = document.getElementById('cursor');

let body = document.getElementById('body');
let a = document.querySelectorAll('a');
let projectTitle = document.getElementById('projectTitle');
let projectText = document.getElementById('projectText');
let projectCard = document.querySelectorAll('.projectCards');
let dropdown = document.getElementById('dropdown');

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

// for(var i = 0; i < projectCard.length; i++){
//   projectCard[i].addEventListener('mouseover', function(){
//     switch(i){
//       case 0:
//         // projectTitle.innerHTML = 'Project X';
//         alert('case is 0');
//         break;
//       case 1:
//         // projectTitle.innerHTML = 'Proftaak';
//         alert('case is 1');
//     };

//   });
// };

if (document.title == 'Portfolio'){
  projectCard[0].addEventListener('mouseover', function(){
    projectTitle.innerHTML = 'ProjectX';
    projectText.innerHTML = 'In dit project moet ik een zelfortret maken. Nee niet zo een van je gezicht. Een zelf protret van je passie en interesses. Daarom ga ik een AR PWA maken, dit is een webapplicatie die digitale elementen over de "echte wereld heen kunnen plakken. Dit gebeurt door middel van augmented reality (AR). Klik op de foto en zie er meer over!!!"';
    this.style.transform = 'translatey(-10px)';
  });

  projectCard[1].addEventListener('mouseover', function(){
    projectTitle.innerHTML = 'McShower';
    projectText.innerHTML = 'Tijdens dit project hebben we als probleemstelling dat de McFlurry te weinig verkocht wordt. Hiervoor moeten wij ideeën gaan verzinnen waarbij de verkoop meer gestimuleerd wordt. Hiervoor moeten we onderzoek gaan doen naar de doelgroep en de rede achter dat de McFlurry niet zo veel gekocht wordt door mensen. Uit deze onderzoeken komen dan resultaten waar wij, de proftaak leden, dan weer conclusies uit trekken. Klik op de foto en zie wat ik aan deze proftaak heb gedaan!';
    this.style.transform = 'translatey(-10px)';
  });

  projectCard[2].addEventListener('mouseover', function(){
    projectTitle.innerHTML = '#freeTheFlurry';
    projectText.innerHTML = 'Bij dit project heb ik me vooral gefocus op het design en uiterlijk van het spel. Dit zal dan ook voornamelijk naar voren komen op de pagina van #FreeTheFlurry. Het is een leuk maar casual spel dat door vele gespeeld kan worden aangezien de besturing heel simpel is.';
    this.style.transform = 'translatey(-10px)';
  });

  function mouseOut(){
    projectTitle.innerHTML = '';
    projectText.innerHTML = 'In deze sectie zie je mijn projecten. Als je rechts over 1 van de hovert zie je een korte samenvatting. Als je dan op Meer info klikt ga je naar het project verslag';
    for (var i = 0; i < projectCard.length; i++){
      projectCard[i].style.transform = 'translateY(10px)';
    }
  };
}

function cursorOver(){
  cursor.style.width = '100px';
  cursor.style.height = '100px';
}

function cursorOut(){
  cursor.style.width = '50px';
  cursor.style.height = '50px';
}

//test for touch events support and if not supported, attach .no-touch class to the HTML tag.
if (!('ontouchstart' in document.documentElement)) {
  document.documentElement.className += ' no-touch';
}

// scroll to top on reload
window.onbeforeunload = function () {
  if(window.scrollTo) window.scrollTo(0,0);
  if(history && history.scrollRestoration) history.scrollRestoration = 'manual';
};

//scrollbar
window.onscroll = function() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById('scrollBar').style.width = scrolled + '%';
};

//dropdown
function toggleDropdown() {
  document.getElementById('myDropdown').classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}