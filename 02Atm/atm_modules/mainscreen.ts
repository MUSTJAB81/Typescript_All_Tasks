import inquirer from "inquirer";
import cashWithdraw from "./cashWithdraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./utilityBill.js";


async function anotherTransaction(){
  const otherTransaction = await inquirer.prompt([{
    name: "otherTran",
    type:"list",
    choices: ["Yes","No"],
    message:"Do you want to another transaction?"
  }])
  return otherTransaction.otherTran;
  
  
}

async function mainScreen(balance:number){
  do{
    const options = await inquirer.prompt([{
      name: "menu",
      type: "list",
      choices:['Balance Inquiry','Cash withdrawal','cash deposit','Transfer','Utility Bills','Exit'],
      message:"Please Select your Transaction Option "
}]);

switch(options.menu){
          case 'Balance Inquiry':
            console.log(`Your Current Balance is :  ${balance}`)
            break;
          case 'Cash withdrawal':
           balance=await cashWithdraw(balance)
            console.log(`Your Transaction is Successful, Your New Balance is ${balance}`);
            break;
          case 'cash deposit':
            balance=await cashDeposit(balance)
            console.log("Deposit Cash");
            console.log(`Your Transaction is Successful, Your New Balance is ${balance}`);
           
            break;
          case 'Transfer':
            balance= await transfer(balance)
            console.log("Transfered Cash");
            console.log(`Your Transaction is Successful, Your New Balance is ${balance}`);
            break;
          case 'Utility Bills':
            balance=await Utility(balance)
            console.log("Utility Bills");
            console.log(`Your Transaction is Successful, Your New Balance is ${balance}`);;
            break;
          case 'Exit':
            anotherTrans = "No";
            break;
            
          // default:
          //   console.log("Enter Correct Option");
          }
          if(options.menu !== "Exit"){
            var anotherTrans = await anotherTransaction();
          }
          if(anotherTrans == "No"){
console.log("Thank You For Using our Services!")
          }

  }
  while(anotherTrans != "No")

      
  }
  export default mainScreen;