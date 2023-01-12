import inquirer from 'inquirer';
async function otherAmount(balance) {
    const otherAmt = await inquirer.prompt([
        {
            name: 'otheramount',
            type: 'number',
            message: 'Enter the amount of other coins',
        },
    ]);
    if (otherAmt.otheramount < balance) {
        balance -= otherAmt.otheramount;
    }
    else {
        console.log('Your balance is insufficiant');
        balance = await otherAmount(balance);
    }
    return balance;
}
async function cashWithdraw(balance) {
    const answer = await inquirer.prompt([
        {
            name: 'amount',
            type: 'list',
            choices: ['500', '1000', '2000', '5000', '10000', 'Otheramount'],
            message: 'Please enter the amount you want to withdraw',
        },
    ]);
    switch (answer.amount) {
        case '500':
            if (balance > Number(answer.amount)) {
                balance -= 500;
                console.log(`Your Current New Balance is : ${balance}`);
            }
            else {
                console.log('You have insufficiant balance.');
            }
            break;
        case '1000':
            if (balance > Number(answer.amount)) {
                balance -= 1000;
                console.log(`Your Current New Balance is : ${balance}`);
            }
            else {
                console.log('You have insufficiant balance.');
            }
            break;
        case '2000':
            if (balance > Number(answer.amount)) {
                balance -= 2000;
                console.log(`Your Current New Balance is : ${balance}`);
            }
            else {
                console.log('You have insufficiant balance.');
            }
            break;
        case '5000':
            if (balance > Number(answer.amount)) {
                balance -= 5000;
                console.log(`Your Current New Balance is : ${balance}`);
            }
            else {
                console.log('You have insufficiant balance.');
            }
            break;
        case '10000':
            if (balance > Number(answer.amount)) {
                balance -= 10000;
                console.log(`Your Current New Balance is : ${balance}`);
            }
            else {
                console.log('You have insufficiant balance.');
            }
            break;
        case 'Otheramount':
            balance = await otherAmount(balance);
            console.log(`Your Current New Balance is : ${balance}`);
            break;
    }
    return balance;
}
export default cashWithdraw;
