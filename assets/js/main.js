
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
  var windowWidth = window.innerWidth;
  var tela = document.getElementById('width'); 
  var open_search = false;
  var button_input = document.getElementById('button_input'); 
  var search_input = document.getElementById('search_input'); 

 

  forward.onclick = function () {
    let valor =0;
    let avança=0;
    //pequena lógica para avança o scroll sabendo o tamanho da tela
    if (windowWidth == 1440 ){
      valor = 1977;
      avança = 310;
    }
    else if ( windowWidth == 1280)
    {
    valor = 2120;
    avança = 310;
    }
    else if ( windowWidth <= 460)
    {
    valor = 3003;
    avança = 330;
    }

    if ( post.scrollLeft == valor )
    {
    //se o scroll alcanço 400px 
      post.scrollLeft = 0 - post.scrollLeft ;
      back.style.display='none';
    }
    else
    {
     //avança o scroll em 200px
      post.scrollLeft +=avança;
      back.style.display='block';
      console.log( post.scrollLeft);
    }
  
  };

  back.onclick = function () {
    //retrocede o scroll em 200px
      post.scrollLeft -=300;
      if ( post.scrollLeft == 0 ) 
      {
        back.style.display='none';
      }
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
    button_input.style.display='none';
    search_input.style.display='none';

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
   //estilização padrão
      menu.style.width = '0px';
      menu.style.opacity = '0';
      menu.style.transition= 'all .5s';
      btn_menu_close.style.opacity= '0';
      btn_menu_close.style.marginLeft='-10%';
      btn_menu_open.style.display = 'flex';
      btn_menu_close.style.display = 'none';
      btn_menu_open.style.opacity= '1'; 
      

  if ( open_search === false ){
   // se menu estiver fechado ele abre
    form_search.style.animation = 'SlideDown 1s'
    form_search.style.display = 'flex';
    form_search.style.height= 'auto';
    form_search.style.padding= '2rem';
    form_search.style.opacity= '1';
    button_input.style.display='block';
    search_input.style.display='block';
    open_search = true;
    
  }
  else{
  // senão ele fecha
    form_search.style.display = 'flex';
    form_search.style.height= '0px';
    form_search.style.padding= '0';
    form_search.style.opacity= '0';
    button_input.style.display='none';
    search_input.style.display='none';
    open_search = false;
  }

  console.log(' search '+open_search);
 }
 


}, false);

function tela(tela ){
  var windowWidth = window.innerWidth;
  var tela = document.getElementById('width'); 
  tela.innerHTML = windowWidth;
}
tela();
window.addEventListener('resize', function(){
tela();
});
