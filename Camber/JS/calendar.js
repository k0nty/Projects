const daysTag = document.querySelector('.days');
const currentDate = document.querySelector(".calendar-topic");
const prevNextIcon = document.querySelectorAll(".icons span");

let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const selectDaysActive = () => {
    let selectedItems = document.querySelectorAll(".days .select");
    selectedItems.forEach(select => {
        select.addEventListener("click", () => {
            let selectedContent = select.textContent;
            let targetSpan = Array.from(document.querySelectorAll(".date-info .update-days")).find(span => span.textContent === selectedContent);
            if (targetSpan) {
                targetSpan.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });
    });
};

const selectDays = () => {
    let update = document.querySelectorAll(".days .days-elments");
    let updateMonths = document.querySelectorAll(".date-info .update-months");
    let updateYears = document.querySelectorAll(".date-info .update-years");
    let dateInfo = document.querySelectorAll(".date-info .update-days");
    for (let i = 0; i < dateInfo.length; i++) {
        for (let index = 0; index < update.length; index++) {
            if (parseInt(updateYears[i].textContent) == currYear && parseInt(updateMonths[i].textContent) == currMonth+1 && dateInfo[i].textContent == update[index].textContent) {
                update[index].classList.add('select');
            }
        }
    }
    selectDaysActive();
}

const renderCalendar = () => {
    const date = new Date(currYear, currMonth, 1);

    let firstDayofMonth = date.getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";
    
    for(let i = firstDayofMonth; i > 0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === new Date().getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "days-elments";
        liTag += `<li class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
    selectDays()
}
    
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            currYear = icon.id === "prev" ? currYear - 1 : currYear + 1;
            currMonth = currMonth < 0 ? 11 : 0;
        }

        renderCalendar();   
    });
});