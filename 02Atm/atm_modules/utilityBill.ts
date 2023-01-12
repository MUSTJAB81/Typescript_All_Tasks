import inquirer from 'inquirer'

const Electic = Math.ceil(Math.random()*1000+1)
const Gas = Math.ceil(Math.random()*1000+1)
const Phone = Math.ceil(Math.random()*1000+1)

async function Utility(balance: number){
      const input= await inquirer.prompt([{
            name:"Billtype",
            type:"list",
            message:"Select a bill type",
            choices:["Electricity", "Gas", "Phone"]
      }]);
      if (input.Billtype=="Electricity"){
            console.log(`Your Current electricity bill  is : ${Electic}`)
            balance -=Electic;
      }
      else if (input.Billtype=="Gas"){
            console.log(`Your Current electricity bill  is : ${Gas}`)
            balance -=Gas;
      }
      else if (input.Billtype=="Phone"){
            console.log(`Your Current electricity bill  is : ${Phone}`)
            balance -=Phone;
      }
      return balance;
}
export default Utility;