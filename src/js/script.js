const messages = [
    "...and you suck!",
    "...have a horrible day!",
    "...and your breath stinks!",
    "...you are the worst!",
    "...and you smell like a donkey fart"
];

// choose random message
var message = messages[Math.floor(Math.random() * Math.floor(messages.length))];

// display random message
document.querySelector('.message').append(message);