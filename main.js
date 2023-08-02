const AnimText = document.getElementById("FirstText");
const AnimText2 = document.getElementById("SecondText");
const ChangeLogo = document.getElementById("ChangingObj");
const backorund = document.getElementById("Back")
const InfoCard = document.getElementById("InfoAboutIcon");
var AllLeters = AnimText.innerHTML.split('');
var AllLeters2 = AnimText2.innerHTML.split('');

const AboutUs = document.getElementById("AboutUsButton");
const ScrollToEnd = document.getElementById("ToTheEnd");
const ScrollToEnd2 = document.getElementById("ToTheEnd2");

const ExpertsIcon = document.getElementById("ExpertiseIcon");
const CostIcon = document.getElementById("CostIcon");
const ScalabilityIcon = document.getElementById("ScalabilityIcon"); 
const EnhancedIcon = document.getElementById("EnhancedIcon"); 
const ImprovedIcon = document.getElementById("ImprovedIcon");

const WhyUsButton = document.getElementById("WhyUsButton");

const Ap0 = document.getElementById("Ap0");
const Ap1 = document.getElementById("Ap1");
const Ap2 = document.getElementById("Ap2");
const Ap3 = document.getElementById("Ap3");
const Ap4 = document.getElementById("Ap4");


var indexOfCollect = 0;
var indexOfCollect2 = 0;
var offer = "";
var offer2 = "";

var AnimTextLength = AnimText.innerText.length; 
var AnimTextLength2 = AnimText2.innerText.length; 

var UpdateTime = 50;
var UpdateTime2 = 70;

var ScrolIndex = 0;

var UpdateBack = 0;

let body = document.querySelector('body');

function CollectOffer(){
    setTimeout(function(){
        CollectOffer();
        if (offer.length < AnimTextLength)
        {
            offer += AllLeters[indexOfCollect]
            indexOfCollect++;
            AnimText.innerHTML = offer;
        }else{
            UpdateTime = 10000;
        }
    } , UpdateTime)
}
function CollectOffer2(){
    setTimeout(function(){
        CollectOffer2();
        if (offer2.length < AnimTextLength2)
        {
            offer2 += AllLeters2[indexOfCollect2]
            indexOfCollect2++;
            AnimText2.innerHTML = offer2;
        }else{
            UpdateTime2 = 10000;
        }
    } , UpdateTime2)
}
function Wait(){
    setTimeout(function(){
        ChangeLogo.src = "Logoi.png"
        ChangeLogo.className = "changed"
    } , 2000)
}
function NoneStaticBack(){
    setTimeout(function(){
        NoneStaticBack();
        backorund.style.background = `linear-gradient(${UpdateBack}deg, rgba(${2},0,36,1) 0%, rgba(32,32,154,1) 27%, rgba(0,212,255,1) 100%)`;
        UpdateBack += 0.8;
    } , 50)
}
function ScrollControll(){
    setTimeout(function(){
        ScrollControll();
    } , 100)
}
// window.addEventListener('scroll', function () {
//     const scrollPosition = document.documentElement.scrollTop;
//     console.log(scrollPosition);
//   });
// body.addEventListener('scroll', () => { 
//     let scrollTop = body.scrollHeight;
//     console.log(scrollTop);
// console.log(headerWrapper);

// if(scrollTop >= 100){
//     console.log("Done")
// }else{    
//     console.log("Ye")
// }
// });



addEventListener('scroll' , function(){
    console.log(this.window.scrollY);
})
if (this.window.screen.width > 1400){
    const GoToBack = document.getElementById("Gotomainpage").onclick= function(){
        window.scrollBy({
            top: -3000,
            behavior: "smooth"
        })
    };
    const ToAboutUs = document.getElementById("ToAboutUs").onclick = function(){
        window.scrollBy({
            top: -500,
            behavior: "smooth"
        })
    }
    const ToWhyWithUs = document.getElementById("ToWhyWithUs").onclick = function(){
        window.scrollBy({
            top: -1550,
            behavior: "smooth"
        })
    }


AboutUs.onclick = function(){
    window.scrollBy({
        top: 2200,
        behavior: "smooth"
    })
}
ScrollToEnd.onclick = function(){
    window.scrollBy({
        top: 3000,
        behavior: "smooth"
    })
}
ScrollToEnd2.onclick = function(){
    window.scrollBy({
        top: 3000,
        behavior: "smooth"
    })
}
WhyUsButton.onclick = function(){
    window.scrollBy({
        top: 1150,
        behavior: "smooth"
    })
}
}else if (window.screen.width < 1000){
    const GoToBack = document.getElementById("Gotomainpage").onclick= function(){
        window.scrollBy({
            top: -5000,
            behavior: "smooth"
        })
    };
    const ToAboutUs = document.getElementById("ToAboutUs").onclick = function(){
        window.scrollBy({
            top: -700,
            behavior: "smooth"
        })
    }
    const ToWhyWithUs = document.getElementById("ToWhyWithUs").onclick = function(){
        window.scrollBy({
            top: -2750,
            behavior: "smooth"
        })
    }

    AboutUs.onclick = function(){
        window.scrollBy({
            top: 3000,
            behavior: "smooth"
        })
    }
    ScrollToEnd.onclick = function(){
        window.scrollBy({
            top: 5000,
            behavior: "smooth"
        })
    }
    ScrollToEnd2.onclick = function(){
        window.scrollBy({
            top: 5000,
            behavior: "smooth"
        })
    }
    WhyUsButton.onclick = function(){
        window.scrollBy({
            top: 1150,
            behavior: "smooth"
        })
    }
}
ExpertsIcon.addEventListener('click' , function(){
    InfoCard.innerHTML = "Expertise and Experience: With years of experience serving clients across various industries, we have developed a deep understanding of diverse business requirements. Our team of experts possesses extensive knowledge and expertise in their respective fields, enabling us to provide top-notch outsourcing services tailored to your specific needs"
})
CostIcon.addEventListener('click' , function(){
    InfoCard.innerHTML = "Cost Savings: Outsourcing can significantly reduce operational costs for your business. By choosing us, you can save on hiring and training expenses, infrastructure, and other overhead costs associated with in-house operations. We offer cost-effective outsourcing solutions without compromising on quality, ensuring substantial savings for your organization.";
})
CollectOffer();
CollectOffer2();
Wait();
ScrollControll();

addEventListener('scroll' , function(){
    if (this.window.scrollY > 650  && this.window.screen.width > 1400){
        Ap1.style.animationName = "Togo1"
        Ap2.style.animationName = "Togo2"
        Ap3.style.animationName = "Togo3"
        Ap4.style.animationName = "Togo4"
        this.setTimeout(function(){
            if(window.screen.width > 1400){
                Ap0.style.width = "400px"
                Ap1.style.width = "500px"
                Ap2.style.width = "600px"
                Ap3.style.width = "700px"
                Ap4.style.width = "800px"
            }else if(window.screen.width < 1000){
                Ap0.style.width = "380px"
                Ap1.style.width = "380px"
                Ap2.style.width = "380px"
                Ap3.style.width = "380px"
                Ap4.style.width = "380px"
            }

        } , 1000)
    }
})

