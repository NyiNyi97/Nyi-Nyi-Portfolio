const skillbar = document.getElementById('skills-section');
const bars = document.querySelectorAll('.progress_bar');

function showProgress(){
    bars.forEach(bar=>{
        const value = bar.dataset.progress;
         bar.style.opacity = 1;
         bar.style.width = `${value}%`;

    })
}

function hideProgress(){
    bars.forEach(p=>{
      p.style.opacity = 0;
      p.style.width = 0;

    })
}

window.addEventListener('scroll', ()=>{
    const sectionPos = skillbar.getBoundingClientRect().top;
    const screenpos = window.innerHeight / 2;

    if(sectionPos < screenpos){
        showProgress();
    }else{
        hideProgress();
    }
});