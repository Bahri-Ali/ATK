// when you click at news scroll y up
let news=document.querySelectorAll(".news")
news.forEach((el)=>{
    el.addEventListener("click",(el)=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    })
})
// change inerhtml for active
let active=document.querySelector(".active")
let vedioActive = document.querySelector(".vidioActive")
let textActive = document.querySelector(".textActive")
let moreNews =document.querySelectorAll(".news")
let newVedio = document.querySelectorAll(".v1")
let newSpan = document.querySelectorAll(".text1")
for (let i = 0; i < moreNews.length; i++) {
    moreNews[i].addEventListener("click",(element)=>{
        let newsIs=i;
        // news who show now
        let active=document.querySelector(".active")
        let vedioActive = document.querySelector(".vidioActive")
        let textActive = document.querySelector(".textActive")
        // all news 
        let moreNews =document.querySelectorAll(".news")
        let vedios = document.querySelectorAll(".v1")
        let Spans = document.querySelectorAll(".text1")
        // change vedio and remove vedio from news
        vedios[i].removeAttribute("class")
        vedios[i].setAttribute("class","vidioActive")
        active.prepend(vedios[i])
        vedios[i].remove
        vedioActive.removeAttribute("class")
        vedioActive.setAttribute("class","v1")
        moreNews[i].prepend(vedioActive)
        vedioActive.remove
        // change text and remove text from news
        Spans[i].removeAttribute("class")
        Spans[i].setAttribute("class","textActive")
        active.append(Spans[i])
        Spans[i].remove
        textActive.removeAttribute("class")
        textActive.setAttribute("class","text1")
        moreNews[i].append(textActive)
        textActive.remove

    })
}
// create seting 
let butonSeting=document.querySelector("#seting")
let opchen=false
butonSeting.addEventListener(("click"),(e)=>{
    if(opchen===false){
        document.querySelector(".parametre").style.display="flex"
        butonSeting.textContent="close"
        opchen=true
        document.querySelector("main").style.marginTop="150px"

    }else{
        document.querySelector(".parametre").style.display="none"
        butonSeting.textContent="settings"
        document.querySelector("main").style.marginTop="120px"
        opchen=false
    }
})
// change mode

let chang=document.querySelector("#nuit")
let colorSpan=document.querySelectorAll("main span")
let mode=true
chang.addEventListener(("click"),()=>{
    if(mode===true){
        document.querySelector("body").style.backgroundColor="#000000de"
        document.querySelector(".parametre").style.display="none"
        document.querySelector("#nuit").style.color="white"
        document.querySelector("#traduction").style.color="white"
        document.querySelector("#seting").style.color="white"
        butonSeting.textContent="settings"
        document.querySelector("main").style.marginTop="120px"
        colorSpan.forEach((element)=>{
            element.style.color="white"
        })
        document.querySelector("#nuit").textContent="sunny"
        opchen=false
        mode=false
    }
    else{
        document.querySelector("body").style.backgroundColor="white"
        document.querySelector(".parametre").style.display="none"
        document.querySelector("#nuit").style.color="black"
        document.querySelector("#traduction").style.color="black"
        document.querySelector("#seting").style.color="black"
        butonSeting.textContent="settings"
        document.querySelector("main").style.marginTop="120px"
        document.querySelector("#nuit").textContent="dark_mode"
        colorSpan.forEach((element)=>{
            element.style.color="black"
        })
        opchen=false
        mode=true
    }
})
// tradiction
let tradiction=document.querySelector("#traduction")
tradiction.addEventListener(("click"),function(){
    alert("tradiction ne pas disponible pour le memant")
    document.querySelector(".parametre").style.display="none"
    butonSeting.textContent="settings"
    document.querySelector("main").style.marginTop="120px"
    opchen=false
})

// selecte news
// a is sport
// b is word
// c is Ia
// d is food
// news 
let sportNews =document.querySelectorAll(".a")
let wordNews=document.querySelectorAll(".b")
let iaNews =document.querySelectorAll(".c")
let foodsNews=document.querySelectorAll(".d")
//  icons 
let home=document.querySelector(".home")
let sport=document.querySelector(".sport")
let word=document.querySelector(".word")
let Ia=document.querySelector(".Ia")
let foods=document.querySelector(".foods")
let icons=document.querySelectorAll(".icons>li")
// chouse news
home.addEventListener(("click"),()=>{
    for(let i =0 ;i<wordNews.length;i++){
        wordNews[i].style.display="flex"
    }
    for(let i =0 ;i<sportNews.length;i++){
        sportNews[i].style.display="flex"
    }
    for(let i =0 ;i<iaNews.length;i++){
        iaNews[i].style.display="flex"
    }
    for(let i =0 ;i<foodsNews.length;i++){
        foodsNews[i].style.display="flex"
    }
    home.style.borderBottom="2px solid red ";
    sport.style.borderBottom="none";
    word.style.borderBottom="none";
    Ia.style.borderBottom="none";
    foods.style.borderBottom="none";
})
sport.addEventListener(("click"),()=>{
    for(let i =0 ;i<wordNews.length;i++){
        wordNews[i].style.display="none"
    }
    for(let i =0 ;i<sportNews.length;i++){
        sportNews[i].style.display="flex"
    }
    for(let i =0 ;i<iaNews.length;i++){
        iaNews[i].style.display="none"
    }
    for(let i =0 ;i<foodsNews.length;i++){
        foodsNews[i].style.display="none"
    }
    home.style.borderBottom="none ";
    sport.style.borderBottom="2px solid red";
    word.style.borderBottom="none";
    Ia.style.borderBottom="none";
    foods.style.borderBottom="none";
})
word.addEventListener(("click"),()=>{
    for(let i =0 ;i<wordNews.length;i++){
        wordNews[i].style.display="flex"
    }
    for(let i =0 ;i<sportNews.length;i++){
        sportNews[i].style.display="none"
    }
    for(let i =0 ;i<iaNews.length;i++){
        iaNews[i].style.display="none"
    }
    for(let i =0 ;i<foodsNews.length;i++){
        foodsNews[i].style.display="none"
    }
    word.style.borderBottom="2px solid red ";
    home.style.borderBottom="none ";
    sport.style.borderBottom="none";
    Ia.style.borderBottom="none";
    foods.style.borderBottom="none";

})
Ia.addEventListener(("click"),()=>{
    for(let i =0 ;i<wordNews.length;i++){
        wordNews[i].style.display="none"
    }
    for(let i =0 ;i<sportNews.length;i++){
        sportNews[i].style.display="none"
    }
    for(let i =0 ;i<iaNews.length;i++){
        iaNews[i].style.display="flex"
    }
    for(let i =0 ;i<foodsNews.length;i++){
        foodsNews[i].style.display="none"
    }
    Ia.style.borderBottom="2px solid red ";
    word.style.borderBottom="none";
    home.style.borderBottom="none ";
    sport.style.borderBottom="none";
    foods.style.borderBottom="none";
})
foods.addEventListener(("click"),()=>{
    for(let i =0 ;i<wordNews.length;i++){
        wordNews[i].style.display="none"
    }
    for(let i =0 ;i<sportNews.length;i++){
        sportNews[i].style.display="none"
    }
    for(let i =0 ;i<iaNews.length;i++){
        iaNews[i].style.display="none"
    }
    for(let i =0 ;i<foodsNews.length;i++){
        foodsNews[i].style.display="flex"
    }
    foods.style.borderBottom="2px solid red "; 
    Ia.style.borderBottom="none";
    word.style.borderBottom="none";
    home.style.borderBottom="none ";
    sport.style.borderBottom="none";
})