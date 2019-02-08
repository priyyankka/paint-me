/*var color;

var select=["green","red","blue"];


document.getElementsByClassName("green").onclick=function(){
  color=document.getElementsByClassName("green").style.backgroundColor;
}

console.log(color);

var bg='#',bg1='#',bg2='#';
var letter='0123456789ABCDEF'.split('');

function start(){

  for(var i=0;i<6;i++){
    bg+=letter[Math.random(Math.floor()*16)];
    bg1+=letter[Math.random(Math.floor()*16)];
    bg2+=letter[Math.random(Math.floor()*16)];

  }
  document.getElementById("green").style.backgroundColor=bg;
  document.getElementById("red").backgroundColor=bg1;
  document.getElementById("blue").style.backgroundColor=bg2;

}

*/
var color;

$(document).ready(function(){
  $(".boxes").on("click",function(){

    color=$(this).css("background-color");

  })

  $(".row").on("click",function(){
    $(this).css("background-color",color);
  });
});
/*
function("paint_me"){
  document.getElementsByClassName("boxes").onclick=function(){
    color=
  }
}*/
