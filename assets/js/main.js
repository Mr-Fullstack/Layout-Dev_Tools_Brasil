
// inicialiazação do jquery
/*
$(document).ready(function(){

});
*/

// adiciona o evendo assimque todo o DOM for carregado

// deixa adpatavel para todos dos post 
document.addEventListener('DOMContentLoaded', function () { 
   //variaveis para interagir com slide scroll 
  var forward = document.getElementById('forward');
  var back = document.getElementById('back');
  back.style.display='none';
  var post = document.getElementById('post');
  var btn_menu_open = document.getElementById('open');
  var btn_menu_close = document.getElementById('close');
  var menu = document.getElementById('menu');
  var search = document.getElementById('search'); 
  var form_search= document.getElementById('form-search'); 
  var search_input= document.querySelectorAll('.search_input');   
  var open_search = false;
  forward.onclick = function () {
      //pequena lógica para avança o scroll
      if(post.scrollLeft == 400 ){
      //se o scroll alcanço 400px 
        post.scrollLeft = 0 - post.scrollLeft ;
        back.style.display='none';
      }else{
      //avança o scroll em 200px
        post.scrollLeft +=200;
        back.style.display='block';
      }
  };

  back.onclick = function () {
    //retrocede o scroll em 200px
      post.scrollLeft -=200;
  };


  btn_menu_close.onclick = function () {
      //quero  fazer algo 
      menu.style.width = '0px';
      menu.style.opacity = '0';
      menu.style.transition= 'all .5s';
      btn_menu_close.style.opacity= '0';
      btn_menu_close.style.marginLeft='-10%';
      btn_menu_open.style.display = 'flex';
      btn_menu_close.style.display = 'none';
      btn_menu_open.style.opacity= '1'; 
  };  

  btn_menu_open.onclick = function () {
    //quero  fazer algo 

    form_search.style.display = 'flex';
    form_search.style.height= '0px';
    form_search.style.padding= '0';
    form_search.style.opacity= '0';
    open_search = false;

    menu.style.display = 'flex';
    menu.style.width = '100%';
    menu.style.opacity = '1';
    menu.style.transition= 'all .5s';
    btn_menu_close.style.opacity= '1';
    btn_menu_close.style.display = 'flex';
    btn_menu_open.style.display = 'none';
    btn_menu_close.style.marginLeft='0px';
    
};  

form_search.style.display = 'none';
// lógica para abrir o search com onclick
 search.onclick = function(){
   // controle do search
   menu.style.width = '0px';
      menu.style.opacity = '0';
      menu.style.transition= 'all .5s';
      btn_menu_close.style.opacity= '0';
      btn_menu_close.style.marginLeft='-10%';
      btn_menu_open.style.display = 'flex';
      btn_menu_close.style.display = 'none';
      btn_menu_open.style.opacity= '1'; 
  if ( open_search === false ){

    form_search.style.animation = 'SlideDown 1s'
    form_search.style.display = 'flex';
    form_search.style.height= 'auto';
    form_search.style.padding= '2rem';
    form_search.style.opacity= '1';
    open_search = true;
  }
  else{
    form_search.style.display = 'flex';
    form_search.style.height= '0px';
    form_search.style.padding= '0';
    form_search.style.opacity= '0';
    open_search = false;
  }

  console.log(' search '+open_search);
 }
 

}, false);

