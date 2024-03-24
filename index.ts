#! /usr/bin/env node

import inquirer from "inquirer"

// computer se random number generate karwaen
//input from user
 const randomnumber=Math.floor(Math.random()* 6 +1); 
//console.log(randomnumber)
 const answers= await inquirer.prompt([
{
 name: "userguessednumber",
 type: "number",
 message:"please guess a number between 1 to 6",
 },
]);

if(answers.userguessednumber===randomnumber){
  console.log("congratulation you got the true number.");
}else{
    console.log("you guessed wrong number");
}
