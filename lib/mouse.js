const cursor=document.querySelector(".cursor");
const cursor2=document.querySelector(".cursor2");
const cursor3=document.querySelector(".cursor3");
const check=document.querySelector('.toggle');
const logo=document.querySelector('span.logo');
const navbar=document.querySelector('.nav-ele');
const headers=document.querySelector('h1');
const p=document.querySelector('p');
const checkbox=document.querySelector('#checkbox');
alert("js Loaded")
(function () {

    const link = document.querySelectorAll('nav > .hovering');
    
    
    const animateIt = function (e) {
          const span = this.querySelector('span');
          const cursor=document.querySelector(".cursor");
          const cursor2=document.querySelector(".cursor2");
          const cursor3=document.querySelector(".cursor3");
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,
    
          move = 25,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;
    
          span.style.transform = `translate(${xMove}px, ${yMove}px)`;
          span.style.opacity=1;
          cursor.classList.add('hover')
          cursor2.classList.add('hover')
          cursor3.style.opacity=0;
     
          
    
          if (e.type === 'mouseleave'){ 
              span.style.transform = ''; span.style.opacity=0.5;
              cursor.classList.remove('hover')
              cursor2.classList.remove('hover')
              cursor3.style.opacity=1;
    
              
        }
    };
    const logo=document.querySelector('.logo');
    logo.addEventListener('mouseover',(e)=>{
        logo.style.color="#FFF";
        console.log("here"); 
    });
    
    
    link.forEach(b => b.addEventListener('mousemove', animateIt));
    link.forEach(b => b.addEventListener('mouseleave', animateIt));
    
    })();
    

document.addEventListener("mousemove",(event)=>{
    cursor.style.cssText=cursor2.style.cssText="left: "+ event.clientX+"px; top: "+event.clientY+"px;"
    cursor3.style.cssText="left: "+(-1+event.clientX)+"px; top: "+(-3+event.clientY)+"px;"
})
 
check.addEventListener('mouseover',(e)=>{
          cursor.classList.add('hover')
          cursor2.classList.add('hover')

})

check.addEventListener('mouseleave',(e)=>{
    cursor.classList.remove('hover')
    cursor2.classList.remove('hover')
})

check.addEventListener('change',(e)=>{
    document.body.classList.toggle('dark-mode-body');
    headers.classList.toggle('dark-mode-text');
    p.classList.toggle('dark-mode-text');
    navbar.classList.toggle('dark-mode-text');
    console.log(navbar.classList)
    logo.classList.toggle('dark-mode-logo');

})


