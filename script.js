var ang = 0;
var remainingCount = 50;
var speed = -.0001;
var initSpeed = 15;
var delta = Math.floor((25/100)*(180/Math.PI)-2);
var direction = 1;
var win = true;

var count = document.getElementById('count');
var strip1 = document.getElementById('strip1');
var strip2 = document.getElementById('strip2');
var start = document.getElementById('start');
var push = document.getElementById('push');


function displayCount(x){
    count.innerHTML  = x ;
}

function changeDir(ang){
    ang = (-1)*ang
    return ang
}
function changeAngle(ang){
    angle = Math.floor(Math.random()*361)
    let difference = Math.abs(angle-ang)
    //console.log(difference)
    if(difference < 180){
       if(difference<=10){
        changeAngle(ang)
       }
       else{
        strip1.style.transform = 'rotate('+angle+'deg)'
       }
      }
      else if(difference>180){
          difference = 360-difference
          if(difference<=10){
          changeAngle(ang)
          }
          else{
          strip1.style.transform = 'rotate('+angle+'deg)'
          }   
      }
      else{
       strip1.style.transform = 'rotate('+angle+'deg)'
      }
}

 displayCount(remainingCount)

function startRotate(){  
console.log(initSpeed)
changeAngle(ang)
setInterval(function(){
strip2.style.transform = 'rotate('+ang+'deg)'
    ang = ang+direction
},initSpeed)
    
}
function stop(){
direction=0
console.log("Lose")

}
start.addEventListener('click',startRotate)


push.addEventListener('click', function (){
   let difference = Math.abs(angle-ang)
   //console.log(delta)
   if(difference < 180){
      if(difference<=delta){
         direction = direction*(-1)
         remainingCount = remainingCount-1
         initSpeed = initSpeed+speed
         changeAngle(ang)
         displayCount(remainingCount)
         startRotate()
      }
      else{
         stop()  
      }
   }
   else if(difference>180){
      difference = 360-difference
      if(difference<=delta){
         direction = direction*(-1)
         remainingCount = remainingCount-1
         initSpeed = initSpeed+speed 
         changeAngle(ang)
         displayCount(remainingCount)
         startRotate()
      }
      else{
         stop()
      }
   }
   else{
      stop()
  }
 // console.log(initSpeed)
  })
  
