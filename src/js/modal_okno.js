const modalLinks = document.querySelectorAll('.okno_link');
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll('.okno_pading');


let unlock = true;
const timeout = 800;

if (modalLinks.length  > 0){

  for(let index = 0; index < modalLinks.length; index++){
    
    const modalLink = modalLinks[index];
    modalLink.addEventListener("click", function(e){
      const madalName = modalLink.getAttribte('href').replace('#','');
      const curentModal = document.getElemetById(madalName);
      modalOpen(curentModal);
      e.preventDefault();

    });


  }
}




















const modalCloseIcon = document.querySelectorAll('.okno_close');
if (modalCloseIcon.length > 0) {


  for ( let index = 0; index < modalCloseIcon.length; index++){

     const el = modalCloseIcon[index];
     el.addEventListener('click', function (e){
      modalclose(el.closest('.okno'));
      e.preventDefault();

     });
}

}

  function modalOpen(curentModal){
if (curentModal && unlock){
     
     const madalActive = document.querySelector('.okno.open');
     if(madalActive){
      modalClose(madalActive, false);
     }
     else{



bodyLock();
     }
curentModal.classList.add('open');
curentModal.addEventListener("click", function(e){
if (!e.target.closest('.okno_content')){
  modalClose(e.target.closest('.okno'));
}


});


}


  }


  function modalClose(madalActive, doUnlock = true){

    if (unlock){
      madalActive.classList.remove('open');
      if(doUnlock){
        bodyUnLock();
      } 
    }
  }


  function bodyLock(){
const lockPaddingValue = window.innerWidth - document.querySelector('.wrap_okno').offsetWidth + 'px';
if (lockPadding.length > 0){

for (let index = 0; index < lockPadding.length; index++){
  const el = lockPadding[index];
  el.style.paddingRidth = lockPaddingValue;

}
}
body.style.paddingRidth = lockPaddingValue;
body.classList.add('lock');

uhlock = false;
setTimeout(function (){
  uhlock = true;
}, timeout);

  }


  function bodyUnLock(){

setTimeout(function () {
  if (lockPadding.length > 0){
for (let index = 0; index < lockPadding.length; index++){
   const el = lockPadding[index];
  el.style.paddingRidth = '0px';

}
}
body.style.paddingRidth = '0px';
body.classList.add('lock');



},timeout);


uhlock = false;
setTimeout(function (){
  uhlock = true;
}, timeout);


  }



  document.addEventListener('keydown', function(e){


if (e.which === 27){
  const madalActive = document.querySelector('.okno.open');
  modalClose(madalActive);
}

  });


  (function(){
if (!Element.prototype.closest){

Element.prototype.closest = function (css) {
var node = this;
while(node){
if (node.matches(css)) return node;
else node = node.parentElement;
}

return null;
};
}
})();
(function (){
  if(!Element.prototype.matches){
    Element.prototype.matches = Element.prototype.matchesSelector ||
    Element.prototype.msMatchesSelector  ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.webkitMatchesSelector||
    Element.prototype.oMatchesSelector;

  }
})();

setTimeout(function(){document.getElementById("okno_hr").click();},5000);

