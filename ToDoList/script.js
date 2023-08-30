let closes = document.getElementsByClassName("list__item__close");
for(let i = 0; i < closes.length; i++){
    closes[i].onclick = function() {
        let v = closes.length;
        document.getElementById("score__full").innerHTML = v-1;  
        this.parentElement.remove();
    };
};
let list = document.querySelector("ul");
list.addEventListener("click", function(ev){
    if(ev.target.tagName = "li"){
        ev.target.classList.toggle("checked");
        document.getElementById("score").innerHTML = document.querySelectorAll(".list__item.checked").length;
    };
});
let btn = document.getElementById("input-block__accept");
btn.addEventListener("click", function (){
        let element = document.createElement("li");
        let value = document.getElementById("input-block__enter").value;
        let t = document.createTextNode(value);
        element.appendChild(t);
        element.classList.add("list__item");
        if(value === ""){
            alert("You must write something!");
        }
        else{
            document.getElementById("list").appendChild(element);
            let span = document.createElement("SPAN");
            let txt = document.createTextNode("x");
            span.classList.add("list__item__close");
            span.appendChild(txt);
            element.appendChild(span);
            for (i = 0; i < closes.length; i++) {
                closes[i].onclick = function() {
                    let v = closes.length;
                    document.getElementById("score__full").innerHTML = v-1;   
                    this.parentElement.remove();
                }
            }
        }
        document.getElementById("input-block__enter").value = "";
});
btn.addEventListener("click", function(){
    let v = closes.length;
    document.getElementById("score__full").innerHTML = v;    
})
let clear = document.getElementById("clear-block__clear-btn");
clear.addEventListener("click", function(){
    let checkedItems = document.querySelectorAll(".list__item.checked");
    for(let i = 0; i < checkedItems.length; i++){
        checkedItems[i].remove();
        let v = closes.length;
        document.getElementById("score__full").innerHTML = v;
    };
    document.getElementById("score").innerHTML = document.querySelectorAll(".list__item.checked").length;
});