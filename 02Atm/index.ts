import login from "./atm_modules/login.js";
import figlet from 'figlet'
import chalk from 'chalk'
figlet('MY ATM', function (err, data) {
      if (err) {
        console.log('Something went wrong...')
        console.dir(err)
        return
      }
      console.log(chalk.yellowBright(data))
    })

    setTimeout(() => {
      login();
    }, 2000)
login();