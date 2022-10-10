
import {getResource} from './services';
import ModalConf from './modal';




function cards(){

class Menucard {
    constructor(src, alt , title , descr , price, parentSelector,dataSet,dataSetForCalc,category,refreshPreview) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.dataSet = dataSet;
        this.dataSetForCalc = dataSetForCalc;
        this.parent = document.querySelector(parentSelector);
        this.category = category;
        this.refreshPreview = refreshPreview;

        this.sum = 0;
        this.final = 0;
        this.sumPrice = document.querySelector('.sumPriceForPc');
        
    }

    
    
    render() {
          
            const element = document.createElement('div');
            this.element = 'parts__things';
            element.classList.add(this.element);
            element.innerHTML = `
            <div class="parts__things__photo">
            <img class="parts__things__photo-edit" src="${this.src}" alt="${this.alt}">
            </div>

        <div class="parts_things_name">${this.title}</div> 
        <div class="parts_things_price">Цена: ${this.price} €</div>
        <div class="parts__things__about" ${this.dataSet}>Подробнее</div>
        <button class="parts__things__add" data-product="${this.dataSetForCalc}" onClick="cart.addProduct('${this.category}',${this.price}, '${this.dataSet}', ${this.refreshPreview})"  value=${this.price}>Выбрать</button>
        
        `;
        
        this.parent.append(element);
        // this.parent.addEventListener('click', this.handlergood);
        
     
      


    }
}



getResource('http://localhost:8888/bakServer/data/korpus.json')
.then(data=>{
    data.forEach(({img, altImg, title, descr, price,dataSet,dataSetForCalc,category,refreshPreview})=>{
        new Menucard(img, altImg, title, descr, price,'#korpus',dataSet,dataSetForCalc,category,refreshPreview).render();
      
    });
    new ModalConf('[data-korpus]',`[${data[1].dataSet}]`, '[data-close1]', '#korpus1' , data[1].descr, data[1].title).render();
    new ModalConf('[data-korpus-1]',`[${data[0].dataSet}]`, '[data-close2]', '#korpus2' , data[0].descr, data[0].title).render();
  
});

getResource('http://localhost:8888/bakServer/data/mother.json')
.then(data=>{
    data.forEach(({img, altimg, title, descr, price,dataSet,dataSetForCalc,category})=>{
        new Menucard(img, altimg, title, descr, price,'#mother',dataSet,dataSetForCalc,category).render();
     
    });
    new ModalConf('[data-mother-1]',`[${data[1].dataSet}]`, '[data-close3]', '#mother1' , data[1].descr, data[1].title).render();
    new ModalConf('[data-mother-2]',`[${data[0].dataSet}]`, '[data-close4]', '#mother2' , data[0].descr, data[0].title).render();

});

getResource('http://localhost:8888/bakServer/data/cpu.json')
.then(data=>{
    data.forEach(({img, altimg, title, descr, price,dataSet,dataSetForCalc,category})=>{
        new Menucard(img, altimg, title, descr, price,'#cpu',dataSet,dataSetForCalc,category).render();
    });
    new ModalConf('[data-cpu-1]',`[${data[1].dataSet}]`, '[data-close6]', '#cpu1' , data[1].descr, data[1].title).render();
    new ModalConf('[data-cpu-2]',`[${data[0].dataSet}]`, '[data-close7]', '#cpu2' , data[0].descr, data[0].title).render();
});

getResource('http://localhost:8888/bakServer/data/gpu.json')
.then(data=>{
    data.forEach(({img, altimg, title, descr, price,dataSet,dataSetForCalc,category})=>{
        new Menucard(img, altimg, title, descr, price,'#gpu',dataSet,dataSetForCalc,category).render();
    });
    new ModalConf('[data-video-1]',`[${data[1].dataSet}]`, '[data-close8]', '#video1' , data[1].descr, data[1].title).render();
    new ModalConf('[data-video-2]',`[${data[0].dataSet}]`, '[data-close9]', '#video2' , data[0].descr, data[0].title).render();
});

getResource('http://localhost:8888/bakServer/data/ram.json')
.then(data=>{
    data.forEach(({img, altimg, title, descr, price,dataSet,dataSetForCalc,category})=>{
        new Menucard(img, altimg, title, descr, price,'#ram',dataSet,dataSetForCalc,category).render();
    });
    new ModalConf('[data-ram-1]',`[${data[1].dataSet}]`, '[data-close10]', '#ram1' , data[1].descr, data[1].title).render();
    new ModalConf('[data-ram-2]',`[${data[0].dataSet}]`, '[data-close11]', '#ram2' , data[0].descr, data[0].title).render();
});

getResource('http://localhost:8888/bakServer/data/bp.json')
.then(data=>{
    data.forEach(({img, altimg, title, descr, price,dataSet,dataSetForCalc,category})=>{
        new Menucard(img, altimg, title, descr, price,'#bp',dataSet,dataSetForCalc,category).render();
    });
    new ModalConf('[data-bp-1]',`[${data[1].dataSet}]`, '[data-close12]', '#bp1' , data[1].descr, data[1].title).render();
    new ModalConf('[data-bp-2]',`[${data[0].dataSet}]`, '[data-close13]', '#bp2' , data[0].descr, data[0].title).render();
});

getResource('http://localhost:8888/bakServer/data/hdd.json')
.then(data=>{
    data.forEach(({img, altimg, title, descr, price,dataSet,dataSetForCalc,category})=>{
        new Menucard(img, altimg, title, descr, price,'#hdd',dataSet,dataSetForCalc,category).render();
    });
    new ModalConf('[data-hdd-1]',`[${data[2].dataSet}]`, '[data-close14]', '#hdd1' , data[2].descr, data[2].title).render();
    new ModalConf('[data-hdd-2]',`[${data[1].dataSet}]`, '[data-close15]', '#hdd2' , data[1].descr, data[1].title).render();
    new ModalConf('[data-hdd-3]',`[${data[0].dataSet}]`, '[data-close16]', '#hdd3' , data[0].descr, data[0].title).render();
});

getResource('http://localhost:8888/bakServer/data/coolers.json')
.then(data=>{
    data.forEach(({img, altimg, title, descr, price,dataSet,dataSetForCalc,category})=>{
        new Menucard(img, altimg, title, descr, price,'#coolers',dataSet,dataSetForCalc,category).render();
    });
    new ModalConf('[data-coolers-3]',`[${data[1].dataSet}]`, '[data-close19]', '#coolers3' , data[1].descr, data[1].title).render();
    new ModalConf('[data-coolers-4]',`[${data[0].dataSet}]`, '[data-close20]', '#coolers4' , data[0].descr, data[0].title).render();
});

}

export default cards;
