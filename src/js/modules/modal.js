

export default class ModalConf {
    constructor(modalSelect,triggerSelector,closeTrigger, parentSelector, descr, title){
        this.modalSelect = document.querySelector(modalSelect);
        this.triggerSelector = document.querySelector(triggerSelector);
        this.closeTrigger = document.querySelector(closeTrigger);
        this.opened = false;
        this.parent = document.querySelector(parentSelector);
        this.title = title;
        this.descr = descr;
       
    }


    openModal(){
        this.triggerSelector.addEventListener('click', (e) => {
                this.opened = true;
                if(e.target) {
                    e.preventDefault();
                }
                this.modalSelect.style.display = "block";
            });
    }

    closeModal(){
        this.closeTrigger.addEventListener('click',() => {
            this.modalSelect.style.display = "none";
        });

        this.modalSelect.addEventListener('click', (e) => {
            if (e.target === this.modalSelect){
                this.modalSelect.style.display = "none";
            }
        });

        document.addEventListener('keydown', (e) => {
            let code = e.code;
            if(code === "Escape" && this.opened === true){
                this.modalSelect.style.display = "none";
                this.opened = false;
            }
        });

      
    }

   
    

    render(){
       this.openModal();
       this.closeModal();


       const element = document.createElement('div');
       this.element = 'popup_text';
       element.classList.add(this.element);
       element.innerHTML = `
       <h1>${this.title}</h1>
        ${this.descr}
   `;

   this.parent.append(element);
    }
}



