#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = () => new Promise((resolve, reject) => setTimeout(resolve, 2000));
async function wellcome() {
    let gameTitle = chalkAnimation.rainbow('Start Your Game........');
    await sleep();
    gameTitle.stop();
}
// wellcome()
let playerLife = 3;
async function askQuiestion() {
    let rdNum = Math.floor(Math.random() * 10 + 1);
    do {
        playerLife--;
        console.log(chalk.blueBright(`The Life of Player left....${playerLife}`));
        var que = await inquirer
            .prompt([
            {
                type: "number",
                name: "usr_num",
                message: chalk.bgBlueBright("Enter Your Desier Number between 1-10 : "),
            }
        ]);
        // console.log(que)
        if (que.usr_num === rdNum) {
            console.log(chalk.greenBright("Your Answer Is Correct 'awesome'....!"));
        }
        else if (que.usr_num < rdNum) {
            console.log(chalk.yellowBright(`Your Number ${que.usr_num} is less Than Guess Number `));
        }
        else if (que.usr_num > rdNum) {
            console.log(chalk.yellowBright(`Your Number ${que.usr_num} is greater Than Guess Number `));
        }
    } while (playerLife > 0 && rdNum !== que.usr_num);
    if (playerLife === 0 && rdNum !== que.usr_num) {
        console.log(chalk.red("Game is Over Know!"));
    }
}
async function startAgain() {
    do {
        console.clear();
        await wellcome();
        playerLife = 3;
        await askQuiestion();
        var restart = await inquirer.prompt([
            {
                type: "input",
                name: "start_again",
                message: chalk.bgGreenBright("Do You Want to Restart The Game? : Y or N :")
            }
        ]);
    } while (restart.start_again === 'y' || restart.start_again === 'Y' || restart.start_again === 'yes' || restart.start_again === 'YES');
}
startAgain();
