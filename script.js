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

})