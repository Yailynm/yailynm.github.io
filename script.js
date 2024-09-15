console.log("hello")

// scroll effect
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));




//animates text
const text = document.querySelector(".textImage");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

console.log(splitText);

for(let i=0; i<splitText.length;i++){
    text.innerHTML += "<span>"+splitText[i]+"</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span =text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer = null;
}




