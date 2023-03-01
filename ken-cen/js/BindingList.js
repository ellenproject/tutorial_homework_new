class BindingList{
    constructor(_element){
        this.element = _element;
        //因為是list所以用到array去處理
        this.textList = []
    }

    //將添加的東西轉變成HTML
    //使用原因：在update()中，使用this.element.appendChild(text)，此處的text需要用HTML呈現
    static createListItem(text){
        const li = document.createElement("li");  //createElement：添加想要的HTML標籤進去
        li.textContent = text;
        return li;
    };

    update(){
        //如果清單有東西就清空，使用判斷語句：
        //看一下有無第一個成員firstChild
        //remove當前的firstChild
        //如果沒有內容就實現更新update()，更新可能是刪除、也可能是添加
        while(this.element.firstChild){
            this.element.removeChild(this.element.firstChild);
        }

        //由於更新是把textList增加或刪除成員，所以：
        //把每個成員都過一遍，用for of，添加到清單上
        //appendChild進去的對象，就是：
        //BindingList裡靜態的添加HTML方法﹙即creatListItem﹚，然後把當前textList的成員text放進去﹚
        for (const text of this.textList){
            // console.log(text);
            this.element.appendChild(BindingList.createListItem(text));
        }
    }

    add(text){
        this.textList.push(text);
        this.update();
    }

    //index指要移除的元素的參數。1則指我們要移除多少個項目。
    remove(index){
        this.textList.splice(index, 1);
        this.update();
    }
}