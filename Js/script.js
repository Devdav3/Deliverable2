var totalcoursePar;

// var holes =1 

let hole=1

let golferName = prompt ('Welcome to GC Mini Golf Whats your name?');
let rounds =  Number (prompt ( `${golferName} Would you like to play 3 or 6 holes?`));
totalcoursePar = rounds * 3

let totalScore = 0;
for (let i = 0; i < rounds; i++) {
  let putts = Number (prompt('How many putts for hole' +hole));
  // hole = hole+1
  hole++
  totalScore += putts;
  // totalScore = Totalscore + putts (long version)
  console.log (totalScore)
}
let playerPar = totalcoursePar - totalScore 


if (playerPar === 0 ) {
  console.log (`Good game, ${golferName} Your total par was: 0`);

} else if (playerPar > 0 ) {
  console.log (`Great job, ${golferName} Your total par was': -${playerPar}`);
  
} else { 
  console.log (`Nice try, ${golferName} Your total par was: + ${playerPar}`);
} 

