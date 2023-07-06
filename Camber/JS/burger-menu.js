let burgerMenu = document.querySelector('.vbp-header-menu-button__svg');
let panel = document.querySelector('.panel-container')
let blocks = document.querySelectorAll('.nav-panel__block')
let lines = document.querySelectorAll('.lines')
burgerMenu.addEventListener("click", () =>{
    if (burgerMenu.classList.contains("menu-open")) {
        burgerMenu.classList.remove("menu-open");
        panel.classList.remove("menu-open")
        for(let i = 0; i < blocks.length; i++){
            blocks[i].classList.remove("menu-open")
        }
    }
    else{        
        burgerMenu.classList.add("menu-open");
        panel.classList.add("menu-open");
        for(let i = 0; i < blocks.length; i++){
            blocks[i].classList.add("menu-open")
        }
    }
})