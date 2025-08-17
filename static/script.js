// Js to get new button and the fact text element from the Html

const newFactBtn = document.getElementById('new-fact-btn');
const factText = document.getElementById('fact');

// function to fetch a new fact from the server
const fetchNewFact = async () => {
    try {
        // use the fetch API to make a GET request to our new route
        const response = await fetch('/api/fact');
        // check if the request is successul
        if (!response.ok) {
            throw new Error ("Network response was not ok");
        }

    // Update the fact text with a slight fade effect for a smoot transition
        const data = await response.json();

        factText.style.opacity = 0;
        setTimeout(() => {
            factText.innerText = data.fact;
            factText.style.opacity = 1;
        }, 250);
    } catch (error) {
        console.error('There was a problem with the fecth operation', error);
        factText.innerText='Sorry, could not fetch a fact';
    }
};

newFactBtn.addEventListener('click', fetchNewFact); 

