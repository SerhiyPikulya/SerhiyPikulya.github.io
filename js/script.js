window.addEventListener('DOMContentLoaded', () => {

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeMenu = document.querySelector('.menu__close');
      activeTabs = document.querySelector('.skills__tab2');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});


//Навички
    const skillsTab = document.querySelectorAll('.skills__tab'),
          skillsContent = document.querySelectorAll('.skills__grid'),
          skillsTabs = document.querySelector('.skills__tabs');
    
    function hideSkillsGrid() {
        skillsContent.forEach(item => {
            item.classList.remove('skills__grid_active');
        }); 
  
        skillsTab.forEach(item => {
            item.classList.remove('skills__tab_active');
        });
    }
  
    function showSkillsGrid(i = 0) {
      skillsContent[i].classList.add('skills__grid_active');
      skillsTab[i].classList.add('skills__tab_active');
    }
  
    hideSkillsGrid();
    showSkillsGrid();
  
    skillsTabs.addEventListener('click', (event, i) => {
        const target = event.target;
        //console.log(target.parentNode);
        if (target && target.parentNode.matches('li.skills__tab')) { // або (target.parentNode.classList.contains('skills__tab')) {  
            skillsTab.forEach((item, i) => {
                //console.log(item);
                if (item === target.parentNode) {
                    hideSkillsGrid();
                    showSkillsGrid(i);
                }
            });    
        }
    });
    
//Шкала навичок
    const counters = document.querySelectorAll('.skills__progress-counter'),
          lines = document.querySelectorAll('.skills__progress-scale span'),
          window_height = (window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.offsetHeight));
          //top = document.body.scrollTop;

    // counters.forEach( (item, i) => {
    //     lines[i].style.width = item.innerHTML;
    //    // lines[i].style.animation = 'progresScale .6s linear';
    // });

// ЗМІНА КОЛЬОРУ ПРИ СКРОЛІ
const black1 = document.querySelector('.sidepanel__divider'),
      black2 = document.querySelector('.sidepanel__text span'),
      black3 = document.querySelectorAll('.sidepanel__link svg');

window.addEventListener('scroll', function() {
    //Анімація після появи елементів на екрані
    if (window.scrollY > counters[0].offsetTop - window_height) {
        counters.forEach( (item, i) => {
            lines[i].style.width = item.innerHTML;
            lines[i].style.animation = 'progresScale .6s linear';
        });
    }
    
    if (window.pageYOffset > 500) {
        black1.style.backgroundColor = '#000';
        black2.style.color = '#000';
        black3.forEach (item => {
            //console.log(item);
            item.style.fill = '#000';
        });  

    } else {
        black1.style.backgroundColor = '#fff';
        black2.style.color = '#fff';
        black3.forEach (item => {
           // console.log(item);
            item.style.fill = '#fff';
        });
    }
  });
  
});