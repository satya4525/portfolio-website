// Smooth scroll

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){
    
    if(this.hash !== ""){
    
    e.preventDefault();
    
    const target = document.querySelector(this.hash);
    
    target.scrollIntoView({
    
    behavior:"smooth"
    
    });
    
    }
    
    });
    
    });
    
    
    // Button animation
    
    const btn = document.querySelector(".btn");
    
    btn.addEventListener("mouseover", () => {
    
    btn.style.transform = "scale(1.1)";
    
    });
    
    btn.addEventListener("mouseout", () => {
    
    btn.style.transform = "scale(1)";
    
    });