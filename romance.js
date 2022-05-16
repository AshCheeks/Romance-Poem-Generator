let text = "Ever since I left the city, you, you, you You and me we just don't get along";

// create a string that returns as an array
// no punctuations included or numbers
function parseText(text) {
    let textArray = [];
    let punctuation = /[^a-z\s]/ig;
    let noPunNum = text.replace(punctuation, "").toLowerCase().split(" ");
    textArray = noPunNum;
 
return textArray;
};

//get array of words to make chain as object
//get markov chain/pairs
function generateWordPairs(corpus) {
    let wordPairs = {};
    let textArray = parseText(corpus);
  
    for(let i = 0; i < textArray.length - 1 ; i++) {
        let currentWord = textArray[i];
        let nextWord = textArray[i + 1];
        if(currentWord in wordPairs) {
            wordPairs[currentWord].push(nextWord);
        } else {
            wordPairs[currentWord] = [nextWord];
        }
    }
    return wordPairs;
};



// get random word from array
function randomlyPick(randomWord) {
    let index = Math.floor(Math.random() * randomWord.length);
    
return randomWord[index];
};


// returns a line of poetry
function writeLine(corpus, wordCount) {
    let words = parseText(corpus);
    let wordPairs = generateWordPairs(corpus);
    let startWord = randomlyPick(words);
    let sentence = [startWord];

        while(wordPairs[startWord]) {
            let nextWords = wordPairs[startWord];
            startWord = randomlyPick(nextWords);
            sentence.push(startWord);
           
            if(sentence.length > wordCount) {
                break;
            }
        }
       
return sentence.join(" ");
}


function generatePoem(corpus, lines) {
    let poem = "";
    for(let i = 0; i < lines; i++) {
         let line = Math.floor(Math.random() * 10) + 1;
       poem += writeLine(corpus, line);
        poem += "\n";
    }
    return poem;
}

// console.log(generatePoem(text , 7))
