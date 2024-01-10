const mediaQuery = window.matchMedia('(max-width: 1001px)')
const burger_menu = document.getElementById('burger')
const nav = document.getElementById('nav');
var burger_status = 0
function handle(res, obj){
   if (res.matches){
         obj.addEventListener('click', function(){
            console.log(burger_status)
            if(burger_status === 0){
               nav.style.height = '100vh';
               nav.style.display = 'flex';
               nav.style.justifyContent = 'flex-start';
               nav.style.gridGap = '0';
               nav.style.flexDirection = 'column';
               nav.style.position = 'fixed';
               nav.style.width = '320px';
               nav.style.top = '0';
               nav.style.left = '0';
               nav.style.background = '#FFF';
               nav.style.fontSize = '18px';
               burger_status = 1;
            }
            else{
               document.addEventListener('click', function(event){
                  if(!nav.contains(event.target)){
                     nav.style.display = 'none';
                     burger_status = 0;
                  }
               })
            }
         }) 
      
      }
   }

mediaQuery.addEventListener('change', function() { handle(this, burger_menu); });

