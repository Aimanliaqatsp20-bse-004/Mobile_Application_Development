//let number=Math.ceil(Math.random()*10);
//console.log(number);
function guess_number(){
   let guess=Math.floor(Math.random()*10);
let guess_number=prompt('guess the num between 1 and 10');
if(guess_number==guess){
console.log("you win");}
else{
console.log("not matched");}}