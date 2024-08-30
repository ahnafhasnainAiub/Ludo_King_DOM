const dicePhotos = [
    './images/dice1.jpg', 
    './images/dice2.jpg',
    './images/dice3.jpg',
    './images/dice4.jpg',
    './images/dice5.jpg',
    './images/dice6.jpg'
];

let diceRolls = [];

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('endBtn').addEventListener('click', endGame);

function startGame() {
    document.getElementById('startBtn').textContent = 'Next Roll';

   
    document.getElementById("diceContainer").classList.add("rotateDice")


    setTimeout(()=>{
        document.getElementById("diceContainer").classList.remove("rotateDice")
    },1000)


     setTimeout(()=>{
            
        const currentRoll = Math.floor(Math.random() * 6) + 1;
        document.getElementById('score').textContent = `This roll: ${currentRoll}`;
        diceRolls.push(currentRoll);
    
        const totalSum = diceRolls.reduce((acc, num) => acc + num, 0);
        document.getElementById('totalSum').textContent = `Your Total Score: ${totalSum}`;
    
    
        displayImage(currentRoll);

    },1000)


}


function displayImage(roll) {
    const img = document.createElement('img');
    img.src = dicePhotos[roll - 1];
    img.alt = `Dice showing ${roll}`;
    
    const diceContainer = document.getElementById('diceContainer');
    diceContainer.innerHTML = ''; 
    diceContainer.appendChild(img);
}

function endGame() {
  
    totalSum.innerHTML = '';
    score.innerHTML = ''; 
    diceRolls = [];
    //document.getElementById('gameOver').textContent = `Game is Over`;
    document.getElementById('startBtn').textContent = 'Start';



}
