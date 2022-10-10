

export default class Configurator {
    constructor(confButtonNext,confButtonPrev,intelImg,intelText,headerText,confSlides,line){
        this.confButtonNext = document.querySelector(confButtonNext);
        this.confButtonPrev = document.querySelector(confButtonPrev);
        this.intelImg = document.querySelector(intelImg);
        this.intelText = document.querySelectorAll(intelText);
        this.confSlides = document.querySelectorAll(confSlides);
        this.headerText = document.querySelectorAll(headerText);
        this.line = document.querySelector(line);
        this.number = 0; 
        this.linePixels = 100;
        

    }

    hideSlidesContent(){
            this.confSlides.forEach(item => {
                item.style.display= "none";
            });
           this.headerText.forEach(item => {
                item.style.color = "#fff";
            });
    }

    showSlidesContent(i = 0){
        this.confSlides[i].style.display = "block";
        this.headerText[i].style.color = "#00A86B";
    }

    lineIncrease(p = 210) {
        this.line.style.width = `${p}px`;
    }

    showFinalSlide(){
            this.hideSlidesContent();
            this.showSlidesContent(3);
            this.line.style.width = `${980}px`;
            this.confButtonPrev.style.display = "none";
            this.confButtonNext.style.display = "none";
            setTimeout(() => {
                window.location.replace("http://localhost:8888/bakServer/index.html");
            },2000);
    }
   



    hideButton(){
        if(this.number === 2) {
            this.confButtonNext.style.display = "none";

        }else {
            this.confButtonNext.style.display = "block";
      
        }
        
        
    }

    

    init(){
     
        this.hideSlidesContent();
        this.showSlidesContent();
      
         this.intelImg.addEventListener('click', () => {
        for(let i = 0; i < this.intelText.length; i++){
            this.intelText[0].style.cssText = "display:flex;transform: translateX(485px);";
            this.intelText[1].style.cssText = "display:flex;transform: translateX(0);";
            // amdText[0].style.cssText = "display:none;transform: translateX(0);";
            // amdText[1].style.cssText = "display:none;transform: translateX(-485px);";
            this.confButtonNext.style.display= "block";
        }
    });

        this.confButtonNext.addEventListener("click", () => {
        ++this.number;
        this.linePixels += 340;
        this.hideSlidesContent();
        this.hideButton();
        this.showSlidesContent(this.number);
        this.lineIncrease(this.linePixels);
        if(this.number >= 1 && this.number != 3) {
            this.confButtonPrev.style.display = "block";
        }else{
            this.confButtonPrev.style.display = "none";
        }

        if(this.number === 1){
            this.confButtonNext.style.display = "none";
            alert("Выбирайте комплектующие по порядку");
        }

    });

    this.confButtonPrev.addEventListener("click", () => {
        --this.number;
        this.linePixels -= 340;
        this.hideSlidesContent();
        this.hideButton();
        this.showSlidesContent(this.number);
        this.lineIncrease(this.linePixels);
        if(this.number <= 0) {
            this.confButtonPrev.style.display = "none";
        }
       
    });


    }



}