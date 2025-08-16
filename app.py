from flask import Flask, render_template
import random

app = Flask(__name__)

facts = [
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
]

@app.route('/')

def home():
    """
    Renders the home page of the website. 
    This function finds the index.html amd returns its content to the user browser

    """
    # Use random.choice() t get a random fact from the list
    random_fact = random.choice(facts)

    return render_template('index.html', facts=random_fact) # this returns the index.html to the  browser

if __name__ == "__main__":
    app.run(debug=True)
