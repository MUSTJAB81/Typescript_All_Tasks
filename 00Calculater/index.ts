#!/usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation'
// import { loading } from 'cli-loading-animation';
// import spinners from 'cli-spinners';

const stop_count = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

async function wellcome() {
  let startAnimation = chalkAnimation.rainbow('Let Start My Calculator')
  await stop_count()
  startAnimation.stop()
}

await wellcome()

async function askQuestion() {
  const answers= await inquirer
    .prompt([
      {
        type: 'list',
        name: 'operator',
        message: 'Enter Your Operation to Perform ?\n',
        choices: ['+ Addition', 'X Multiply', '% Divid', '- Subtract'],
      },
      {
        type: 'number',
        name: 'num1',
        message: 'Enter Number 1 :',
      },
      {
        type: 'number',
        name: 'num2',
        message: 'Enter Number 2 :',
      },
    ])
    
      if (answers.operator === '+ Addition') {
        console.log(chalk.green(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`)
        )
      } else if (answers.operator === 'X Multiply') {
        console.log(
          chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`)
        )
      } else if (answers.operator === '% Divid') {
        console.log(chalk.green(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`)
          
        )
      } else if (answers.operator === '- Subtract') {
        console.log(chalk.green(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`)
          
        )
      }
    
}


async function startAgain() {
  do {
    await askQuestion()
    var again = await inquirer.prompt({
      type: 'input',
      name: 'startup',
      message: 'Do you Want to Continue? Y or N',
    })
  } while (again.startup == 'y' || again.startup == 'Y' || again.startup == 'yes' || again.startup == 'Yes'
  )
}
startAgain()
