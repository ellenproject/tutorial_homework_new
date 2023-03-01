const sections = document.querySelectorAll(".home");

const title = document.getElementsByClassName("car_model_title")[0];
const paragraph = document.getElementsByTagName("p")[0];
const link = document.getElementsByClassName("car_model_link")[0];
const left_btn = document.getElementsByClassName("home_button_order")[0];
const right_btn = document.getElementsByClassName("home_button_exist")[0];

let page = new Page(sections, title, paragraph, link, left_btn, right_btn);

createObserver(sections);

function createObserver(elements){
    //options是一個對象
    let options = {
        //null表示空值，代表整個viewport
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    //addEventListener事件監聽器，即使用戶沒操作，還是會不斷去看有沒有事件 
    //IntersectionObserver(callback, options)，滿足一定條件下，才會去看有沒有事件，節省資源。
    //callback是一個function，指返回從observer觀察到的信息。可以放入兩個主要參數：entries跟observer
    const observer = new IntersectionObserver(handleIntersect, options);


    //在sections這個list裡面，用section每一個成員，來代替sections，
    //逐一的去觀察section每一個成員，即是用observe這個方法，在方法裡觀察section
    elements.forEach(element =>{
        observer.observe(element);
    });
}

function handleIntersect(entries, observer){
    entries.forEach(entry =>{
        // console.log(entry);
        //接下來要獨立的去處理，把信息存放到對象裡，就無需考慮在外面看不到信息
        if(entry.isIntersecting){

            let current_id = entry.target.id;

            switch(current_id){
                case "model_s": 
                    page.title = "Model S";
                    page.paragraph = "Order Online for "; 
                    page.link = "Touchless Delivery";
                    page.left_btn = "Custom Order";
                    page.right_btn = "Existing Inventory";
                    break;
                
                case "model_y": 
                    page.title = "Model Y";
                    break;
                
                case "model_3": 
                    page.title = "Model 3";
                    break;
                
                case "model_x": 
                    page.title = "Model X";
                    page.paragraph = "Order Online for ";
                    page.link = "Touchless Delivery";
                    page.left_btn = "Custom Order";
                    page.right_btn = "Existing Inventory";
                    break;
                
                case "solar_panels": 
                    page.title = "Solar Panels";
                    page.paragraph = "Lowest Cost Solar Panels in America ";
                    page.link = "";
                    page.left_btn = "Order Now";
                    page.right_btn = "Learn More";
                    break;
                
                case "solar_roof": 
                    page.title = "Solar Roof";
                    page.paragraph = "Produce Clean Energy From Your Roof ";
                    break;
                default:
                    break;
            }
            title.innerHTML = page.title;
            paragraph.childNodes[0].textContent = page.paragraph;
            paragraph.childNodes[1].textContent = page.link;
            left_btn.childNodes[1].textContent = page.left_btn;
            right_btn.childNodes[1].textContent = page.right_btn;

            
            //由於是根據用戶滾動滑鼠來決定透明度，故用監聽來加一個滾動效果進去
            const main = document.getElementsByTagName("main")[0];

            main.addEventListener("scroll", e => {
                let viewHeight = e.currentTarget.offsetHeight;
                let currentOffset = e.currentTarget.scrollTop % viewHeight;
                let opacityValue = Math.abs(1 - currentOffset / (viewHeight / 2));
                
                title.style.opacity = opacityValue;
                paragraph.style.opacity = opacityValue;
                link.style.opacity = opacityValue;
                left_btn.style.opacity = opacityValue;
                right_btn.style.opacity = opacityValue;
            })
        }
    })
}
