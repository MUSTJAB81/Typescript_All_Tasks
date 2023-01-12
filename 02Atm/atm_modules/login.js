import users from "./user.js";
import inquirer from "inquirer";
import mainScreen from "./mainscreen.js";
async function login() {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Please Enter your Account Number"
        }, {
            name: "pin",
            type: "password",
            message: "Enter Your Pin Code "
        }]);
    let user = users.find(x => x.accountNumber === answer.accountNumber && x.pinCode === answer.pin);
    if (typeof user != "undefined") {
        console.log(`Welcome ${user.name}`);
        mainScreen(user.balance);
    }
    else {
        console.log("You entered invalid pin or account number");
    }
}
export default login;
