import inquirer from "inquirer";
async function cashDeposit(balance) {
    const amount = await inquirer.prompt([{
            type: "number",
            name: "amt",
            message: "Enter your deposit amount",
        }]);
    balance += amount.amt;
    return balance;
}
export default cashDeposit;
