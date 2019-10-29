/*jslint browser:true es6*/
let topic_works = document.querySelector("#topic-works");
let featured = document.querySelector("#featured");
let welfare = document.querySelector("#welfare");
let sub_works_1 = document.querySelector("#sub-works-1");
let sub_works_2 = document.querySelector("#sub-works-2");
let sub_works_3 = document.querySelector("#sub-works-3");

let works = [topic_works, featured, welfare];
let works_subs = {
    "topic-works": sub_works_1,
    "featured": sub_works_2,
    "welfare": sub_works_3
};

for (let item of works) {
    item.addEventListener("click", function() {
        for (let i of works) {
            i.style.borderBottom = "none";
        }
        this.style.borderBottom = "4px #b61533 solid";
        for (let i in works_subs) {
            works_subs[i].style.display = "none";
        }
        works_subs[this.getAttribute("id")].style.display = "inline-block";
    })
};