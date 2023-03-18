

function randomNo(){
    var n=Math.random();
    n=n*100;
    n=Math.floor(n)+1;
    console.log(n);
    return n;
}

function youWon(){
    const congragulations=document.getElementById("Congragulations");
    congragulations.innerHTML="Congragulations!!!🍾🎉 ";

    const wishes=document.querySelector("#congrats");
    wishes.innerHTML="You won the game";

    const wrngGuess=document.getElementById("wrong-guess");
    wrngGuess.innerHTML="Correct Guess";

    const correctAns=document.getElementById("correct-ans");
    correctAns.innerHTML="";

    const attemp=document.getElementById("wrong_");
    attemp.innerHTML="";

    const inputvalue=document.getElementById("input-value");
    inputvalue.innerHTML="";

    const wonColor=document.getElementById("container");
    wonColor.style.backgroundColor="green";

}

function wrongGuess(){
    const ashish=document.querySelector("#congrats");
    ashish.innerHTML="";

    const wrngGuess=document.getElementById("wrong-guess");
    wrngGuess.innerHTML="Wrong Guess";
}

function youLoose(){
    const suraj=document.querySelector("#congrats");
    suraj.innerHTML="You loose!!!";

    const wrngGuess=document.getElementById("wrong-guess");
    wrngGuess.innerHTML="Wrong Guess";

    const inputvalue=document.getElementById("input-value");
    inputvalue.innerHTML="";

    const looseColor=document.getElementById("container");
    looseColor.style.backgroundColor="red";

    const hint=document.getElementById("hint");
    hint.innerHTML="";
}

function replay(){
    window.location.reload();
}

var count=1;
var i=5;
var p;
function guessNo(){
    if(count===1){
        p= randomNo();
        count=0;
    }

    const inputGuess=document.getElementById("guess_no");
    var g = inputGuess.value;
    inputGuess.value="";
    console.log(g);
    
    if(g==p){
        count=1;
        i=5;
        youWon();
    }
    else{
        if(i===1)
        {
            const attl=document.getElementById("attempt-left");
            attl.innerHTML="0";

            const correctAns=document.getElementById("correct-ans");
            correctAns.innerHTML="correct guess is: " +  p;

            count=1;
            i=5;
            youLoose();
        }
        else{
            i--;
            const attw=document.getElementById("attempt-left");
            attw.innerHTML=i;

            if(p>g){
                const hint=document.getElementById("hint");
                hint.innerHTML="(HINT:n>"+g+")";
            }
            else{
                const hint=document.getElementById("hint");
                hint.innerHTML="(HINT:n<"+g+")";
            }
            wrongGuess();
        }
    }
    

}


// window.location.reload();















