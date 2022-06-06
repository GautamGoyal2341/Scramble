let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]


const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint");
const refreshBtn = document.querySelector(".refresh-word")
const checkBtn = document.querySelector(".check-word")
const inputField = document.querySelector("input")
const timeText = document.querySelector(".time b")
let correctWord;
let timer;

const initTimer = maxTime => {

   timer = setInterval(() =>{

    if(maxTime > 0) 
      {
        maxTime--;
        timeText.innerHTML = maxTime;
      }

 

   },1000)

}


const initGame = () =>{
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i  = wordArray.length-1 ; i  >0 ; i--) {
         
         let j =  Math.floor(Math.random() * (i+1));
         [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]]

        
    }
    wordText.innerText =  wordArray.join("");
    hintText.innerText = randomObj.hint;

    console.log(wordArray,randomObj.word);
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength" , correctWord.length);


 
}

initGame();

refreshBtn.addEventListener('click',initGame);


const checkWord = () =>{
    let userWord = inputField.value.toLocaleLowerCase();
    console.log(userWord);
    if(correctWord !== userWord) return alert(`OOps! ${userWord} is not a Correct Word !! You are not a WEEB`);
    alert(`Congrats! ${userWord.toUpperCase()} is  a Correct Word !! You are  a WEEB`);
    initGame();
     


     

}



checkBtn.addEventListener('click',checkWord)


