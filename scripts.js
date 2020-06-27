const modalContent = document.querySelector('.modal-content')
const cards = document.querySelectorAll('.maiscessos')
for (let card of cards) {
    card.addEventListener("click", function(element){
        const imgId = card.getAttribute("id")
        let cardTitle = card.querySelector('h1').innerHTML;
        let cardText = card.querySelector('p').innerHTML;
        modalContent.classList.add('active')
        modalContent.querySelector("img").src = `assets/${imgId}.png`

        modalContent.querySelector('h1').innerHTML = cardTitle;
        modalContent.querySelector('p').innerHTML = cardText;
    })
}
document.querySelector(".close").addEventListener("click", function(){
    modalContent.classList.remove('active')
    modalContent.querySelector("img").src = ""
})