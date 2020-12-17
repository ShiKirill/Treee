const igrElems = document.querySelectorAll('.igr');
const blinkElems = document.querySelectorAll('.blink');
const achievElem = document.querySelector('.modal-wrapper');
const sideElems = document.querySelectorAll('.sides_window');
const igrushkaElems = document.querySelectorAll('.igrushka');
const modalWindowImgElems = document.querySelectorAll('.modal_window');
const navWidth = scrollbarWidth();

const KananPhoto = document.querySelector('.Kanan-photo');
const ElenaPhoto = document.querySelector('.Chuguy-photo');
const treeTop = document.querySelector('.tree-top-1');
const treeMid = document.querySelector('.tree-top-2');
const treeBot = document.querySelector('.tree-top-3');

treeMid.addEventListener('click', event =>{
    ElenaPhoto.classList.toggle('visible');
})

treeBot.addEventListener('click', event =>{
    KananPhoto.classList.toggle('visible');
})

document.addEventListener('click', event => {
    let target = event.target;
    const its_Kanan = target == treeBot;
    const its_Elena = target == treeMid;
    if (!its_Kanan && !its_Elena){
    KananPhoto.classList.remove('visible');
    ElenaPhoto.classList.remove('visible');
    }
})


for (let i = 0; i < igrElems.length; i++) {
    igrElems[i].addEventListener('mouseover', event => {
        event.preventDefault();
        blinkElems[i]
            .classList
            .toggle('visible');
        igrushkaElems[i].classList.toggle('visible');
    });
    igrElems[i].addEventListener('mouseout', event => {
        event.preventDefault();
        blinkElems[i]
            .classList
            .remove('visible');
        igrushkaElems[i].classList.remove('visible');
    });
    blinkElems[i].addEventListener('click', event => {
        event.preventDefault();
        modalWindowImgElems[i].style.display = 'inherit';
        achievElem
            .classList
            .toggle('visible');
        blinkElems[i]
            .classList
            .remove('visible');
            document.body.classList.toggle('overflow_hidden');
            document.body.style.paddingRight = navWidth + "px";
            
    });

};

function scrollbarWidth() {
    var documentWidth = parseInt(document.documentElement.clientWidth);
    var windowsWidth = parseInt(window.innerWidth);
    var scrollbarWidth = windowsWidth - documentWidth;
    return scrollbarWidth;
}


    achievElem.addEventListener('click', event=>{
        for (let i=0;i< modalWindowImgElems.length;i++){
            modalWindowImgElems[i].style.display = 'none';
            }
            achievElem
                .classList
                .remove('visible');
                document.body.classList.remove('overflow_hidden');
                document.body.style.paddingRight = "0";
    })
