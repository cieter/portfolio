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
let logo = document.querySelector('.logo');
let timer;

// background effects landingpage
let aPoints = [];
let can, ctx, interval, width, height;
let numPoints = 50;

if(document.title == "Portfolio")
  {
    timer = 3000;
  } else {
    timer = 0;
  }
  console.log(timer);

// set loeding screen time
setTimeout(() => {
    body.classList.add('loaded');
    body.style.overflow = 'visible';
    body.addEventListener("mousemove", e => {
        const x = e.clientX;
        const y = e.clientY;    
        cursor.style.top = `${y}px`;
        cursor.style.left = `${x}px`;
      });
}, timer);  

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
    this.style.transition = 'all 0.1s ease-in'
  });

  projectCard[1].addEventListener('mouseover', function(){
    projectTitle.innerHTML = 'McShower';
    projectText.innerHTML = 'Tijdens dit project hebben we als probleemstelling dat de McFlurry te weinig verkocht wordt. Hiervoor moeten wij ideeën gaan verzinnen waarbij de verkoop meer gestimuleerd wordt. Hiervoor moeten we onderzoek gaan doen naar de doelgroep en de rede achter dat de McFlurry niet zo veel gekocht wordt door mensen. Uit deze onderzoeken komen dan resultaten waar wij, de proftaak leden, dan weer conclusies uit trekken. Klik op de foto en zie wat ik aan deze proftaak heb gedaan!';
    this.style.transform = 'translatey(-10px)';
    this.style.transition = 'all 0.1s ease-in'
  });

  projectCard[2].addEventListener('mouseover', function(){
    projectTitle.innerHTML = '#freeTheFlurry';
    projectText.innerHTML = 'Bij dit project heb ik me vooral gefocus op het design en uiterlijk van het spel. Dit zal dan ook voornamelijk naar voren komen op de pagina van #FreeTheFlurry. Het is een leuk maar casual spel dat door vele gespeeld kan worden aangezien de besturing heel simpel is.';
    this.style.transform = 'translatey(-10px)';
    this.style.transition = 'all 0.1s ease-in'
  });

  projectCard[3].addEventListener('mouseover', function(){
    projectTitle.innerHTML = 'Portfolio';
    projectText.innerHTML = 'Op deze pagina vind je de weg die is afgelegd naar het portfolio waar je nu op kijkt. Hier zul je zien welke schetsen ik heb gemaakt en hoe ik daarop heb verder gewerkt in Adobe XD. En als laatste zul je nogmaals het reultaat zien waar je nu doorheen klikt.'
    this.style.transform = 'translatey(-10px)';
    this.style.transition = 'all 0.1s ease-in'
  });

  function mouseOut(){
    projectTitle.innerHTML = '';
    projectText.innerHTML = 'In deze sectie zie je mijn projecten. Als je rechts over 1 van de hovert zie je een korte samenvatting. Als je dan op Meer info klikt ga je naar het project verslag';
    for (let i = 0; i < projectCard.length; i++){
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
window.onbeforeunload = () => {
  if(window.scrollTo) window.scrollTo(0,0);
  if(history && history.scrollRestoration) history.scrollRestoration = 'manual';
};

//scrollbar
window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById('scrollBar').style.width = `${scrolled}%`;
};

//dropdown
function toggleDropdown() {
  document.getElementById('myDropdown').classList.toggle("show");
}
window.onclick = event => {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* background effect */
// shim layer with setTimeout fallback
window.requestAnimFrame = (() => {
  return window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          (callback => {
            window.setTimeout(callback, 1000 / 23);
          });
})();

const Point = function(){
  this._size = 0.5;
  this._x = 0;
  this._y = 0;
  this._direction = 0;
  this._velocity = 0;
  this._distances = [];
  this._neighboors = [];
  this._randomization = 0;
  this.__collection = null;
  
  this._step = function(aCollection){
    const modifiedVelocity = this._velocity*1 * ((Math.random() * this._randomization+1)/30);
    const direction = (Math.random()*2%2 >1)?-1:1;
    this._direction =  this._direction*1 + ((Math.random() * this._randomization) * direction);
    const radianAngle = this._direction * Math.PI / 180;
    this._x = (this._x * 1) + (modifiedVelocity * Math.cos(radianAngle) * 1);
    this._y = (this._y * 1) + (modifiedVelocity * Math.sin(radianAngle) * 1);

    if(this._x > width) this._x = 0;
    if(this._x < 0) this._x = width;
    if(this._y > height) this._y = 0;
    if(this._y < 0) this._y = height;
 
    this.__collection = aCollection;
  }
  
  this._computeNeighboors = function() {
    if(this.__collection == null)  return;
    aCollection = this.__collection;
    //compute the closest neighboor
    this._distances = [];
    for(i=0; i < aCollection.length; i++){
      if(aCollection[i]._x != this._x &&
         aCollection[i]._y != this._y){
          this._distances.push({
          pointIndex: i,
          pointObj: aCollection[i],
          distance: Math.sqrt( 
            (this._x - aCollection[i]._x) ** 2 + 
            (this._y - aCollection[i]._y) ** 2
          )
        });
      }
    }
    this._distances.sort((a, b) => { 
      defaultReturn = 0;
      if(a.distance < b.distance) defaultReturn = -1;
      if(a.distance > b.distance) defaultReturn = 1;
      return defaultReturn
    });
    this._neighboors = this._distances.slice(0,3);
  }
  
  this.draw = function(context){
    this._computeNeighboors();
    //draw connection lines
    context.lineWidth = 0.25;
    context.strokeStyle = '#ffffff';
    context.beginPath();    
    for(i=0; i<this._neighboors.length; i++) {
        context.moveTo(this._x, this._y);
        context.lineTo(this._neighboors[i].pointObj._x, this._neighboors[i].pointObj._y);
        context.lineWidth = 0.10 + 5 / this._neighboors[i].distance;
    }
    context.closePath();
    context.stroke();
    context.beginPath();
    context.arc(this._x, this._y, this._size*this._velocity, 0, 2 * Math.PI, false);
    context.fillStyle = '#555555';
    context.strokeStyle = '#ffffff';
    context.lineWidth = 0.5;
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(this._x, this._y, this._size, 0, 2 * Math.PI, false);
    context.fillStyle = '#ffffff';
    context.fill();
  }
};

function resizeCanvas() {
  can = document.getElementById("playArea");
  can.width = window.innerWidth;
  can.height = window.innerHeight;
}

function init() {
  can = document.getElementById("playArea");
  ctx = can.getContext("2d");
  width = document.body.clientWidth;
  height = document.body.clientHeight;
  
  for(x=0; x<numPoints; x++){
    const newPoint = new Point();
    newPoint._size = (Math.random() * (3 - 0.5) + 0.5).toFixed(2);
    newPoint._x = (Math.random() * width).toFixed(0);
    newPoint._y = (Math.random() * height).toFixed(0);
    newPoint._direction = (Math.random() * 360).toFixed(2);
    newPoint._velocity = (Math.random() * (4 - 0.1) + 0.2).toFixed(2);
    newPoint._randomization = (Math.random() * (10 - 0) + 0).toFixed(2);
    aPoints.push(newPoint);
  }
  animate();
}

function animate(){
  for(x=0; x<numPoints; x++){
    aPoints[x]._step(aPoints);
  }
  requestAnimFrame( animate );
  draw();
}

function draw(){
  ctx.save();

  ctx.clearRect(0,0,width,height);
  
  for(x=0; x<numPoints; x++){
    aPoints[x].draw(ctx);
  }
  ctx.restore();
}

init();

/* background blur */

window.onscroll = () => {
  let pixs = document.body.scrollTop || document.documentElement.scrollTop;
  pixs = pixs / 100;
  if (pixs <= 6) {
    can.style.filter = `blur(${pixs}px)`;
  }
      
};