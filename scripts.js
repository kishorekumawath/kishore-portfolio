
function valuesSetter() {
    gsap.set("#nav", { y: "100%", opacity: 0 });
    gsap.set("#home #nav .logo", { y: "-100%", opacity: 0 });
    gsap.set("#home #About-Me", { opacity: 0 });
    gsap.set("#home .parent .child", { y: "100%" });
    gsap.set("#home row img", { opacity: 0 });
    gsap.set("#home #imagery", { opacity: 0 });

}
// reveal text 
function revealToSpan() {
    document.querySelectorAll('.reveal')
        .forEach(
            function (ele) {

                // create two spans
                var spanParent = document.createElement("span");
                var spanChild = document.createElement("span");

                // parent and child both sets their respective classes
                spanParent.classList.add("parent");
                spanChild.classList.add("child");

                //span parent gets child and child gets ele details.
                spanChild.innerHTML = ele.innerHTML;
                spanParent.appendChild(spanChild);

                // ele replaces its value with parent span
                ele.innerHTML = "";
                ele.appendChild(spanParent);


            }
        );
}

function loaderAnimation() {
    var t1 = gsap.timeline();
    t1.from("#loader .child span", {
        x: 100,
        duration: 1.2,
        stagger: .1,
        ease: Power3.easeInOut,
    }).to("#loader .parent .child", {
        y: "-100%",
        duration: 1,
        ease: Circ.easeInOut,
    }).to("#loader", {
        height: 0,
        duration: 1,
        ease: Expo.easeInOut
    }).to("#green", {
        height: "100%",
        duration: 1,
        top: 0,
 
        ease: Expo.easeInOut
    }).to("#green", {
        height: "0%",
        duration: 1,
        bottom: 0,

        ease: Expo.easeInOut,
        onComplete: function () {
            animationHomePage();
        }
    })

}

function animationHomePage() {
    var tl = gsap.timeline();
    tl.to("#nav", {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
    }).to("#nav .logo", {
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
    }).to("#home .parent .child", {
        y: 0,
        duration: 1,
        
        ease: Expo.easeInOut
    }).to("#home #About-Me", {
        opacity: 1,
    }).to("#home #imagery", {
        opacity: 1,
    });
}

function cardHoverEffect() {
    var showingImage;
    document.querySelectorAll("#works-images .cnt").forEach(function (cnt) {
        cnt.addEventListener("mousemove", function (dets) {
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            showingImage = dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px, ${dets.clientY}px )`;
            showingImage.style.filter = "grayscale(1)";
            document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
        });
        cnt.addEventListener("mouseleave", function (dets) {
            document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
            showingImage.style.filter = "grayscale(0)";
            document.querySelector("#work").style.backgroundColor = "#f0f0f0"
        });


    })
}

function circleAnimationHomePage() {
    var Circle = document.querySelector("#home #dot");
    var home = document.querySelector("#home #homepage");
    var Frames = document.querySelectorAll("#home #homedetail .frame");

    // event is used to circle at the mouse point
    window.addEventListener("mousemove", function (dets) {
        gsap.to(Circle, {
            x: dets.clientX,
            y: dets.clientY,
            duration: .2,
            ease: Expo
        })
    });

    Frames.forEach(frame => {

        // this event is used to increase the size of the mouse
        frame.addEventListener("mousemove", function (dets) {
            gsap.to(Circle, {
                scale: 6,
                backgroundColor: "#fff",

            });

            gsap.to(frame.children, {
                color: "#000",
                duration: .3,
            });

        });

        // this event is used to decreses the size of the mouse
        frame.addEventListener("mouseleave", function (dets) {
            gsap.to(Circle, {
                scale: 1,
                backgroundColor: "#14cF93"
            })
            gsap.to(frame, {
                color: "#14cF93;",
                duration: .3
            })


        });
    })

}



revealToSpan();
valuesSetter();
loaderAnimation();
circleAnimationHomePage();
cardHoverEffect();


//typed js at home
var typed = new Typed("#imglef .title h1 .auto-type-text", {
    strings: ['App Developer', 'Frontend Developer', 'programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
// project links
function onclickProject1Link() {
    var url = "https://github.com/kishorekumawath/portfolio";
    window.open(url, "_blank");
}
function onclickProject2Link() {
    var url = "https://github.com/kishorekumawath/video-player-app";
    window.open(url, "_blank");
}
function onclickProject3Link() {
    var url = "https://github.com/kishorekumawath/wall-paper-app";
    window.open(url, "_blank");
}
function onclickProject4Link() {
    var url = "https://github.com/kishorekumawath/Unit-Converter-App";
    window.open(url, "_blank");
}
// footer links
function onclickLinkedinLink() {
    var url = "https://www.linkedin.com/in/kishore-kumawath/";
    window.open(url, "_blank");
}
function onclickGithubLink() {
    var url = "https://github.com/kishorekumawath";
    window.open(url, "_blank");
}
function onclickInstaLink() {
    var url = "https://instagram.com/kishore.kumar99?igshid=ZGUzMzM3NWJiOQ==";
    window.open(url, "_blank");
}

function onclickTwitterLink() {
    var url = "https://twitter.com/hashtagkishore";
    window.open(url, "_blank");
}
