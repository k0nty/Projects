let footers = document.querySelectorAll(".social-icons__container");
footers.forEach(function(footer) {
    let icons = footer.querySelectorAll(".social-icons");
    let contacts = footer.querySelectorAll(".social-contact")
    icons.forEach(function(icons){
        footer.addEventListener("mouseover", function() {
          icons.classList.add("social-icons__active");
        });
        footer.addEventListener("mouseout", function() {
          icons.classList.remove("social-icons__active");
        });
    })
    contacts.forEach(function(contacts){
        footer.addEventListener("mouseover", function(){
            contacts.classList.add("social-contact__active")
        })
        footer.addEventListener("mouseout", function(){
            contacts.classList.remove("social-contact__active")
        })
    })
});