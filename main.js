const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBox);
function showBox(){
    let triggerBottom = window.innerHeight;
    boxes.forEach(box => {
        let boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerBottom / 1.2){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
   });
}


