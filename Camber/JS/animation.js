window.addEventListener('scroll', e=>{
  let scrollValue = document.getElementsByClassName('back-btn')[0].classList;
  if(scrollY > 200){
    scrollValue.add("back-btn__active");
  }
  else {
    scrollValue.remove("back-btn__active");
  }
});
// all animation
const animItems = document.querySelectorAll("._anim-items");
if(animItems.length > 0){
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params){
    for(let index = 0; index < animItems.length; index++){
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      
      let animItemPoint = window.innerHeight - animItemHeight / animStart; 
      if(window.innerHeight < animItemHeight){
        animItemPoint = window.innerHeight - window.innerHeight / animStart; 
      }
      if((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)){
        animItem.classList.add("_active");
      }
      // else{
      //   if(!animItem.classList.contains('_anim-no-hide')){
      //     animItem.classList.remove("_active");
      //   }
      // }
    }
  }
  animOnScroll();
  function offset(el){
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    return{top: rect.top + scrollTop, left: rect.left + scrollLeft};
  }
}
//end all animation