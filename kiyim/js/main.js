
'use srtict';
(function(){
    const header=document.querySelector(".header")
    window.onscroll=()=>{
        if(window.pageYOffset>100){
            header.classList.add("header__act")
        }
        else{header.classList.remove("header__act")}
    }
})()
