gsap.from(".section1 h1",{
       y:-100,
       duration:1,
       opacity:0,
       
})


gsap.from(".section1 button",{
    y:-100,
    duration:1,
    opacity:0,
    delay:1.5
    
})

gsap.from("h4",{
    y:-100,
    duration:1,
    stagger:.3,
    opacity:0,
})

gsap.from(".marquee",{
    transform:'translateX(-100%)',
    delay:1,
    duration:2,
    repeat:-1,
    ease:"none"
})


window.addEventListener("wheel",function(dets){
    if(dets.deltaY>0){
        gsap.to(".marquee",{
            transform:'translateX(-200%)',
            duration:2,
            repeat:-1,
            ease:"none"            
        })
    }
    else{
        gsap.to(".marquee",{
            transform:'translateX(0%)',
            duration:4,
            repeat:-1,
            ease:"none"   
        })

    }
})

