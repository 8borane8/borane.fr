const header = document.querySelector("header");

document.addEventListener("scroll", () => {
    if(window.scrollY < 30)
        header.style.boxShadow = "none";
    else
        header.style.boxShadow = "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
});

let animationOnScrollElements;

function onScroll(){
    for(let element of animationOnScrollElements){
        const elementBouncingRect = element.getBoundingClientRect();

        if(elementBouncingRect.bottom <= document.documentElement.clientHeight - 50){
            element.style.transform = "translateY(0px)";
            element.style.opacity = "1";
            continue;
        }

        element.style.transform = "translateY(50px)";
        element.style.opacity = "0";
    }
};

Slick.addOnloadListener(() => {
    animationOnScrollElements = Array.from(document.querySelectorAll(".animation-on-scroll"));
    onScroll();

    document.addEventListener("scroll", onScroll);

    setTimeout(() => {
        document.body.style.opacity = 1;
        document.querySelector("#app > h1").style.letterSpacing = "0px";
    }, 150)
});