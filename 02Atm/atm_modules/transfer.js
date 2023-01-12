import inquirer from 'inquirer';
async function transfer(balance) {
    const transfer1 = await inquirer.prompt([{
            type: 'number',
            name: 'accountNumber',
            message: "Enter Account Number to Transfer "
        },
        {
            name: 'amount',
            type: 'number',
            message: 'Enter your Amount to transfer'
        }]);
    if (balance > transfer1.amount) {
        balance -= transfer1.amount;
    }
    else {
        console.log("You don't have enough balance");
    }
    return balance;
}
export default transfer;
