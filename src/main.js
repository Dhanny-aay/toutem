// animate divs

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('animate__fadeIn');
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__slow');
            // entry.target.classList.add('animate__delay-2s');
        }
        else{
            entry.target.classList.remove('animate__fadeIn');
            entry.target.classList.remove('animate__animated');
            entry.target.classList.remove('animate__slow');
            // entry.target.classList.remove('animate__delay-2s');
        }
    });
});

const animatedelements = document.querySelectorAll('.anim');
animatedelements.forEach((el) => observer.observe(el));



// animate txt 1

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('animate__fadeInRight');
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__slow');
            // entry.target.classList.add('animate__delay-2s');
        }
        else{
            entry.target.classList.remove('animate__fadeInRight');
            entry.target.classList.remove('animate__animated');
            entry.target.classList.remove('animate__slow');
            // entry.target.classList.remove('animate__delay-2s');
        }
    });
});

const animatedtxt = document.querySelectorAll('.animtxt');
animatedtxt.forEach((el) => observer1.observe(el));

// animate blog 1

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('animate__fadeInLeft');
            entry.target.classList.add('animate__animated');
            entry.target.classList.add('animate__slow');
            // entry.target.classList.add('animate__delay-2s');
        }
        else{
            entry.target.classList.remove('animate__fadeInLeft');
            entry.target.classList.remove('animate__animated');
            entry.target.classList.remove('animate__slow');
            // entry.target.classList.remove('animate__delay-2s');
        }
    });
});

const animatedblog = document.querySelectorAll('.animblog');
animatedblog.forEach((el) => observer2.observe(el));

// dark mode
const darkbtn = document.getElementById('darkmode');
const darkenbg = document.querySelectorAll('.darkbg');

darkbtn.addEventListener('click', ()=>{
    for(let i = 0; i < darkenbg.length; i++){
        darkenbg[i].classList.add('bg-toutedark')
    }
})