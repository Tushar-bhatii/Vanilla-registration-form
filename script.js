let p_i_detailsdiv =document.querySelector("#personalandidentity-detailscontainer");
let a_f_detailsdiv =document.querySelector("#addressandfamily-detailscontainer");
console.log(p_i_detailsdiv);
console.log(a_f_detailsdiv);
let backbutton = document.querySelector("#back-button");
let submitbutton = document.querySelector("#submit-button");
let nextbutton = document.querySelector("#next-button");
nextbutton.addEventListener("click",function(){
    p_i_detailsdiv.classList.toggle('defaultnone');
    a_f_detailsdiv.classList.toggle('defaultnone');
})
backbutton.addEventListener("click",function(){
    p_i_detailsdiv.classList.toggle('defaultnone');
   a_f_detailsdiv.classList.toggle('defaultnone');
})
 