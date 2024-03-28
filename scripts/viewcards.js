let cards = JSON.parse(localStorage.getItem('cards')); //array of the cards
let template = document.querySelector("#card-template"); // the card template
let cardList = document.querySelector("#card-list"); // where u put the cards


for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let cardView = template.content.cloneNode(true); // this makes a copy of the html in the template

    //display data in the card
    let titleText = cardView.querySelector(".title-text");
    titleText.textContent = card.title;
    let subtitleText = cardView.querySelector(".subtitle-text");
    subtitleText.textContent = card.subtitle;
    let messageText = cardView.querySelector(".message-text");
    messageText.textContent = card.message;
    let toText = cardView.querySelector(".to-text");
    toText.textContent = card.to;
    let fromText = cardView.querySelector(".from-text");
    fromText.textContent = card.from;

    //deletes the cards if needed
    let deleteBtn = cardView.querySelector(".delete-btn");
    deleteBtn.addEventListener('click', function() {
        cards.splice(i, 1);
        localStorage.setItem('cards', JSON.stringify(cards));
        location.reload();
    });


    //update card if needed
    let updateCard = function updateCard()
    {
    card.title = titleText.textContent;
    card.subtitle = subtitleText.textContent;
    card.message = messageText.textContent;
    card.to = toText.textContent;
    card.from = fromText.textContent;
    localStorage.setItem('cards', JSON.stringify(cards));
    }

    cardView.querySelector(".title-text").addEventListener('input',updateCard);
    cardView.querySelector(".subtitle-text").addEventListener('input',updateCard);
    cardView.querySelector(".message-text").addEventListener('input',updateCard);
    cardView.querySelector(".to-text").addEventListener('input',updateCard);
    cardView.querySelector(".from-text").addEventListener('input',updateCard);

    cardList.appendChild(cardView); // makes the cards visible
}