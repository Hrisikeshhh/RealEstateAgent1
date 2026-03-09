document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.navBtn').addEventListener('click',()=>{
        window.location.href = "index.html";
    })

    const params = new 
    URLSearchParams(window.location.search);
    const property = params.get('property');

    if(property)
    {
        document.querySelector('#propertyInput').value = property;
    }
})