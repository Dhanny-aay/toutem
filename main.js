
// dark mode
const darkbtn = document.getElementById('darkmode');
const lightbtn = document.getElementById('lightmode');
const darkenbg = document.querySelectorAll('.darkbg');
const darkentxt = document.querySelectorAll('.darktxt');
const lighttxt = document.querySelectorAll('.lighttxt');
const lighttxt1 = document.querySelectorAll('.lighttxt1');
const darkentxt1 = document.querySelectorAll('.darktxt1');
const darkenbox = document.querySelectorAll('.darkbox');


// dark mode
darkbtn.addEventListener('click', ()=>{
    for(let i = 0; i < darkenbg.length; i++){
        darkenbg[i].classList.add('bg-toutedark');
    }
    for(let j = 0; j < darkentxt.length; j++){
        darkentxt[j].classList.add('text-white')
    }
    for(let l = 0; l < darkentxt1.length; l++){
        darkentxt1[l].classList.add('text-toutedark')
    }
    for(let k = 0; k < darkenbox.length; k++){
        darkenbox[k].classList.add('bg-toutedarkbox')
    }
    for(let m = 0; m < lighttxt.length; m++){
        lighttxt[m].classList.add('text-whiteshade1')
    }
    for(let n = 0; n < lighttxt1.length; n++){
        lighttxt1[n].classList.add('text-toutemgrey')
    }
    darkbtn.classList.add('hidden')
    lightbtn.classList.remove('hidden');
    lightbtn.classList.add('flex');
})


// light mode 
lightbtn.addEventListener('click', ()=>{
    for(let i = 0; i < darkenbg.length; i++){
        darkenbg[i].classList.remove('bg-toutedark');
    }
    for(let j = 0; j < darkentxt.length; j++){
        darkentxt[j].classList.remove('text-white')
    }
    for(let l = 0; l < darkentxt1.length; l++){
        darkentxt1[l].classList.remove('text-toutedark')
    }
    for(let k = 0; k < darkenbox.length; k++){
        darkenbox[k].classList.remove('bg-toutedarkbox')
    }
    for(let m = 0; m < lighttxt.length; m++){
        lighttxt[m].classList.remove('text-whiteshade1')
    }
    for(let n = 0; n < lighttxt1.length; n++){
        lighttxt1[n].classList.remove('text-toutemgrey')
    }
    lightbtn.classList.add('hidden')
    darkbtn.classList.remove('hidden');
    darkbtn.classList.add('flex');
})

