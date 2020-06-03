let button =document.querySelector("body > header > div.container > div > div > div.col-10.d-flex.justify-content-end > div.box.d-xs-inline-block.d-sm-inline-block.d-md-none.d-xl-none");

let menu=document.querySelector("body > header > div.menu-right.back");
let win=document.querySelector("body > header");

function run(){
menu.classList.toggle('back');

}

    
 
button.onclick=run;



// $(function(){

//     $('.box').on('click', function(){
//         $('.menu-right').removeClass('back');
//     })

//     $('.logo').on('click', function(){
//         $('.menu-right').addClass('back');
//     })

   
// });