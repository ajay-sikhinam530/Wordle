/*["Q","W","E","R","T","Y","U","I","O","P"]
["A","S","D","F","G","H","J","K","L"," "]
["Enter","Z","X","C","V","B","N","M","->"]*/

var height = 6;
var width = 5;

var row = 0;
var col = 0;

var gameOver = false;
var highScore = 0;

var wordList =['about', 'alert', 'argue', 'beach', 'above', 'alike', 'arise', 'began', 'abuse', 'alive', 'array', 'begin', 'actor', 'allow', 'aside','begun', 'acute', 'alone', 'asset', 'being', 'admit', 'along', 'audio', 'below', 'adopt', 'alter', 'audit', 'bench', 'adult', 'among', 'avoid', 'billy', 'after', 'anger', 'award', 'birth', 'again', 'angle', 'aware', 'black', 'agent', 'angry', 'badly', 'blame', 'agree', 'apart', 'baker', 'blind', 'ahead', 'apple', 'bases', 'block', 'alarm', 'apply', 'basic', 'blood', 'album', 'arena', 'basis', 'board', 'boost', 'buyer', 'china', 'cover', 'booth', 'cable', 'chose', 'craft', 'bound', 'calif', 'civil', 'crash', 'brain', 'carry', 'claim', 'cream', 'brand', 'catch', 'class', 'crime', 'bread', 'cause', 'clean', 'cross', 'break', 'chain', 'clear', 'crowd', 'breed', 'chair', 'click', 'crown', 'brief', 'chart', 'clock', 'curve', 'bring', 'chase', 'close', 'cycle', 'broad', 'cheap', 'coach', 'daily', 'broke', 'check', 'coast', 'dance', 'brown', 'chest', 'could', 'dated', 'build', 'chief', 'count', 'dealt', 'built', 'child', 'court', 'death', 'debut', 'entry', 'forth', 'group', 'delay', 'equal', 'forty', 'grown', 'depth', 'error', 'forum', 'guard', 'doing', 'event', 'found', 'guess', 'doubt', 'every', 'frame', 'guest', 'dozen', 'exact', 'frank', 'guide', 'draft', 'exist', 'fraud', 'happy', 'drama', 'extra', 'fresh','harry', 'drawn', 'faith', 'front', 'heart', 'dream', 'false', 'fruit', 'heavy', 'dress', 'fault', 'fully', 'hence', 'drill', 'fiber', 'funny', 'night', 'drink', 'field', 'giant', 'horse', 'drive', 'fifth', 'given', 'hotel', 'drove', 'fifty', 'glass', 'house', 'dying', 'fight', 'globe', 'human', 'eager', 'final', 'going', 'ideal', 'early', 'first', 'grace', 'image', 'earth', 'fixed', 'grade', 'index', 'eight', 'flash', 'grand', 'inner', 'elite', 'fleet', 'grant', 'input', 'empty', 'floor', 'grass', 'issue', 'enemy', 'fluid', 'great', 'irony', 'enjoy', 'focus', 'green', 'juice', 'enter', 'force', 'gross', 'joint', 'judge', 'metal', 'media', 'newly', 'known', 'local', 'might', 'noise', 'label', 'logic', 'minor', 'north', 'large', 'loose', 'minus', 'noted', 'laser', 'lower', 'mixed', 'novel', 'later', 'lucky', 'model', 'nurse', 'laugh', 'lunch', 'money', 'occur', 'layer', 'lying', 'month', 'ocean', 'learn', 'magic', 'moral', 'offer', 'lease', 'major', 'motor', 'often', 'least', 'maker', 'mount', 'order', 'leave', 'march', 'mouse', 'other', 'legal', 'music', 'mouth', 'ought', 'level', 'match', 'movie', 'paint', 'light', 'mayor', 'needs', 'paper', 'limit', 'meant', 'never', 'party', 'peace', 'power', 'radio', 'round', 'panel', 'press', 'raise', 'route', 'phase', 'price', 'range', 'royal', 'phone', 'pride', 'rapid', 'rural', 'photo', 'prime', 'ratio', 'scale', 'piece', 'print', 'reach', 'scene', 'pilot', 'prior', 'ready', 'scope', 'pitch', 'prize', 'refer', 'score', 'place', 'proof', 'right', 'sense', 'plain', 'proud', 'rival', 'serve', 'plane', 'prove', 'river', 'seven', 'plant', 'queen', 'quick', 'shall', 'plate', 'sixth', 'stand', 'shape', 'point', 'quiet', 'roman', 'share', 'pound', 'quite', 'rough', 'sharp', 'sheet', 'spare', 'style', 'times', 'shelf', 'speak', 'sugar', 'tired', 'shell', 'speed', 'suite', 'title', 'shift', 'spend', 'super', 'today', 'shirt', 'spent', 'sweet', 'topic', 'shock', 'split', 'table', 'total', 'shoot', 'spoke', 'taken', 'touch', 'short', 'sport', 'taste', 'tough', 'shown', 'staff', 'taxes', 'tower', 'sight', 'stage', 'teach', 'track', 'since', 'stake', 'teeth', 'trade', 'sixty', 'start', 'texas', 'treat', 'sized', 'state', 'thank', 'trend', 'skill', 'steam', 'theft', 'trial', 'sleep', 'steel', 'their', 'tried', 'slide', 'stick', 'theme', 'tries', 'small', 'still', 'there', 'truck', 'smart', 'stock', 'these', 'truly', 'smile', 'stone', 'thick', 'trust', 'smith', 'stood', 'thing', 'truth', 'smoke', 'store', 'think', 'twice', 'solid', 'storm', 'third', 'under', 'solve', 'story', 'those', 'undue', 'sorry', 'strip', 'three', 'union', 'sound', 'stuck', 'threw', 'unity', 'south', 'study', 'throw', 'until', 'space', 'stuff', 'tight', 'upper', 'upset', 'whole', 'waste', 'wound', 'urban', 'whose', 'watch', 'write', 'usage', 'woman', 'water', 'wrong', 'usual', 'train', 'wheel', 'wrote', 'valid', 'world', 'where', 'yield', 'value', 'worry', 'which', 'young', 'video', 'worse', 'while', 'youth', 'virus', 'worst', 'white', 'worth', 'visit', 'would', 'vital']
var guessList = ["apple","mango","river","hyped","tokyo","title","carbo","proxy"]

guessList = guessList.concat(wordList)

var word = wordList[Math.floor(Math.random()*wordList.length)].toLocaleUpperCase();
console.log(word)

window.onload = function(){
    initialize()
}

function resetTiles(){//This is to reset all the Tiles
    setTimeout(function(){
        for(let r=0 ; r<height;r++){
            for(let c=0; c<width ; c++){
                var Tile = document.getElementById(r.toString()+'-'+c.toString());
                Tile.innerText = "";
                if(Tile.classList.contains("correct")){
                    Tile.classList.remove("correct");
                }
                if(Tile.classList.contains("present")){
                    Tile.classList.remove("present");
                }
            }
        }
        row = 0;
        col = 0;
        word = resetWord();//To reset the word
        document.getElementById("answer").innerText = ""// To reset the anser after display
    },2000);
    console.log("Reset Done");
}

function resetWord()//To reset the word
{
    var kind = wordList[Math.floor(Math.random()*wordList.length)].toLocaleUpperCase();
    console.log("new word - ",kind);
    return kind;
}
function initialize(){ //Initalizes the whole Game

    for(let r=0 ; r<height ; r++){//To create Tiles for given height and width
        
        for(let c=0 ; c<width ; c++){
            let tile = document.createElement("span");
            tile.id = r.toString()+'-'+c.toString();
            tile.classList.add("tile")
            tile.innerText = " "
            document.getElementById("board").appendChild(tile);
        }
    }

    //Keyboard
    let keyboard = [
        ["Q","W","E","R","T","Y","U","I","O","P"],
        ["A","S","D","F","G","H","J","K","L"," "],
        ["Enter","Z","X","C","V","B","N","M","->"]
    ]

    for(let i=0 ; i<keyboard.length ; i++){//To create a single row
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for(let j=0 ; j<currRow.length ; j++){ //to create each key in row 
            let keyTile = document.createElement("div");
            let key = currRow[j];
            keyTile.innerText = key;
            if(key=="Enter"){
                keyTile.id= "Enter";
            }
            else if(key=="->"){
                keyTile.id = "Backspace";
            }
            else if("A"<=key && key<="Z"){
                keyTile.id = "Key"+key;
            }
            keyTile.addEventListener("click",processKey);

            if(key=="Enter"){
                keyTile.classList.add("enter-key-tile");
            }
            else{
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }    
    //System keyboard
    document.addEventListener("keyup",(e)=>{
        processInput(e);
    })

    function processKey(){
        e = {"code" : this.id};
        processInput(e);
    }

    function processInput(e){
        console.log(e);
        console.log("im in the process Input");
        if("KeyA" <=e.code && e.code <="KeyZ"){
            if(col<width){
                let currTile = document.getElementById(row.toString()+'-'+col.toString())
                console.log(currTile);
                    if(currTile.innerText==""){
                        currTile.innerText = e.code[3];
                        col+=1
                    }
                
            }
        }
        else if(e.code=="Backspace"){
            if(0<col && col<=width){
                col-=1
            }
            let currTile = document.getElementById(row.toString()+'-'+col.toString())
            currTile.innerText = " ";
        }
        else if(e.code == "Enter"){
            update();
        }

        if(!gameOver && row==height){
            gameOver = true;
            document.getElementById("answer").innerText = word
        }
    }

}

function initializeStats(){
    var timer = document.createElement("div");
    timer.classList.add("timer");
    timer.innerHTML = currTime
}

function update(){//Operations to perform after each enter
    let guess = "";
    document.getElementById("answer").innerText = "";
    for(let c=0 ; c<width ; c++){
        let currTile = document.getElementById(row.toString()+'-'+c.toString())
        console.log(currTile);
        let letter = currTile.innerText;
        guess +=letter;
    }
    guess = guess.toLowerCase();
    console.log(guess);
    if(!guessList.includes(guess)){
        document.getElementById("answer").innerText = "Guess again";
    }
    if(guess.toUpperCase()==word){
        console.log("word found");
        resetTiles();
    }
    for(let i=0;i<guess.length;i++){
        letter = guess[i];
        letter = letter.toLocaleUpperCase();
        console.log(letter);
        console.log(word[i]);
        console.log(word.includes(letter));
        if(word[i]==letter){
            document.getElementById(row.toString()+'-'+i.toString()).classList.add("correct");
        }
        else if(word.includes(letter)){
            document.getElementById(row.toString()+'-'+i.toString()).classList.add("present");
        }

    }

    // let correct = 0;
    // let letterCount = {};
    // for(let i=0 ; i<word.length ; i++){
    //     let letter = word[i];
    //     if(letterCount[letter]){
    //         letterCount[letter]+=1;
    //     }
    //     else{
    //         letterCount[letter] = 1;
    //     }
    // }
    // console.log(letterCount);

    // for(let c=0 ; c<width ; c++){
    //     let currTile = document.getElementById(row.toString()+'-'+c.toString());
    //     let letter = currTile.innerText;
    //     if(word[c]==letter){
    //         currTile.classList.add("correct");

    //         let keyTile = document.getElementById("Key"+letter);
    //         keyTile.classList.remove("present");
    //         keyTile.classList.add("correct");
    //         correct+=1
    //         letterCount[letter] -= 1;
    //     }
    //     if(correct==width){
    //         gameOver = true
    //     }
    // }
    // console.log(letterCount);

    // for(let c=0; c<width ; c++){
    //     let currTile = document.getElementById(row.toString()+'-'+c.toString());
    //     let letter = currTile.innerText;

    //     if(!currTile.classList.contains("correct")){
    //         if(word.includes(letter) && letterCount[letter]>0){
    //             currTile.classList.add("present");

    //             let keyTile = document.getElementById("Key"+letter);
    //             if(!keyTile.classList.contains("correct")){
    //                 keyTile.classList.add("present");
    //             }
    //             letterCount[letter]-=1;
    //         }
    //     }
    //     else{
    //         currTile.classList.add("absent");
    //         let keyTile = document.getElementById("Key"+letter);
    //         keyTile.classList.add("absent");
    //     }
    // }
    console.log("ended");
    if(row+1==height){
        resetTiles();
    }
    row+=1;
    col = 0;
}