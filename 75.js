// Generate a random number between 10 to 20.
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() *(max-min + 1)+min);
    
  }
  
  const rndInt = randomIntFromInterval(10, 20);
  console.log(rndInt);