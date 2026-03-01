document.addEventListener('DOMContentLoaded',()=>{
    let propeties = document.querySelector('.properties');
    let section2 = document.querySelector('.section2');

    propeties.addEventListener('click',()=>{
       section2.scrollIntoView(
        {
            behavior:"smooth"
        }
       )
    })
})