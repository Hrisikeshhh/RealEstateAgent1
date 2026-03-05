document.addEventListener('DOMContentLoaded',()=>{

  // nav Btns
  let propertiesLocation = document.querySelector('.productContainer');
  let Properties = document.querySelector('.properties');
  Properties.addEventListener('click',()=>{
   propertiesLocation.scrollIntoView({
    behavior:"smooth"
     })
  })


  let aboutLocation = document.querySelector('.section2');
  let about = document.querySelector('.About');
  about.addEventListener('click',()=>{
    aboutLocation.scrollIntoView({
        behavior:"smooth"
    } )
  })

  let testimonialLocation = document.querySelector('.testimonialBox');
   document.querySelector('.Testimonials').addEventListener('click',()=>{
    testimonialLocation.scrollIntoView({
      behavior:"smooth"
    })
  })



    function openModal() {
  document.getElementById("propertyModal").style.display = "block";
}

function closeModal() {
  document.getElementById("propertyModal").style.display = "none";
}

function changeImage(element) {
  document.getElementById("mainImage").src = element.target.src;
}


let close = document.querySelector('.close');
close.addEventListener('click',closeModal);

let propertyBtn = document.querySelectorAll('.propertyBtn');
propertyBtn.forEach((btn)=>{
 btn.addEventListener('click',openModal);
})

document.querySelector('.img1').addEventListener('click',changeImage);
document.querySelector('.img2').addEventListener('click',changeImage);
document.querySelector('.img3').addEventListener('click',changeImage);
/* Close when clicking outside */
window.onclick = function(event) {
  let modal = document.getElementById("propertyModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
})


document.querySelector('.visit-btn').addEventListener('click',()=>{
  window.location.href = "contact.html";
})


fetch('data.json')
.then((response)=>{
   return response.json();
})
.then((data)=>{
      console.log(data);

  let propertyBtn = document.querySelectorAll('.propertyBtn');

  propertyBtn.forEach((Btn)=>{
         Btn.addEventListener('click',()=>{
          let heroId = Number(Btn.dataset.id);
          let items = data.find(p=> p.id === heroId);
          if(items)
          {
            document.querySelector('#mainImage').src = items.mainImg;
            document.querySelector('.img1').src = items.img1;
            document.querySelector('.img2').src = items.img2;
            document.querySelector('.img3').src = items.img3;
            document.querySelector('.name').textContent = items.name;
            document.querySelector('.location').textContent = items.location;
            document.querySelector('.map').src = items.Embed;
            
          }

         })
  }) 

  let desktop = gsap.matchMedia();

    desktop.add('(min-width:800px)',()=>{
      let tl = gsap.timeline();
  tl.from('.A',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.A',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })


tl.from('.a',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.a',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.B',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.B',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.b',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.b',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.C',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.C',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.c',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.c',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.D',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.D',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.d',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.d',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })

  tl.from('.E',{
    y:70,
    stagger:0.4,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:'.E',
      scrub:2,
      start:'top 85%',
      end:'top 60%'
    }
  })


    })


  let mobile = gsap.matchMedia();
mobile.add('(max-width:800px)',()=>{
      let tl2 = gsap.timeline();
      let menu = document.querySelector('#Menu');
      let close = document.querySelector('#cross');

      tl2.to('.navItems',{
          x:'100vw',
          duration:0.3
      })
      tl2.from('.item',{
          x:20,
          stagger:0.3,
          opacity:0
      })

      tl2.pause();

      menu.addEventListener('click',()=>{
        tl2.play();
      })
      close.addEventListener('click',()=>{
        tl2.reverse();
      })
})







})