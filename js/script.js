const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade-up").forEach(section =>{
    observer.observe(section);
});

const roles=[
    "Front-End Developer",
    "Computer Science Student",
    "UI Enthusiast"
];

let roleIndex =0;
let charIndex =0;

const typingElement = document.querySelector(".typing");

function typeRole(){
    if(charIndex < roles[roleIndex].length){
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole,70);
    }
    else{
        setTimeout(eraseRole,1800);
    }
}

function eraseRole(){
    if(charIndex>0){
        typingElement.textContent = roles[roleIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(eraseRole,40);
    }

    else{
        roleIndex++;
        if(roleIndex>=roles.length){
            roleIndex=0;
        }
        setTimeout(typeRole,300);
    }
}
typeRole();