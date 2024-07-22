
gsap.to("#marque", {
  x: -10000,
  duration: 50,
  repeat:-1,
});

function textanimation() {
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();
  tl.from("#no1 #text1", {
    y: 40,
    opacity: 0,
    delay: 0.7,
    scrollTrigger: {
      trigger: "#no1",
      scroller: "body",
      start: "top 50%",
      stagger: 1.5,
    },
  });

  tl.from("#no2 #text2", {
    y: 40,
    opacity: 0,
    delay: 0.9,
    scrollTrigger: {
      trigger: "#no2",
      scroller: "body",
      start: "top 60%",
    },
  });
  tl.from("#no3 #text3", {
    y: 40,
    opacity: 0,
    delay: 1.1,
    scrollTrigger: {
      trigger: "#no3",
      scroller: "body",
      start: "top 70%",
    },
  });
  tl.from("#no4 #text4", {
    y: 40,
    opacity: 0,
    delay: 1.3,
    scrollTrigger: {
      trigger: "#no4",
      scroller: "body",
      start: "top 80%",
    },
  });
  tl.from("#no5 #text5", {
    y: 40,
    opacity: 0,
    delay: 1.5,
    scrollTrigger: {
      trigger: "#no5",
      scroller: "body",
      start: "top 90%",
    },
  });
  tl.from("#no6 #text6", {
    y: 40,
    opacity: 0,
    delay: 1.7,
    scrollTrigger: {
      trigger: "#no6",
      scroller: "body",
      start: "top 600px",
    },
  });

  tl.from("#no7 #text7", {
    y: 40,
    opacity: 1.8,
    delay: 0.7,
    scrollTrigger: {
      trigger: "#no7",
      scroller: "body",
      start: "top 650px",
    },
  });

  tl.from("#no8 #text8", {
    y: 40,
    opacity: 0,
    delay: 2,
    scrollTrigger: {
      trigger: "#no8",
      scroller: "body",
      start: "top 690px",
    },
  });
};

textanimation();


let elementContainer = document.getElementById("elementContainer");
let fixContainer = document.getElementById("fixd-container");

elementContainer.addEventListener("mouseenter", () => {
  fixContainer.style.display = "block";
});

elementContainer.addEventListener("mouseleave", () => {
  fixContainer.style.display = "none";
});
function MenuBtnAnimation(){
let menu = document.querySelector("#menu");
const menuItem = document.querySelector("#menuItem");

menu.addEventListener("click", () => {

  gsap.to(menuItem,{
    y:500,
    opacity:1,
    duration:0.5,
  })
});

const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener("click",()=>{
  gsap.to(menuItem,{
    y:-500,
    opacity:1,
    duration:0.5,
  })
});

}
MenuBtnAnimation();

function LAnimation(){
  const Pbtn = document.querySelector(".ProjectBtn");
  const PbtnPara = document.querySelector(".PbtnPara");
  const DefaultPara = document.querySelector(".DefaultPara");
  const DesignBtn = document.querySelector(".DesingBtn");
  const ExecutionBtn = document.querySelector(".ExecutionBtn");
  const ExecutionPara = document.querySelector(".EbtnPara");
  const Fimg = document.querySelector(".footerimg");
  const Exbtn = document.querySelector(".Exbtn");
  const pbtn = document.querySelector(".pbtn");
  const Dbtn = document.querySelector(".Dbtn"); 
  Pbtn.addEventListener("click",()=>{
    PbtnPara.style.display = "block";
    DefaultPara.style.display = "none";
    ExecutionPara.style.display = "none";
    Pbtn.style.borderLeft = "2px solid orange";
    DesignBtn.style.borderLeft = "1px solid rgb(231,229,228)";
    ExecutionBtn.style.borderLeft = "1px solid rgb(231,229,228)";
    Fimg.style.backgroundImage = "none";
    Fimg.style.backgroundImage = "url(footerimg3.png)";
    Exbtn.style.color = "#57534E";
    Dbtn.style.color = "#57534E";
    pbtn.style.color = "white";
  });

  DesignBtn.addEventListener("click",()=>{
    PbtnPara.style.display = "none";
    ExecutionPara.style.display = "none";
    DefaultPara.style.display = "block";
    DesignBtn.style.borderLeft = "1px solid orange";
    Pbtn.style.borderLeft = "1px solid rgb(231,229,228)";
    ExecutionBtn.style.borderLeft = "1px solid rgb(231,229,228)";
    Fimg.style.backgroundImage = "none";
    Fimg.style.backgroundImage = "url(footerimg.png)";
    Exbtn.style.color = "#57534E";
    Dbtn.style.color = "white";
    pbtn.style.color = "#57534E";
  });

  ExecutionBtn.addEventListener("click", () =>{
    Exbtn.style.color = "red";
    PbtnPara.style.display = "none";
    DefaultPara.style.display = "none";
    ExecutionPara.style.display = "block";
    ExecutionBtn.style.borderLeft = "2px solid orange";
    Pbtn.style.borderLeft = "1px solid rgb(231,229,228)";
    DesignBtn.style.borderLeft = "1px solid rgb(231,229,228)";
    Fimg.style.backgroundImage = "none";
    Fimg.style.backgroundImage = "url(footerimg2.png)";
    Exbtn.style.color = "white";
    Dbtn.style.color = "#57534E";
    pbtn.style.color = "#57534E";
  });
}
function L2Animation(){
  const Pbtn = document.querySelector("#ProjectBtn");
  const PbtnPara = document.querySelector("#PbtnPara");
  const DefaultPara = document.querySelector("#DefaultPara");
  const DesignBtn = document.querySelector("#DesingBtn");
  const ExecutionBtn = document.querySelector("#ExecutionBtn");
  const ExecutionPara = document.querySelector("#EbtnPara");
  const Fimg = document.querySelector("#footerimg");
  const Exbtn = document.querySelector(".Exbtn");
  const pbtn = document.querySelector(".pbtn");
  const Dbtn = document.querySelector(".Dbtn");

  Pbtn.addEventListener("click",function(){
    PbtnPara.style.display = "block";
    DefaultPara.style.display = "none";
    ExecutionPara.style.display = "none";
    Pbtn.style.borderLeft = "2px solid orange";
    DesignBtn.style.borderLeft = "1px solid rgb(231,229,228)";
    ExecutionBtn.style.borderLeft = "1px solid rgb(231,229,228)";
    Fimg.style.backgroundImage = "none";
    Fimg.style.backgroundImage = "url(footerimg3.png)";
    Exbtn.style.color = "#57534E";
    Dbtn.style.color = "#57534E";
    pbtn.style.color = "white";

  });

  DesignBtn.addEventListener("click",()=>{
    PbtnPara.style.display = "none";
    ExecutionPara.style.display = "none";
    DefaultPara.style.display = "block";
    DesignBtn.style.borderLeft = "1px solid orange";
    Pbtn.style.borderLeft = "1px solid rgb(231,229,228)";
    ExecutionBtn.style.borderLeft = "1px solid rgb(231,229,228)";
    Fimg.style.backgroundImage = "none";
    Fimg.style.backgroundImage = "url(footerimg.png)";
    Exbtn.style.color = "#57534E";
    Dbtn.style.color = "white";
    pbtn.style.color = "#57534E";
  });

  ExecutionBtn.addEventListener("click", () =>{
    PbtnPara.style.display = "none";
    DefaultPara.style.display = "none";
    ExecutionPara.style.display = "block";
    ExecutionBtn.style.borderLeft = "2px solid orange";
    Pbtn.style.borderLeft = "1px solid rgb(231,229,228)";
    DesignBtn.style.borderLeft = "1px solid rgb(231,229,228)";
    Fimg.style.backgroundImage = "none";
    Fimg.style.backgroundImage = "url(footerimg2.png)";
    Exbtn.style.color = "white";
    Dbtn.style.color = "#57534E";
    pbtn.style.color = "#57534E";
  });
}
LAnimation();
L2Animation();


function element1() {
  let elements = document.getElementById("no2");
  elements.addEventListener("mouseenter", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV11.mp4";
    fixContainer.innerHTML = "";
    fixContainer.appendChild(videoElement);
    videoElement.style.objectFit = "cover";
    videoElement.style.height = "29rem";
    videoElement.muted = true;
    function resetVideo() {
      videoElement.addEventListener("ended", function () {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    }
    resetVideo();
    videoElement.play();
  });

  elements.addEventListener("mouseleave", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV11.mp4";
    fixContainer.innerHTML = "";
    fixContainer.removeChild(videoElement);
  });
};

function element2() {
  let elements = document.getElementById("no1");
  elements.addEventListener("mouseenter", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV.mp4";
    fixContainer.innerHTML = "";
    fixContainer.appendChild(videoElement);
    videoElement.style.objectFit = "cover";
    videoElement.style.height = "29rem";
    videoElement.muted = true;
    function resetVideo() {
      videoElement.addEventListener("ended", function () {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    }
    resetVideo();
    videoElement.play();
  });

  elements.addEventListener("mouseleave", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV2.mp4";
    fixContainer.innerHTML = "";
    fixContainer.removeChild(videoElement);
  });
};

function element3() {
  let elements = document.getElementById("no3");
  elements.addEventListener("mouseenter", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV10.mp4";
    fixContainer.innerHTML = "";
    fixContainer.appendChild(videoElement);
    videoElement.style.objectFit = "cover";
    videoElement.style.height = "29rem";
    videoElement.muted = true;
    function resetVideo() {
      videoElement.addEventListener("ended", function () {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    }
    resetVideo();
    videoElement.play();
  });
  elements.addEventListener("mouseleave", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV3.mp4";
    fixContainer.innerHTML = "";
    fixContainer.removeChild(videoElement);
  });
};

function element4() {
  let elements = document.getElementById("no4");
  elements.addEventListener("mouseenter", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV2.mp4";
    fixContainer.innerHTML = "";
    fixContainer.appendChild(videoElement);
    videoElement.style.objectFit = "cover";
    videoElement.style.height = "29rem";
    videoElement.muted = true;
    function resetVideo() {
      videoElement.addEventListener("ended", function () {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    }
    resetVideo();
    videoElement.play();
  });
  elements.addEventListener("mouseleave", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV4.mp4";
    fixContainer.innerHTML = "";
    fixContainer.removeChild(videoElement);
  });
};

function element5() {
  let elements = document.getElementById("no5");
  elements.addEventListener("mouseenter", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV4.mp4";
    fixContainer.innerHTML = "";
    fixContainer.appendChild(videoElement);
    videoElement.style.objectFit = "cover";
    videoElement.style.height = "29rem";
    videoElement.muted = true;
    function resetVideo() {
      videoElement.addEventListener("ended", function () {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    }
    resetVideo();
    videoElement.play();
  });
  elements.addEventListener("mouseleave", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV5.mp4";
    fixContainer.innerHTML = "";
    fixContainer.removeChild(videoElement);
  });
};

function element6() {
  let elements = document.getElementById("no6");
  elements.addEventListener("mouseenter", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV9.mp4";
    fixContainer.innerHTML = "";
    fixContainer.appendChild(videoElement);
    videoElement.style.objectFit = "cover";
    videoElement.style.height = "29rem";
    videoElement.muted = true;
    function resetVideo() {
      videoElement.addEventListener("ended", function () {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    }
    resetVideo();
    videoElement.play();
  });
  elements.addEventListener("mouseleave", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV6.mp4";
    fixContainer.innerHTML = "";
    fixContainer.removeChild(videoElement);
  });
};

function element7() {
  let elements = document.getElementById("no7");
  elements.addEventListener("mouseenter", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV12.mp4";
    fixContainer.innerHTML = "";
    fixContainer.appendChild(videoElement);
    videoElement.style.objectFit = "cover";
    videoElement.style.height = "29rem";
    videoElement.muted = true;
    function resetVideo() {
      videoElement.addEventListener("ended", function () {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    }
    resetVideo();
    videoElement.play();
  });
  elements.addEventListener("mouseleave", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV7.mp4";
    fixContainer.innerHTML = "";
    fixContainer.removeChild(videoElement);
  });
};

function element8() {
  let elements = document.getElementById("no8");
  elements.addEventListener("mouseenter", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV3.mp4";
    fixContainer.innerHTML = "";
    fixContainer.appendChild(videoElement);
    videoElement.style.objectFit = "cover";
    videoElement.style.height = "29rem";
    videoElement.muted = true;
    function resetVideo() {
      videoElement.addEventListener("ended", function () {
        videoElement.currentTime = 0;
        videoElement.play();
      });
    }
    resetVideo();
    videoElement.play();
  });
  elements.addEventListener("mouseleave", function () {
    const videoElement = document.createElement("video");
    videoElement.src = "elemV8.mp4";
    fixContainer.innerHTML = "";
    fixContainer.removeChild(videoElement);
  });
};

element1();
element2();
element3();
element4();
element5();
element6();
element7();
element8();

gsap.registerPlugin(ScrollTrigger);
let tm = gsap.timeline();
tm.to("#main2", {
  y: -50,
  duration: 0.5,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    start: "top 60%",
    end: "end 80%",
    scrub: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
});

function flowcursor() {
  let main = document.querySelector("#Fmain1");
  let Cursor = document.querySelector("#cursor");

  main.addEventListener("mousemove", (Position) => {
    gsap.to(Cursor, {
      x: Position.x,
      y: Position.y,
    });
  });
};

flowcursor();


function FooterAnimation(){
const tl = gsap.timeline();
  tl.to("#footer #FAnimation1",{
    x: 0,
    y: 0,
    scale: 1.1,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 3,
    skewX: 34,
    skewY: 0,
    duration: 5, 
    ease: 'power2.out',
    repeat:-1,
  })
  tl.to("#footer #FAnimation3",{
    x: "10%",
    y: "-100%",
    scale: 1.3,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 94,
    skewX: 34,
    skewY: 0,
    duration: 5, 
    ease: 'power2.out',
    repeat:-1,
  })

  tl.to("#footer #FAnimation2",{
    x: 0,
    y: 0,
    scale: 1.1,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 3,
    skewX: 34,
    skewY: 0,
    duration: 5, 
    ease: 'power2.out',
    repeat:-1,
  })
}

 FooterAnimation();


