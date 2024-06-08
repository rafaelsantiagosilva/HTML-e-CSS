var menu = document.querySelector("menu");

function clickMenu(){
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}

function mudouTamanho(){
    if(window.innerWidth >= 992){
        menu.style.display = "block";
    }else{
        menu.style.display = "none";
    }
}