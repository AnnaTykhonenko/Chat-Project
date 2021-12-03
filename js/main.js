let buttonsIcon = document.querySelectorAll('.icon')

for (let buttonIcon of buttonsIcon) {
    buttonIcon.addEventListener('click', () => {
        clearActiveClasses()

        buttonIcon.classList.add('active')
    })
}

function clearActiveClasses() {
    buttonsIcon.forEach((buttonIcon) => {
        buttonIcon.classList.remove('active')
    })
}


let li = document.querySelectorAll('.a')

for (let liActiv of li) {
    liActiv.addEventListener('click', () => {
        clearli()

        liActiv.classList.add('active')
    })
}

function clearli() {
    li.forEach((liActiv) => {
        liActiv.classList.remove('active')
    })
}



const chevron = document.getElementsByClassName('chevron-profile')[0];
const userProfile = document.getElementsByClassName('user-profile')[0];
console.log(chevron);
chevron.addEventListener('click', function () {
    chevron.classList.toggle('active');
    userProfile.classList.toggle('active');
})


const btn = document.querySelector('.like');

let like = true,
    newСlick = document.querySelector('.likes').innerHTML;

btn.addEventListener('click', () => {
    newСlick = like ? ++newСlick : --newСlick;
    like = !like;
    document.querySelector('.likes').innerHTML = newСlick;
});


