const sliderWrap = document.querySelector(".slider_wrap");
const sliderImg = document.querySelectorAll(".slider_wrap img");

const sliderclone = sliderImg[0].cloneNode(true);
sliderWrap.appendChild(sliderclone);

const count = document.querySelectorAll(".slider_wrap img").length;
let currentIndex = 0;

setInterval(() => {
    sliderWrap.style.transition = "all 0.3s";

    currentIndex = (currentIndex + 1) % count;

    sliderWrap.style.transform = `translateY(-${400 * currentIndex}px)`;

    if(currentIndex == count-1){
        setTimeout(() => {
            sliderWrap.style.transition = "all 0s";

            currentIndex = 0;

            sliderWrap.style.transform = `translateY(-${400 * currentIndex}px)`;
        }, 1000)
    }
    
}, 2000);

let number = 0;

document.querySelectorAll(".side > ul > li > a").forEach((e) => {
    e.addEventListener("mouseover", () => {
        document.querySelectorAll(".side ul li ul").forEach((q) => {
            q.style.transition = "all 0.3s"
            q.style.opacity = "1";
        });
    });
    e.addEventListener("mouseout", () => {
        document.querySelectorAll(".side ul li ul").forEach((q) => {
            q.style.transition = "all 0.3s"
            q.style.opacity = "0";
        });
    });
    
})

document.querySelector(".banner button").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "block";
});

document.querySelector("#modal button").addEventListener("click", () => {
    document.querySelector("#modal").style.display = "none";
});
