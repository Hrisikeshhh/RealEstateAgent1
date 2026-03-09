document.addEventListener('DOMContentLoaded',()=>{


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

// navigations btns

document.querySelector('.visit-btn').addEventListener('click',()=>{
  window.location.href = "contact.html";
})

document.querySelector('.contactForm').addEventListener('click',()=>{
  document.querySelector('.form').scrollIntoView({
    behavior:"smooth"
  })
})

document.querySelector('#navBtn').addEventListener('click',()=>{
   document.querySelector('.form').scrollIntoView({
    behavior:"smooth"
   })
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

  // counter
  

 function animateCount(element, target) {
    let count = 0;
    let step = Math.ceil(target / 180); // speed of increase
    let interval = setInterval(() => {
      count += step;
      if (count >= target) {
        count = target; // stop at target
        clearInterval(interval);
        element.textContent = count + '+'
      }
      else{
      element.textContent = count ;
      }
    }, 20); // update every 20ms
  }



  // Use IntersectionObserver so it starts when div is visible
  const clientDiv = document.getElementById("HouseShown");
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv, 120); // suppose 1500 clients
      observer.disconnect(); // run only once
    }
  });

  observer.observe(clientDiv);



  const clientDiv1 = document.getElementById("clientServed");
  const observer1 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv1, 35); 
      observer1.disconnect(); 
    }
  });

  observer1.observe(clientDiv1);



  
  const clientDiv2 = document.getElementById("propertiesListed");
  const observer2 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv2, 50); 
      observer2.disconnect(); 
    }
  });

  observer2.observe(clientDiv2);

  const clientDiv3 = document.getElementById("rating");
  const observer3 = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      animateCount(clientDiv3, 4.5); 
      observer3.disconnect(); 
    }
  });

  observer3.observe(clientDiv3);


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

       // nav Btns
  let propertiesLocation = document.querySelector('.productContainer');
  let Properties = document.querySelector('.properties');
  Properties.addEventListener('click',()=>{
   propertiesLocation.scrollIntoView({
    behavior:"smooth"
     })
     tl2.reverse();
  })


  let aboutLocation = document.querySelector('.section2');
  let about = document.querySelector('.About');
  about.addEventListener('click',()=>{
    aboutLocation.scrollIntoView({
        behavior:"smooth"
    } )
    tl2.reverse();
  })

  let testimonialLocation = document.querySelector('.testimonialBox');
   document.querySelector('.Testimonials').addEventListener('click',()=>{
    testimonialLocation.scrollIntoView({
      behavior:"smooth"
    })
    tl2.reverse();
  })

  document.querySelector('#navBtn').addEventListener('click',()=>{
    document.querySelector('.form').scrollIntoView({
      behavior:"smooth"
    })
    tl2.reverse();
  })


})


// propertyContainerArrows

document.querySelector('.rightArrow').addEventListener('click',()=>{
  document.querySelector('.overflow').scrollBy({
    left:300,
    behavior:"smooth"
  })
})


document.querySelector('.leftArrow').addEventListener('click',()=>{
  document.querySelector('.overflow').scrollBy({
    left:-300,
    behavior:"smooth"
  })
})




})