

var s=" р."; 
var d=" дней."; 
document.getElementById('srok1').innerHTML = "0"+s;
 document.getElementById('srok2').innerHTML = "0"+d;


var tip;
document.querySelector("#select-choice").addEventListener('change', function (e) {
 
if (e.target.value!="")
{
  
  tip=e.target.value;


}
  else{
alert("Выберите тип сайта");
tip=0;
  }

});

var diz;
document.querySelector("#select-choice1").addEventListener('change', function (e1) {
 
if (e1.target.value!="")
{

  
  diz=e1.target.value;


}
  else{
alert("Выберите дизаин сайта");
diz=0;
  }

});


var ad;
document.querySelector("#select-choice2").addEventListener('change', function (e2) {
 
if (e2.target.value!="")
{

  ad=e2.target.value;

}
  else{
alert("Выберите дизаин сайта");
ad=0;
  }

});


let site ={
            param1:[
[3000],[6],
[20000],[10],
[50000],[30]
],

 param2:[
[1000], [4],
[2000], [6],
[20000],[20]
],


param3:[
[5000], [6],
[1000], [2]
],
stoimoct(t,d,a){

st=parseInt(t)+parseInt(d)+parseInt(a);
return st;


},
srok(t1,d1,a1){

sr=parseInt(t1)+parseInt(d1)+parseInt(a1);
return sr;


}
              


};

var tips, tipv, dizs,dizv, ads, adv;


function f () {
if (tip==="1"){
tips=site.param1[0];
tipv=site.param1[1];

}else if(tip==="2"){

tips=site.param1[2];
tipv=site.param1[3];


}else if(tip==="3"){

	tips=site.param1[4];
tipv=site.param1[5];
}else{

tips=site.param1[0];
tipv=site.param1[1];


}




if (diz==="1"){
dizs=site.param2[0];
dizv=site.param2[1];



}else if(diz==="2"){

dizs=site.param2[2];
dizv=site.param2[3];


}else if(diz==="3"){

	dizs=site.param2[4];
dizv=site.param2[5];



}else{

dizs=site.param2[0];
dizv=site.param2[1];


}


if (ad==="1"){
ads=site.param3[0];
adv=site.param3[1];



}else if(ad==="2"){

ads=site.param3[2];
adv=site.param3[3];


}else{

ads=site.param3[0];
adv=site.param3[1];


}

document.getElementById('srok1').innerHTML = site.stoimoct(tips,dizs,ads)+s;
 document.getElementById('srok2').innerHTML = site.srok(tipv,dizv,adv)+d;
    
}





document.querySelector("#select-choice").addEventListener('change', function (e1) {
  f();
   
});

document.querySelector("#select-choice1").addEventListener('change', function (e1) {
 
f();

});

document.querySelector("#select-choice2").addEventListener('change', function (e1) {
 
 
 f();
   

     
 
});





var lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 100,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });


menuItems.click(function(e) {
  var href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
  $('html, body').stop().animate({
    scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});


$(window).scroll(function() {
  
  var fromTop = $(this).scrollTop() + 160;

 
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });

  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;

    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }
});

 var min =0;
  var max = 100;  

   function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
var like = getRandom(min,max);
var worki = getRandom(min,max);
var project = getRandom(min,max);
var medal = getRandom(min,max);
 document.getElementById('like').innerHTML = getRandom(min,max);
 document.getElementById('worki').innerHTML = getRandom(min,max);
 document.getElementById('project').innerHTML = getRandom(min,max);
 document.getElementById('medal').innerHTML = getRandom(min,max);



function autoSChot(){

  var j=0;

  setInterval(() => { if (j<=max){
    
j=j+1;
like =like + 1;
worki = worki + 1;
project = project + 1;
medal = medal+ 1;
console.log(j);
 document.getElementById('like').innerHTML = like;
 document.getElementById('worki').innerHTML = worki;
 document.getElementById('project').innerHTML = project;
 document.getElementById('medal').innerHTML = medal;
  }
  },1);  
}



setTimeout(function(){autoSChot();},10000);





/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);

}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);

}





/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


 


function autoPlay(){
    var slides = document.getElementsByClassName("item");
  var j=1;
  setInterval(() => { if (j<=slides.length){
    showSlides(slideIndex = j);
    console.log(j);
  j=j+1;}else{j=1;

  
  }
  
  
  },5000);  
}



autoPlay();


/* Индекс слайда по умолчанию */
var slideIndex1 = 1;
showSlides1(slideIndex1);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide1() {
    showSlides1(slideIndex1 += 1);
stop();
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide1() {
    showSlides1(slideIndex1 -= 1);
stop(); 
}

/* Устанавливает текущий слайд */
function currentSlide1(n1) {
    showSlides1(slideIndex1 = n1);
}

/* Основная функция сладера */
function showSlides1(n1) {
    var i1;
    var slides1 = document.getElementsByClassName("item1");
    var dots1 = document.getElementsByClassName("slider-dots_item1");
    if (n1 > slides1.length) {
      slideIndex1 = 1
    }
    if (n1 < 1) {
        slideIndex1 = slides1.length
    }
    for (i1 = 0; i1 < slides1.length; i1++) {
        slides1[i1].style.display = "none";
    }
    for (i1 = 0; i1 < dots1.length; i1++) {
        dots1[i1].className = dots1[i1].className.replace(" active1", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active1";
}





function autoPlay1(){
    var slides1 = document.getElementsByClassName("item1");
  var j1=1;
  setInterval(() => { if (j1<=slides1.length){
    showSlides1(slideIndex1 = j1);
    console.log(j1);
  j1=j1+1;}else{j1=1;

  
  }
  
  
  },5000);  
    
    
  
  
  
}



autoPlay1();

$('.container1 .container_title').hide();
$('.container1').each(function(ind,el){       
    $('.container_title', this).delay(ind*4000).slideDown();    
});

$('.container1 .container_body').hide();
$('.container1').each(function(ind,el){       
    $('.container_body', this).delay(ind*10000).slideDown();    
});

$('.container1 .container_slider').hide();
$('.container1').each(function(ind,el){       
    $('.container_slider', this).delay(ind*15000).slideDown();    
});

$('.container1 .container_slider').hide();
$('.container1').each(function(ind,el){       
    $('.container_slider', this).delay(ind*15000).slideDown();    
});













