//typewrite effect
const typeText = document.getElementById('homeTitle-type');
const textPhrase = ['Full-stack developer.', 'Web designer.', "Exploring the web" + "&" + "one if statement at a time."];
var i = 0;
var j = 0;
var currentPhrase = [];
var deleteText = false;
typeText.innerHTML = currentPhrase.join('');

function loopType () {

    if (i < textPhrase.length) {
        if (!deleteText && j <= textPhrase[i].length) {
            if (textPhrase[i][j] == "&") {
                // 
                currentPhrase.push("<br/>")
                typeText.innerHTML = currentPhrase.join("");
              } else {
                currentPhrase.push(textPhrase[i][j]);
                typeText.innerHTML = currentPhrase.join("");
            }
            j++;
        }
        if (deleteText && j <= textPhrase[i].length) {
            currentPhrase.pop(textPhrase[i][j]);
            j--
            typeText.innerHTML = currentPhrase.join('');
        }
        if (j == textPhrase[i].length) {
            deleteText = true;
        }
        if (deleteText && j === 0) {
            currentPhrase = [];
            deleteText = false;
            i++
            if (i == textPhrase.length) {
                i = 0;
            }
        }

    }
    setTimeout(loopType, 150);
}

loopType ();

//toggle menu 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//active menu and remove 
const navLink = document.querySelectorAll('.navLink');   

function linkAction(){
  //Active link
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  //Remove menu mobile
  const navMenu = document.getElementById('navMenu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//scroll animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '200px',
    duration: 2000,
    reset: true
});

//scroll home 
sr.reveal('.homeTitle',{}); 
sr.reveal('.homeImg',{delay: 400}); 
sr.reveal('.homeSocial-icon',{ interval: 200}); 

//scroll about
sr.reveal('.aboutContainer-img',{}); 
sr.reveal('.aboutSubtitle',{delay: 400}); 
sr.reveal('.aboutText',{delay: 400}); 

//scroll skills
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

//scroll work 
sr.reveal('.workImg',{interval: 200}); 

//scroll contact 
sr.reveal('.contactContainer',{interval: 200}); 

