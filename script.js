const mediaQuery = window.matchMedia('(max-width: 1001px)')
const burger_menu = document.getElementById('burger')
const nav = document.getElementById('nav');
const sibling = nav.nextSibling;
var burger_status = 0;
function handle(res, obj){
   var wrap = document.createElement('div');
   wrap.style.display = 'none';
   if (res.matches){
      nav.parentNode.insertBefore(wrap, nav);
      wrap.appendChild(nav);  
      console.log(burger_status)
         document.addEventListener('click', function(event){
            console.log(burger_status)
            if(obj.contains(event.target) && burger_status === 0){
               wrap.style.display = 'flex';
               wrap.style.width = '100%';
               wrap.style.position = 'absolute'
               wrap.style.top = '0';
               wrap.style.left = '0';
               wrap.style.height = '100vh';
               nav.style.height = '100%';
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
            else if ((burger_status === 1 && !nav.contains(event.target))) {
               
               nav.style.display = 'none';
               wrap.style.display = 'none'
               burger_status = 0;
            } 
               
         })
            
      }
      else if(!res.matches){
         console.log('!res')
         burger_menu.insertAdjacentElement('afterend', nav);
         wrap.remove();
         nav.style.display = 'grid'
         nav.style.height = '';
         nav.style.display = '';
         nav.style.justifyContent = '';
         nav.style.gridGap = '';
         nav.style.flexDirection = '';
         nav.style.position = '';
         nav.style.width = '';
         nav.style.top = '';
         nav.style.left = '';
         nav.style.background = '';
         nav.style.fontSize = '';
      }
      
   }

mediaQuery.addEventListener('change', function() { handle(this, burger_menu); });

