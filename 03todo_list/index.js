#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import figlet from 'figlet';
figlet('TODOLIST!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.yellowBright(data));
});
let todoList = [];
async function repeatFlow() {
    const answer = await inquirer.prompt([
        {
            name: 'repeat',
            type: 'list',
            choices: ['Yes', 'No'],
            message: 'Do you want to other Operations?',
        },
    ]);
    return answer.repeat === 'Yes' ? true : false;
}
async function TodoList() {
    let startAgain = true;
    do {
        const answer = await inquirer.prompt([
            {
                name: 'options',
                type: 'list',
                choices: ['Add Items', 'Display', 'Remove Items'],
                message: 'What you want to do?',
            },
        ]);
        if (answer.options == 'Add Items') {
            const item = await inquirer.prompt([
                {
                    name: 'newItem',
                    type: 'input',
                    message: 'What item do you want to add New Item?',
                },
            ]);
            todoList.push(item.newItem);
            startAgain = await repeatFlow();
        }
        else if (answer.options == 'Display') {
            if (todoList.length == 0) {
                console.log('No items to display');
            }
            todoList.forEach((element) => console.log(element));
            startAgain = await repeatFlow();
        }
        else if (answer.options == 'Remove Items') {
            if (todoList.length == 0) {
                console.log('No items to display');
            }
            const removeItem = await inquirer.prompt([
                {
                    name: 'remove',
                    type: 'input',
                    message: 'Enter item to remove: ',
                },
            ]);
            let index = todoList.indexOf(removeItem.remove);
            if (index !== -1) {
                todoList.splice(index, 1);
            }
            console.log(index);
            startAgain = await repeatFlow();
        }
    } while (startAgain !== false);
}
setTimeout(() => {
    TodoList();
}, 2000);
