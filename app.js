const buttons = document.querySelectorAll('button');
const playerResult = document.getElementById('player-result');
const computerResult = document.getElementById('computer-result');
const displayresult = document.getElementById('display-result');
const playerscore = document.getElementById('playerscore');
const computerscore = document.getElementById('computerscore');
const computerArray = ["Rock", "Papers", "Scissors"];
let compScore = 0;
let playScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', function () {
        //computers innertext
        let random = Math.floor(Math.random() * 3);
        let finalComputerInnerText = computerArray[random];
        computerResult.innerText = `${finalComputerInnerText}`;

        //players innertext
        let playerChoice = button.innerText;
        playerResult.innerText = playerChoice;

        // comapare both
        if (playerChoice.toLocaleLowerCase() === finalComputerInnerText.toLowerCase()) {
            displayresult.innerText = ` ohh its a tie`;
        } else {
            if (playerChoice == "Rock" && finalComputerInnerText == "Papers") {
                displayresult.innerText = `papers covered your ${playerChoice} so Computer Won`;
                compScore++;
                computerscore.innerText = `computerScore:${compScore}`;
            } else {
                if (playerChoice == "Papers" && finalComputerInnerText == "Scissors") {
                    displayresult.innerText = `${finalComputerInnerText} cut your ${playerChoice} so Computer Won`;
                    compScore++;
                    computerscore.innerText = `computerScore:${compScore}`;
                } else {
                    if (playerChoice == "Scissors" && finalComputerInnerText == "Rock") {
                        displayresult.innerText = `${finalComputerInnerText} hitted your ${playerChoice} so Computer Won`;
                        compScore++;
                        computerscore.innerText = `computerScore:${compScore}`;
                    } else {
                        if (playerChoice == "Rock" && finalComputerInnerText == "Scissors") {
                            displayresult.innerText = `your Rock hitted ${finalComputerInnerText} and you won`;
                            playScore++;
                            playerscore.innerText=`player score:${playScore}`;
                        } else {
                            if (playerChoice == "Papers" && finalComputerInnerText == "Rock") {
                                displayresult.innerText = `your ${playerChoice} covered ${finalComputerInnerText} and you won`;
                                playScore++;
                                playerscore.innerText=`player score:${playScore}`;
                            } else {
                                if (playerChoice == "Scissors" && finalComputerInnerText == "Papers") {
                                    displayresult.innerText = `your ${playerChoice} cuts ${finalComputerInnerText} and you won`;
                                    playScore++;
                                    playerscore.innerText=`player score:${playScore}`;
                                }else{
                                    if(playScore && compScore>=5){
                                        window.alert('game has ended refreh page to start again')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
})








