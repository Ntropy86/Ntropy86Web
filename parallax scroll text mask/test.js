const layer1= document.querySelector("#layer1");
const layer2= document.querySelector("#layer2");
const text= document.querySelector("#text");
console.log(layer1);
// alert('js loaded');

let scrol=window.pageYOffset;


    document.addEventListener('scroll',(event)=>
    { 
        // console.log(window.pageYOffset)
        let offset= window.pageYOffset;
        scrol=offset;
        layer1.style.width=(100+(scrol/5))+'%';
    });
    document.addEventListener('scroll',(event)=>
    { 
        // console.log(window.pageYOffset)
        let offset= window.pageYOffset;
        scrol=offset;
        layer2.style.width=(100+(scrol/5))+'%';
        layer2.style.left= (40+(scrol/100))+'%';
    });
  
    document.addEventListener('scroll',(event)=>
    { 
        // console.log(window.pageYOffset)
        let offset= window.pageYOffset;
        scrol=offset;
        text.style.width=(100+(scrol/100))+'%';
        text.style.top= -(5+scrol/10)+'%';

    });
  