// Text Effect

// Define a string variable called "letters" that contains all the uppercase letters of the English alphabet.
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Define a null variable called "interval" that will hold the interval ID of a JavaScript interval.
let interval = null;

// Find the DOM elements with class "screen" and "name" using document.querySelector.
const screenElement = document.querySelector(".screen")
const nameElement = document.querySelector(".name")

// Add an event listener to the screen element that triggers when the mouse enters the element.
screenElement.onmouseenter = (event) => {
    // Inside the event listener function, define a variable called "iteration" and set it to 0. Then, clear any previous intervals using clearInterval
    let iteration = 0
    clearInterval(interval)

    //Define a new interval using setInterval. The interval function updates the text inside the "name" element with a random letter for each letter of the original text, one letter at a time.
    // Inside the interval function, split the text inside the "name" element into an array of letters using split. For each letter, replace it with a random letter from the "letters" string if the index is greater than or equal to "iteration". Otherwise, keep the original letter.
    interval = setInterval(() => {
        nameElement.innerText = nameElement.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration){
                    return nameElement.dataset.value[index]
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("")

        // Check if "iteration" is greater than or equal to the length of the original text. If it is, clear the interval using clearInterval.
        if(iteration >= nameElement.dataset.value.length){
            clearInterval(interval)
        }

        // Increment "iteration" by 1/3 in each iteration of the interval function. This causes the text to update more slowly than the interval duration, creating a smoother animation effect.
        iteration +=1 / 3
    }, 30)
}
// The variable iteration is used in this code to keep track of the progress of the animation.

// The animation works by replacing each letter of the original text with a random letter from the letters string, one letter at a time. The value of iteration determines how many letters have already been replaced with random letters.

// In each iteration of the interval function, the code checks if the index of the current letter is less than iteration. If it is, it replaces the letter with the original letter from the dataset. If the index is greater than or equal to iteration, it replaces the letter with a random letter.

// The iteration value is initially set to 0 when the mouse enters the screen element. In each iteration of the interval function, the value of iteration is incremented by 1/3.

// When iteration becomes greater than or equal to the length of the original text, it means that all the letters have been replaced with random letters, and the interval is cleared to stop the animation.

// So, the purpose of the iteration variable is to keep track of the progress of the animation and to determine when the animation should stop.