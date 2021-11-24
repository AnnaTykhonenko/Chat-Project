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


const btn = document.querySelector('.like');

let like = true,
    newСlick = document.querySelector('.likes').innerHTML;

btn.addEventListener('click', () => {
    newСlick = like ? ++newСlick : --newСlick;
    like = !like;
    document.querySelector('.likes').innerHTML = newСlick;
});