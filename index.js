showBank = {
  a: "Friends",
  b: "silicon_valley",
  c: "bbt",
};

quesBank = {
  Friends: [
    {
      question: `For a brief amount of time, Joey and Chandler weren't roommates. Who replaces Joey as Chandler's new roommate?
    (a) Russ
    (b) Eddie
    (c) Fun Bobby
    `,
      answer: "b",
    },
    {
      question: `What did Ross name his white-headed pet capuchin monkey? 
    (a) Marcella 
    (b) Marcel 
    (c) Marciel 
    `,
      answer: "b",
    },
    {
      question: `Rachel-Monica are up against Chandler-Joey in a show-style game contest. The competition is getting tough the girls have bet their apartment while the boys vow to_____ if they lose: 
    (a) Teach them how to play poker.
    (b) Gift them their recliners.
    (c) Give away the rooster and the duck. 
    `,
      answer: "c",
    },
    {
      question: `We all know that Joey's soulmate was his recliner. Do you happen to remember his precious chair's name? 
    (a) Rosita 
    (b) Rosette 
    (c) Rossalie 
    `,
      answer: "a",
    },
    {
      question: `Rachel and Chandler are obsessed with this New York Style cheesecake which was for their neighbour, Mrs. Braverman. Which bakery accidentally delivers the cheesecake to Chandler's address? 
    (a) The Cheesecake Factory 
    (b) Mamma's Little Bakery 
    (c) Granny's Cafe 
    `,
      answer: "b",
    },
  ],
  bbt: [
    {
      question: `What was the name of Howard’s half brother?
    (a) Josh
    (b) Mike
    (c) Neil
    `,
      answer: "a",
    },
    {
      question: `How long was Penny married to Zack?
    (a) 6 months
    (b) 3 years
    (c) 1 year
    `,
      answer: "b",
    },
    {
      question: `Sheldon has Oatmeal for breakfast on which day?
    (a) Saturday
    (b) Tuesday
    (c) Monday
    `,
      answer: "c",
    },
    {
      question: `What is the name of the game Amy and Sheldon create?
      
    (a) The game of Flags 
    (b) FlagLands 
    (c) Counterfactuals 
    `,
      answer: "c",
    },
    {
      question: `Sheldon had a pet cat when he was a kid. What was the name of the cat?
    (a) Moondance 
    (b) Lucky 
    (c) Einstein 
    `,
      answer: "b",
    },
  ],
  silicon_valley: [
    {
      question: `What is Pied Piper?
    (a) A lossless compression software.
    (b) A woman
    (c) A song
    `,
      answer: "a",
    },
    {
      question: `At TechCrunch Disrupt, Jared was on what drug?
    (a) Adderall
    (b) Opiates
    (c) Weed
    `,
      answer: "a",
    },
    {
      question: `What bank chain was Carver notorious for hacking in the past?
    (a) Standard Bank
    (b) Chase Bank
    (c) Bank of America
    `,
      answer: "c",
    },
    {
      question: `How did Erlich originally come to own 10% of Pied Piper?
    (a) Erlich came up with the idea for Pied Piper.
    (b) He bought it outright.
    (c) In exchange for rent-free lodging at Erlich's incubator, Richard agreed to give him 10% of Pied Piper.
    `,
      answer: "c",
    },
    {
      question: `People often incorrectly believe Jared has what type of health issue?
    (a) A wasting disease.
    (b) An eating disorder.
    (c) A substance use disorder.
    `,
      answer: "a",
    },
  ],
};

var chalk = require("chalk");
var readLineSync = require("readline-sync");

var score = 0;
var name, finalScore;
var show_name;

function intro() {
  console.log(
    chalk.bgGreen(`First Things First:
  1. Choose any one of the three Sitcoms. 
  2. Get 2 points for every correct answer. 
  3. Choose 'a', 'b' or 'c' to give your answer`)
  );
  name = readLineSync.question("\nWhat's your name'?\n");
  show_choice = readLineSync.question(`\nWhich of the following Sitcom you like the most?
  (a) Friends
  (b) Silicon Valley
  (c) The Big Bang Theory 
  Your choice: `);
  show_name = showBank[show_choice];
  console.log(
    chalk.bgYellow(`\n\nWelcome ${name}!\nLet's begin the - Sitcom quiz.`)
  );
}

function quiz() {
  quesBank[show_name].map((q, idx) => {
    console.log(chalk.bgYellow(`Question ${idx + 1}: `));
    console.log(q.question);
    var ans = readLineSync.question("Your answer: ");
    if (ans === q.answer) {
      console.log(chalk.green("\nCorrect!✅\n"));
      score += 2;
      console.log(chalk.bgBlue(`Your Current score is ${score}`));
      console.log("––––––––––\n\n");
    } else {
      console.log(chalk.red("\nWrong!⛔\n "));
      console.log(chalk.bgBlue(`Your Current score is ${score}`));
      console.log("––––––––––\n\n");
    }
  });

  footer = `
––––––––––––––––––––––––––––––––––––––––––
    Thank You for taking the quiz.      
    Your final score is ${score}/10.        
––––––––––––––––––––––––––––––––––––––––––
`;
}

header = `
––––––––––––––––––––––––––––––––––––––––––
        Welcome to Sitcom Quiz      
––––––––––––––––––––––––––––––––––––––––––
`;

console.log(chalk.bgYellow(header));
intro();
quiz();
console.log(chalk.bgYellow(footer));
