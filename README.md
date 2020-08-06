
# Hangman-Game

### Overview
In this assignment, you'll create computer games: Hangman. These apps will run in the browser, and feature dynamically updated HTML powered by your JavaScript code.

### Before You Begin
1. Create a new GitHub repo.Then, clone it to your computer.

2. Inside your local git repository, create an `index.html`.

  * Also create `composer.json` and `index.php` files, if you are deploying to Heroku.

  * Fill in the appropriate content in the composer.json and index.php files to be able to deploy your game to Heroku when it is finished.

3. While still in your local git repo, create a directory called `assets`.
  * `cd` your way into the `assets` folder, then make three additional folders: `javascript`, `css` and `images`.
    * In the `javascript` folder, make a file called `game.js`. Use the `src` attribute of the `script` tag to link to this file, rather than embedding the code directly in your HTML document.
    * In the `css` folder, make a file called `style.css`.
    * Also in the `css` folder, make a file called `reset.css`. Paste into it the code from the Meyerweb reset stylesheet. If you opt to use Bootstrap instead of writing your own CSS, skip this step, and simply include a link to Bootstrap via CDN.
    * In the `images` folder, save whatever images you plan on using.

4. Push the above changes to GitHub.

5. Push your selected game to `gh-pages`. Alternatively, if using Heroku:

  * `heroku login`
  * `heroku create`
  * `git push heroku master`
  
## Hangman Game

![Hangman](Images/2-Hangman.jpg)


1. [Watch the demo](hangman-game-demo.mov).

2. Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

3. Use key events to listen for the letters that your players will type.

4. Display the following on the page:

  * Press any key to get started!

  * Wins: (# of times user guessed the word correctly).

    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.

  * Number of Guesses Remaining: (# of guesses remaining for the user).

  * Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

5. After the user wins/loses the game should automatically choose another word and make the user play it.

##### Hangman Game Bonuses

1. Play a sound or song when the user guesses their word correctly, like in our demo.
2. Write some stylish CSS rules to make a design that fits your game's theme.
3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
  * Save your whole game and its properties in an object.
  * Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
  * Don't forget to place your global variables and functions above your object.
    * Remember: global variables, then objects, then calls.






