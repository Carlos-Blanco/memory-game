document.addEventListener('DOMContentLoaded', () => {
  
  const cardArray = [
    {
      name: 'One',
      img: 'images/1.jpg'
    },
    {
      name: 'Two',
      img: 'images/2.jpg'
    },
    {
      name: 'Three',
      img: 'images/3.jpg'
    },
    {
      name: 'Four',
      img: 'images/4.jpg'
    },
    {
      name: 'Five',
      img: 'images/5.jpg'
    },
    {
      name: 'Six',
      img: 'images/6.jpg'
    },
    {
      name: 'Seven',
      img: 'images/7.jpg'
    },
    {
      name: 'Eight',
      img: 'images/8.jpg'
    },
    {
      name: 'Nine',
      img: 'images/9.jpg'
    },
    {
      name: 'Ten',
      img: 'images/10.jpg'
    },
    {
      name: 'Eleven',
      img: 'images/11.jpg'
    },
    {
      name: 'Twelve',
      img: 'images/12.jpg'
    }, {
      name: 'One',
      img: 'images/1.jpg'
    },
    {
      name: 'Two',
      img: 'images/2.jpg'
    },
    {
      name: 'Three',
      img: 'images/3.jpg'
    },
    {
      name: 'Four',
      img: 'images/4.jpg'
    },
    {
      name: 'Five',
      img: 'images/5.jpg'
    },
    {
      name: 'Six',
      img: 'images/6.jpg'
    },
    {
      name: 'Seven',
      img: 'images/7.jpg'
    },
    {
      name: 'Eight',
      img: 'images/8.jpg'
    },
    {
      name: 'Nine',
      img: 'images/9.jpg'
    },
    {
      name: 'Ten',
      img: 'images/10.jpg'
    },
    {
      name: 'Eleven',
      img: 'images/11.jpg'
    },
    {
      name: 'Twelve',
      img: 'images/12.jpg'
    }
  ]

const grid = document.querySelector('.grid');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//Create board
function createBoard() {
  for (let index = 0; index < cardArray.length; index++) {
    var card = document.createElement('img');
    card.setAttribute('src', 'images/blank.jpg');
    card.setAttribute('data-id', index);
    card.addEventListener('click', flipCard);
    grid.appendChild(card);
  }
}

// Check for marches
function checkForMatch() {
  var cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]){
    alert('You found a match!!');
    cards[optionOneId].setAttribute('src', 'images/white.jpg');
    cards[optionTwoId].setAttribute('src', 'images/white.jpg');
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.jpg');
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
    alert('Sorry, try again');
  }
  cardsChosen = [];
  cardsChosenId = [];
}


//flip the card
function flipCard() {
  var cardId = this.getAttribute('data-id');
  cardsChosen.push(cardArray[cardId].name); 
  cardsChosenId.push(cardId);
  this.setAttribute('src', cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();

})