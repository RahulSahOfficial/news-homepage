const menu=document.getElementById("menu");
const close=document.getElementById("close");
const sideNav=document.getElementById("side-nav");

menu.addEventListener("click",function(){
    sideNav.style.display="block";
})

close.addEventListener("click",function(){
    sideNav.style.display="none";
})