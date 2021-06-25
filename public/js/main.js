document.addEventListener("DOMContentLoaded", ()=>{
    const menuLinks = document.querySelectorAll(".main-header a");
    for(let link of menuLinks){
        if(link.getAttribute("href") === document.location.pathname)
            link.classList.add("active");
    }
});