const tl = gsap.timeline({defaults:{ease: 'power1.out'}});
tl.to('.text',{y: '0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y:"-100%", duration: 1.5, delay: 0.5});
tl.to('.intro', {y: "-100%", duration: 1},"-=1");
tl.fromTo('.big-text', {y:"30%",opacity: 0} , {y: '0%', opacity: 1,duration: 0.6});
tl.fromTo('.name', {opacity: 0} , { opacity: 1,duration: 0.6});

//enough with aminations
//time for real stuff

var images = [
    "image.jpg",
    "dad.jpg",
    "simi.jpg",
    "sumi_suji.jpg",
    "godoftheworld.jpg",
    
];
var names = [
    "Selin Kumari",
    "Karthik Kannan",
    "Simi Susan",
    "Sumitha And Sujitha",
    "Taran Karthik"
    
];
var i = 0;
//const
const Button = document.querySelector('.clicker');
Button.addEventListener('click',function(){
    i++;
    var num = 4;
    if (i > num){
        i = 0;
    }
    var upI = images[i];
    var upN = names[i];
    document.querySelector('#family').src = upI;
    tl.fromTo('#family', {y: "30%",opacity: 0} , {y: "0%", opacity: 1,duration: 0.6});
    tl.fromTo('.name', {y: "30%",opacity: 0} , {y: "0%", opacity: 1,duration: 0.6});
    
    document.querySelector('.name').innerHTML = upN;
    console.log(upN);
})