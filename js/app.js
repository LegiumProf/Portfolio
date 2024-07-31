gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.wrapper',
    content: ".content",
    smooth: 1.5
})



var html = document.getElementById("icon-html");
var insideHtml = document.getElementById("icon-html-svg")
var elements = document.getElementsByClassName("icon-phrase");
var timemanagment = document.getElementById("icon-timemanagment")
var insideTimemanagment = document.getElementById("icon-timemanagment-svg")
var stressResistance = document.getElementById("icon-stress-resistance")
var insideStressResistance = document.getElementById("icon-stress-resistance-svg")
var stressResistanceBorder = document.getElementsByClassName("icon-stress-resistance-border")
var responsibilityBorder = document.getElementsByClassName("icon-responsibility-border")
var responsibility = document.getElementById("icon-responsibility")
var insideResponsibility = document.getElementById("icon-responsibility-svg")
var github = document.getElementById("icon-github")
var InsideGithub = document.getElementById("icon-github-svg")
var figma = document.getElementById("icon-figma")
var insideFigma = document.getElementById("icon-figma-svg")
var css = document.getElementById("icon-css")
var insudeCss = document.getElementById("icon-css-svg")
var js = document.getElementById("icon-js")
var insideJs = document.getElementById("icon-js-svg")
var remoteWork = document.getElementById("icon-remote-work")
var insiddeRemoteWork = document.getElementById("icon-remote-work-svg")


function htmlGithub() {
    html.style.cssText = `transform: scale(1.1); 
        box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
        transition: all 0.6s ease;
        border: 2px solid transparent;`;

    insideHtml.style.cssText = `transform: translateY(-10px) scale(0.8);
        transition: all 0.6s ease;
        position: relative;`;

    document.getElementById("icon-html-border-1").style.animation = "changeAnimation-1 0.6s forwards";
    document.getElementById("icon-html-border-2").style.animation = "changeAnimation-2 0.6s forwards";

    elements[0].style.cssText = `transition: all 0.6s ease; opacity: 1;
        transform: translateY(-10px);`;

    
    setTimeout(() => {
        github.style.cssText = `transform: scale(1.1); 
            box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
            transition: all 0.6s ease;
            border: 2px solid transparent;`
        InsideGithub.style.cssText = `transform: translateY(-10px) scale(0.8);
            transition: all 0.6s ease;
            position: relative;`

        document.getElementById("icon-github-border").style.animation = "changeAnimation-github-1 0.6s forwards"

        elements[4].style.cssText = `transition: all 0.6s ease; opacity: 1;
            transform: translateY(-10px);`;
        

        setTimeout(() => {html.style.cssText = `transform: scale(1); 
                box-shadow: none;
                transition: all 0.6s ease;
                border: 2px solid #CBD2DD;`;
            insideHtml.style.cssText = `transform: scale(1); 
                transition: all 0.6s ease;`;
            document.getElementById("icon-html-border-1").style.animation = "changeAnimation-back-1 0.6s forwards";
            document.getElementById("icon-html-border-2").style.animation = "changeAnimation-back-2 0.6s forwards";
        
            elements[0].style.cssText = `transition: all 0.4s ease; opacity: 0;`;
    
            setTimeout(() => {
                github.style.cssText = `transform: scale(1); 
                    box-shadow: none;
                    transition: all 0.6s ease;
                    border: 2px solid #CBD2DD;`;
                InsideGithub.style.cssText = `transform: scale(1); 
                    transition: all 0.6s ease;`;
                document.getElementById("icon-html-border-1").style.animation = "changeAnimation-back-1 0.6s forwards";
                document.getElementById("icon-html-border-2").style.animation = "changeAnimation-back-2 0.6s forwards";
                document.getElementById("icon-github-border").style.animation = "changeAnimation-github-back-1 0.6s forwards"
                
                elements[4].style.cssText = `transition: all 0.4s ease; opacity: 0;`;            
            }, 1000);
        }, 2000)
    }, 1000)
    
}


function sRResponsibility() {
    stressResistance.style.cssText = `transform: scale(1.1); 
        box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
        transition: all 0.6s ease;
        border: 2px solid transparent;`;

    insideStressResistance.style.cssText = `transform: translateY(-10px) scale(0.8);
        transition: all 0.6s ease;
        position: relative;`;

    for (let i = 0; i < stressResistanceBorder.length; i++) {
        stressResistanceBorder[i].style.animation = "changeAnimation-stress-resistance-1 0.6s forwards"
    }

    elements[2].style.cssText = `transition: all 0.6s ease; opacity: 1;
        transform: translateY(-10px);`;

    
    setTimeout(() => {
        responsibility.style.cssText = `transform: scale(1.1); 
            box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
            transition: all 0.6s ease;
            border: 2px solid transparent;`;

        insideResponsibility.style.cssText = `transform: translateY(-10px) scale(0.8);
            transition: all 0.6s ease;
            position: relative;`;

        for (let i = 0; i < responsibilityBorder.length; i++) {
            responsibilityBorder[i].style.animation = "changeAnimation-responsibility 0.6s forwards"
        }

        elements[6].style.cssText = `transition: all 0.6s ease; opacity: 1;
            transform: translateY(-10px);`;

        setTimeout(() => {
            stressResistance.style.cssText = `transform: scale(1); 
                box-shadow: none;
                transition: all 0.6s ease;
                border: 2px solid #CBD2DD;`;
    
            insideStressResistance.style.cssText = `transform: scale(1);
                transition: all 0.6s ease;
                position: relative;`;

            for (let i = 0; i < stressResistanceBorder.length; i++) {
                stressResistanceBorder[i].style.animation = "changeAnimation-stress-resistance-back-1 0.6s forwards"
            }

            elements[2].style.cssText = `transition: all 0.4s ease; opacity: 0;`;  

            setTimeout(() => {
                responsibility.style.cssText = `transform: scale(1); 
                    box-shadow: none;
                    transition: all 0.6s ease;
                    border: 2px solid #CBD2DD;`;

                insideResponsibility.style.cssText = `transform: scale(0.8);
                    transition: all 0.6s ease;
                    position: relative;`;

                for (let i = 0; i < responsibilityBorder.length; i++) {
                    responsibilityBorder[i].style.animation = "changeAnimation-responsibility-back 0.6s forwards"
                }

                elements[6].style.cssText = `transition: all 0.6s ease; opacity: 0;`;
            }, 1000);
        }, 2000)
    }, 1000);
}  


function figmaGitTime() {
    figma.style.cssText = `transform: scale(1.1); 
        box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
        transition: all 0.6s ease;
        border: 2px solid transparent;`;

    insideFigma.style.cssText = `transform: translateY(-10px) scale(0.8);
        transition: all 0.6s ease;
        position: relative;`;

    document.getElementById("icon-figma-border-leftTop").style.animation = "changeAnimation-figma-leftTop 0.6s forwards";
    document.getElementById("icon-figma-border-rightTop").style.animation = "changeAnimation-figma-rightTop 0.6s forwards";
    document.getElementById("icon-figma-border-leftMiddle").style.animation = "changeAnimation-figma-leftMiddle 0.6s forwards";
    document.getElementById("icon-figma-border-rightMiddle").style.animation = "changeAnimation-figma-rightMiddle 0.6s forwards";
    document.getElementById("icon-figma-border-leftBottom").style.animation = "changeAnimation-figma-leftBottom 0.6s forwards";
        

    elements[7].style.cssText = `transition: all 0.6s ease; opacity: 1;
        transform: translateY(-10px);`;

    setTimeout(() => {
        github.style.cssText = `transform: scale(1.1); 
            box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
            transition: all 0.6s ease;
            border: 2px solid transparent;`
        InsideGithub.style.cssText = `transform: translateY(-10px) scale(0.8);
            transition: all 0.6s ease;
            position: relative;`

        document.getElementById("icon-github-border").style.animation = "changeAnimation-github-1 0.6s forwards"

        elements[4].style.cssText = `transition: all 0.6s ease; opacity: 1;
            transform: translateY(-10px);`;
        
        timemanagment.style.cssText = `transform: scale(1.1); 
            box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
            transition: all 0.6s ease;
            border: 2px solid transparent;`
        insideTimemanagment.style.cssText = `transform: translateY(-10px) scale(0.8);
            transition: all 0.6s ease;
            position: relative;`

        document.getElementById("icon-timemanagment-border-1").style.animation = "changeAnimation-timemanagment 0.6s forwards"
        document.getElementById("icon-timemanagment-border-2").style.animation = "changeAnimation-timemanagment 0.6s forwards"

        elements[5].style.cssText = `transition: all 0.6s ease; opacity: 1;
            transform: translateY(-10px);`;

        setTimeout(() => {figma.style.cssText = `transform: scale(1); 
                box-shadow: none;
                transition: all 0.6s ease;
                border: 2px solid #CBD2DD;`;
            insideFigma.style.cssText = `transform: scale(1); 
                transition: all 0.6s ease;`;

            document.getElementById("icon-figma-border-leftTop").style.animation = "changeAnimation-figma-leftTop-back 0.6s forwards";
            document.getElementById("icon-figma-border-rightTop").style.animation = "changeAnimation-figma-rightTop-back 0.6s forwards";
            document.getElementById("icon-figma-border-leftMiddle").style.animation = "changeAnimation-figma-leftMiddle-back 0.6s forwards";
            document.getElementById("icon-figma-border-rightMiddle").style.animation = "changeAnimation-figma-rightMiddle-back 0.6s forwards";
            document.getElementById("icon-figma-border-leftBottom").style.animation = "changeAnimation-figma-leftBottom-back 0.6s forwards";
        
            elements[7].style.cssText = `transition: all 0.4s ease; opacity: 0;`;
    
            setTimeout(() => {
                github.style.cssText = `transform: scale(1); 
                    box-shadow: none;
                    transition: all 0.6s ease;
                    border: 2px solid #CBD2DD;`;
                InsideGithub.style.cssText = `transform: scale(1); 
                    transition: all 0.6s ease;`;
                document.getElementById("icon-github-border").style.animation = "changeAnimation-github-back-1 0.6s forwards"
                
                elements[4].style.cssText = `transition: all 0.4s ease; opacity: 0;`;   
                
                timemanagment.style.cssText = `transform: scale(1); 
                    box-shadow: none;
                    transition: all 0.6s ease;
                    border: 2px solid #CBD2DD;`
                insideTimemanagment.style.cssText = `scale(1);
                    transition: all 0.6s ease;
                    position: relative;`

                document.getElementById("icon-timemanagment-border-1").style.animation = "changeAnimation-timemanagment-back 0.6s forwards"
                document.getElementById("icon-timemanagment-border-2").style.animation = "changeAnimation-timemanagment-back 0.6s forwards"

                elements[5].style.cssText = `transition: all 0.6s ease; opacity: 0;`;
            }, 1000);
        }, 2000)
    }, 1000)
    
}

function htmlCss() {
    html.style.cssText = `transform: scale(1.1); 
        box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
        transition: all 0.6s ease;
        border: 2px solid transparent;`;

    insideHtml.style.cssText = `transform: translateY(-10px) scale(0.8);
        transition: all 0.6s ease;
        position: relative;`;

    document.getElementById("icon-html-border-1").style.animation = "changeAnimation-1 0.6s forwards";
    document.getElementById("icon-html-border-2").style.animation = "changeAnimation-2 0.6s forwards";

    elements[0].style.cssText = `transition: all 0.6s ease; opacity: 1;
        transform: translateY(-10px);`;

    
    setTimeout(() => {
        css.style.cssText = `transform: scale(1.1); 
            box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
            transition: all 0.6s ease;
            border: 2px solid transparent;`
        insudeCss.style.cssText = `transform: translateY(-10px) scale(0.8);
            transition: all 0.6s ease;
            position: relative;`

        document.getElementsByClassName("icon-css-border")[0].style.animation = "changeAnimation-css-1 0.6s forwards"
        document.getElementsByClassName("icon-css-border")[1].style.animation = "changeAnimation-css-2 0.6s forwards"

        elements[1].style.cssText = `transition: all 0.6s ease; opacity: 1;
            transform: translateY(-10px);`;
        
        setTimeout(() => {html.style.cssText = `transform: scale(1); 
                box-shadow: none;
                transition: all 0.6s ease;
                border: 2px solid #CBD2DD;`;
            insideHtml.style.cssText = `transform: scale(1); 
                transition: all 0.6s ease;`;
            
            document.getElementById("icon-html-border-1").style.animation = "changeAnimation-back-1 0.6s forwards";
            document.getElementById("icon-html-border-2").style.animation = "changeAnimation-back-2 0.6s forwards";
        
            elements[0].style.cssText = `transition: all 0.4s ease; opacity: 0;`;
    
            setTimeout(() => {
                css.style.cssText = `transform: scale(1); 
                    box-shadow: none;
                    transition: all 0.6s ease;
                    border: 2px solid #CBD2DD;`;
                insudeCss.style.cssText = `transform: scale(1); 
                    transition: all 0.6s ease;`;

                document.getElementsByClassName("icon-css-border")[0].style.animation = "changeAnimation-css-back-1 0.6s forwards"
                document.getElementsByClassName("icon-css-border")[1].style.animation = "changeAnimation-css-back-2 0.6s forwards"
                
                elements[1].style.cssText = `transition: all 0.4s ease; opacity: 0;`;   
            }, 1000);
        }, 2000)
    }, 1000)
}

function jsResponsRemote() {
    js.style.cssText = `transform: scale(1.1); 
        box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
        transition: all 0.6s ease;
        border: 2px solid transparent;`;

    insideJs.style.cssText = `transform: translateY(-10px) scale(0.8);
        transition: all 0.6s ease;
        position: relative;`;

        document.getElementsByClassName("icon-js-border")[0].style.animation = "changeAnimation-js-1 0.6s forwards"
        document.getElementsByClassName("icon-js-border")[1].style.animation = "changeAnimation-js-2 0.6s forwards"
        document.getElementsByClassName("icon-js-border")[2].style.animation = "changeAnimation-js-2 0.6s forwards"

    elements[8].style.cssText = `transition: all 0.6s ease; opacity: 1;
        transform: translateY(-10px);`;

    setTimeout(() => {
        responsibility.style.cssText = `transform: scale(1.1); 
            box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
            transition: all 0.6s ease;
            border: 2px solid transparent;`;

        insideResponsibility.style.cssText = `transform: translateY(-10px) scale(0.8);
            transition: all 0.6s ease;
            position: relative;`;

        for (let i = 0; i < responsibilityBorder.length; i++) {
            responsibilityBorder[i].style.animation = "changeAnimation-responsibility 0.6s forwards"
        }

        elements[6].style.cssText = `transition: all 0.6s ease; opacity: 1;
            transform: translateY(-10px);`;

        remoteWork.style.cssText = `transform: scale(1.1); 
            box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.25);
            transition: all 0.6s ease;
            border: 2px solid transparent;`;

        insiddeRemoteWork.style.cssText = `transform: translateY(-10px) scale(0.8);
            transition: all 0.6s ease;
            position: relative;`;

        document.getElementById("icon-remote-work-border").style.animation = "changeAnimation-remote-work 0.6s forwards"

        elements[3].style.cssText = `transition: all 0.6s ease; opacity: 1;
            transform: translateY(-10px);`;
        
        setTimeout(() => {js.style.cssText = `transform: scale(1); 
                box-shadow: none;
                transition: all 0.6s ease;
                border: 2px solid #CBD2DD;`;
            insideJs.style.cssText = `transform: scale(1); 
                transition: all 0.6s ease;`;
            
            document.getElementsByClassName("icon-js-border")[0].style.animation = "changeAnimation-js-back-1 0.6s forwards"
            document.getElementsByClassName("icon-js-border")[1].style.animation = "changeAnimation-js-back-2 0.6s forwards"
            document.getElementsByClassName("icon-js-border")[2].style.animation = "changeAnimation-js-back-2 0.6s forwards"
                
            elements[8].style.cssText = `transition: all 0.4s ease; opacity: 0;`;
    
            setTimeout(() => {
                responsibility.style.cssText = `transform: scale(1); 
                    box-shadow: none;
                    transition: all 0.6s ease;
                    border: 2px solid #CBD2DD;`;

                insideResponsibility.style.cssText = `transform: scale(0.8);
                    transition: all 0.6s ease;
                    position: relative;`;

                for (let i = 0; i < responsibilityBorder.length; i++) {
                    responsibilityBorder[i].style.animation = "changeAnimation-responsibility-back 0.6s forwards"
                }

                elements[6].style.cssText = `transition: all 0.6s ease; opacity: 0;`;  

                remoteWork.style.cssText = `transform: scale(1); 
                    box-shadow: none;
                    transition: all 0.6s ease;
                    border: 2px solid #CBD2DD;`;

                insiddeRemoteWork.style.cssText = `transform: scale(1);
                    transition: all 0.6s ease;
                    position: relative;`;

                elements[3].style.cssText = `transition: all 0.6s ease; opacity: 0;`;  

        document.getElementById("icon-remote-work-border").style.animation = "changeAnimation-remote-work-back 0.6s forwards"
            }, 1000);
        }, 2000)
    }, 1000)
}


htmlGithub()
setTimeout(sRResponsibility, 3000)
setTimeout(figmaGitTime, 6000)
setTimeout(htmlCss, 9000)
setTimeout(jsResponsRemote, 12000)
setInterval(() => {
    htmlGithub()
    setTimeout(sRResponsibility, 3000)
    setTimeout(figmaGitTime, 6000)
    setTimeout(htmlCss, 9000)
    setTimeout(jsResponsRemote, 12000)
}, 15000)

document.addEventListener("DOMContentLoaded", function() {
    const line = document.querySelector(".line-html-css");
    const line_2 = document.querySelector(".line-SR-Res");

    setTimeout(function() {
        line.classList.add("animate-horizontal-html-css");
        setTimeout(() => {
            line.classList.remove("animate-horizontal-html-css")
            line.classList.add("animate-horizontal-html-css-back")
        }, 3000);
        setTimeout(() => {
            line.classList.remove("animate-horizontal-html-css-back")
        }, 5000)
    }, 9000);





    
    setTimeout(function() {
        line_2.classList.add("animate-vertical-SR-Res");
        setTimeout(() => {
            line_2.classList.remove("animate-vertical-SR-Res")
            line_2.classList.add("animate-vertical-SR-Res-back")
        }, 3000);
        setTimeout(() => {
            line_2.classList.remove("animate-vertical-SR-Res-back")
        }, 5000)
    }, 3000);


    setInterval(() => {
        setTimeout(function() {
            line.classList.add("animate-horizontal-html-css");
            setTimeout(() => {
                line.classList.remove("animate-horizontal-html-css")
                line.classList.add("animate-horizontal-html-css-back")
            }, 3000);
            setTimeout(() => {
                line.classList.remove("animate-horizontal-html-css-back")
            }, 5000)
        }, 9000);
    
    
    
    
    
        
        setTimeout(function() {
            line_2.classList.add("animate-vertical-SR-Res");
            setTimeout(() => {
                line_2.classList.remove("animate-vertical-SR-Res")
                line_2.classList.add("animate-vertical-SR-Res-back")
            }, 3000);
            setTimeout(() => {
                line_2.classList.remove("animate-vertical-SR-Res-back")
            }, 5000)
        }, 3000);
    }, 15000)
    
});

const path = document.getElementById("line-html-github-path")
const path2 = document.getElementById("line-figma-github-path")
const path3 = document.getElementById("line-figma-TM-path")
const path4 = document.getElementById("line-js-RW-path")
const path5 = document.getElementById("line-js-Res-path")

path.style.animation = "animate-svg-html-git 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards";
setTimeout(() => {
    path.style.animation = "animate-svg-html-git-back 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards";
}, 3000)
setTimeout(() => {
    path4.style.animation = "animate-svg-js-RW 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards"
    path5.style.animation = "animate-svg-js-res 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards"
}, 12000)

setTimeout(() => {
    path2.style.animation = "animate-svg-figma-github 1.35s cubic-bezier(0.5, 0, 0.6, 1) forwards";
    path3.style.animation = "animate-svg-line-figma-TM 1.35s cubic-bezier(0.5, 0, 0.6, 1) forwards";
    setTimeout(() => {
        path2.style.animation = "animate-svg-figma-github-back 1.35s cubic-bezier(0.5, 0, 0.6, 1) forwards";
        path3.style.animation = "animate-svg-line-figma-TM-back 1.35s cubic-bezier(0.5, 0, 0.6, 1) forwards";
    }, 3000)
    setTimeout(() => {
        path4.style.animation = "animate-svg-js-RW-back 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards"
        path5.style.animation = "animate-svg-js-res-back 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards"
    }, 9000)
}, 6000)



setInterval(() => {
    path.style.animation = "animate-svg-html-git 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards";
    setTimeout(() => {
        path.style.animation = "animate-svg-html-git-back 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards";
    }, 3000)
    setTimeout(() => {
        path4.style.animation = "animate-svg-js-RW 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards"
        path5.style.animation = "animate-svg-js-res 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards"
    }, 12000)

    setTimeout(() => {
        path2.style.animation = "animate-svg-figma-github 1.35s cubic-bezier(0.5, 0, 0.6, 1) forwards";
        path3.style.animation = "animate-svg-line-figma-TM 1.35s cubic-bezier(0.5, 0, 0.6, 1) forwards";
        setTimeout(() => {
            path2.style.animation = "animate-svg-figma-github-back 1.35s cubic-bezier(0.5, 0, 0.6, 1) forwards";
            path3.style.animation = "animate-svg-line-figma-TM-back 1.35s cubic-bezier(0.5, 0, 0.6, 1) forwards";
        }, 3000)
        setTimeout(() => {
            path4.style.animation = "animate-svg-js-RW-back 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards"
            path5.style.animation = "animate-svg-js-res-back 1.3s cubic-bezier(0.5, 0, 0.6, 1) forwards"
        }, 9000)
    }, 6000)
}, 15000)







let grad = document.querySelector('#grad');
function getGradSet( angle ) {
    return gradSet = {
        set1: {
            'gradientTransform': 'rotate(0, .5, .5)' 
        },
        set2: {
            'gradientTransform': 'rotate(' + angle + ', .5, .5)' 
        }
    };
}
addAnimation( grad,  getGradSet( 360 )  );
function addAnimation( elem, sets ) {
    var tl = new TimelineLite();
    var duration = Math.random() * 0.3 + 2;    
    
    animateGrad();
    
    function animateGrad() {    
        tl.set( elem, { attr: sets.set1 } );
        tl.to( elem, duration, { 
            attr: sets.set2,
            ease: Power0.easeNone,
            onComplete: animateGrad
        });    
    }
}
let grad2 = document.querySelector('#grad-2');
function getGradSet( angle ) {
    return gradSet = {
        set1: {
            'gradientTransform': 'rotate(0, .5, .5)' 
        },
        set2: {
            'gradientTransform': 'rotate(' + angle + ', .5, .5)' 
        }
    };
}
addAnimation( grad2,  getGradSet( -360 )  );
function addAnimation( elem, sets ) {
    var tl = new TimelineLite();
    var duration = Math.random() * 0.3 + 2;    
    
    animateGrad();
    
    function animateGrad() {    
        tl.set( elem, { attr: sets.set1 } );
        tl.to( elem, duration, { 
            attr: sets.set2,
            ease: Power0.easeNone,
            onComplete: animateGrad
        });    
    }
}

let grad3 = document.querySelector('#grad-3');
function getGradSet( angle ) {
    return gradSet = {
        set1: {
            'gradientTransform': 'rotate(0, .5, .5)' 
        },
        set2: {
            'gradientTransform': 'rotate(' + angle + ', .5, .5)' 
        }
    };
}
addAnimation( grad3,  getGradSet( -360 )  );
function addAnimation( elem, sets ) {
    var tl = new TimelineLite();
    var duration = Math.random() * 0.3 + 2;    
    
    animateGrad();
    
    function animateGrad() {    
        tl.set( elem, { attr: sets.set1 } );
        tl.to( elem, duration, { 
            attr: sets.set2,
            ease: Power0.easeNone,
            onComplete: animateGrad
        });    
    }
}


let grad4 = document.querySelector('#grad-4');
function getGradSet( angle ) {
    return gradSet = {
        set1: {
            'gradientTransform': 'rotate(0, .5, .5)' 
        },
        set2: {
            'gradientTransform': 'rotate(' + angle + ', .5, .5)' 
        }
    };
}
addAnimation( grad4,  getGradSet( -360 )  );
function addAnimation( elem, sets ) {
    var tl = new TimelineLite();
    var duration = Math.random() * 0.3 + 2;    
    
    animateGrad();
    
    function animateGrad() {    
        tl.set( elem, { attr: sets.set1 } );
        tl.to( elem, duration, { 
            attr: sets.set2,
            ease: Power0.easeNone,
            onComplete: animateGrad
        });    
    }
}


