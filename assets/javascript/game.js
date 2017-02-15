// list of words to be selected from 
var computerWords =[
    "madonna",
    "rihanna",
     "adele",
     "beyonce",
     "shakira",
     "sia",
     "eminem"
    ]

// declaring all the variable needed 
    var chooseWord="";
    var letterInChosenWord =[];
    var numBlanks = 0;
    var blankAndSuccesses = [];
    var wrongGuesses =[];

//Variables for tracking wins, and number of guesses 
    var winCounter =0;
    var lossCounter=1;
    var numGuesses=12;

//the game starts from selecting a random word from the word list 
//for each word chossen by the computer there should be a blank in place of the word 
//initially the game should have number of guesses to be zero and already guessed letter to be 0 
    function startGame(){
        numGuesses=12;
        blankAndSuccesses=[];
        wrongGuesses=[];

        chosenWord = computerWords[Math.floor(Math.random()*computerWords.length)];
        letterInChosenWord=chosenWord.split("");
        numBlanks = letterInChosenWord.length;

        for(var i = 0; i< numBlanks; i++){
            blankAndSuccesses.push("_");
        }

        document.getElementById('guesses-left').innerHTML = numGuesses;
        document.getElementById('word-blank').innerHTML = blankAndSuccesses.join(" ");
    }

//checking each letter of the word chosen to letter inputed by the user 
// if the user input is wrong the guess number will decrease by 1 
// if the input letter by the user is correct, push it in place of blank     
    function checkLetters(letter) {

        var letterInWord = false;

        for(var i=0; i< numBlanks; i++){
            if(chosenWord[i] === letter){
                letterInWord = true;

            }
        }

          if(letterInWord)  {
            for(i=0;i< numBlanks; i++){
                if(chosenWord[i] === letter){
                    blankAndSuccesses[i] = letter;
                }
                console.log("letter pushed to current letter", blankAndSuccesses);
            }
         } else{
            numGuesses --;
            wrongGuesses.push(letter)
         } 

    } 
//score board  
//update - the no of guesses left
//number of wins update 
//update - the wrong guesses from user 

    function scoreUpdate(){

     document.getElementById('word-blank').innerHTML = blankAndSuccesses.join(" ");
     document.getElementById('guesses-left').innerHTML = numGuesses;
     document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");
     

     if(letterInChosenWord.join(" ") === blankAndSuccesses.join(" ")){
        winCounter++;
        alert("Win!!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
     }else if (numGuesses === 0){
        document.getElementById('loss-counter').innerHTML = lossCounter++;
        document.getElementById('wrong-guesses').innerHTML = " ";
        alert("No guesses remaining");
        startGame();
    }

}
   
   startGame();
//take user input when any key is pressed 
//put the user input to check function 
   document.onkeyup= function(event){

    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed)
    scoreUpdate();
   }

