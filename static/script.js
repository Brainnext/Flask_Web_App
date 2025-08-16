const facts = [
    "The world's largest desert is Antarctica.",
    "A single cloud can weigh more than 1 million pounds.",
    "There are more trees on Earth than stars in the Milky Way.",
    "A group of flamingos is called a 'flamboyance'.",
    "It is impossible for most people to lick their own elbow.",
    "The total weight of all the ants on Earth is greater than the total weight of all the humans on Earth.",
    "The scientific term for brain freeze is 'sphenopalatine ganglioneuralgia'.",
    "A crocodile cannot stick its tongue out.",
    "An ostrich's eye is bigger than its brain.",
    "Slugs have four noses."
];

// Js to get new button and the fact text element from the Html

const newFactBtn = document.getElementById('new-fact-btn');
const factText = document.getElementById('fact');

// Ad a click event listner to the button

newFactBtn.addEventListener('click', () => {
    // pick a random fact from the fact list
    let randomFact;
    do {
        randomFact = facts[Math.floor(Math.random() * facts.length)];
    } while (randomFact == factText.innerText); // To ensure its not the same fact as before.
    
    // Update the fact text with a slight fade effect for a smoot transition

    factText.style.opacity = 0;
    setTimeout(() => {
        factText.innerText = randomFact;
        factText.style.opacity = 1;
    }, 250);
});
