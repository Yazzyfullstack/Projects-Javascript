const getUserChoice =userInput=>{
  userInput = userInput.toLowerCase();
  if(userInput==='rock'){
    return userInput;
  }else if(userInput==='paper'){
    return userInput;
  }else if(userInput==='scossors'){
    return userInput;
  }else{
    console.log('Error');
  }
}
console.log(getUserChoice('rock'));
console.log(getUserChoice('Mohanad'));

getComputerChoice = ()=>{

  switch(Math.floor(Math.random()*2)){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}
//console.log(getComputerChoice());
const determineWinner = (userChoice,computerChoice)=>{
  if(userChoice === computerChoice){
    return 'the game is a tie';
  }if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
const playGame = () =>{
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  determineWinner(userChoice,computerChoice);
}
playGame();
