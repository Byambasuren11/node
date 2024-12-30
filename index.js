import figlet from 'figlet';
import chalk from 'chalk';
import pokemon from 'pokemon';
import cowsay from 'cowsay';
import { faker } from '@faker-js/faker';
import inquirer from 'inquirer';

// const spinner = ora('Loading unicorns').start();

// setTimeout(() => {
// 	spinner.color = 'yellow';
// 	spinner.text = 'Loading rainbows';
// }, 1000);

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 1,
});

  console.log(users);

figlet(pokemon.random(), function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(cowsay.say({
    text : chalk.magenta(data),
    e : "oO",
    T : "U "
}));
});
//audio.kill()



// console.log(
//     faker.helpers.fake(
//       'Hello {{person.prefix}} {{person.lastName}}, Your email adress{{person.email}}, how are you today?'
//     )
//   );

inquirer.prompt([
  {
    name: 'greeting',
    message: 'What would you like to say?',
   type: 'input'
  }])
  .then(function(answer){
    console.log(answer);
 });