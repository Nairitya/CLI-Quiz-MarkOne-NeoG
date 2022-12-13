let readlineSync = require('readline-sync');

const chalk = require('chalk');

let userName = readlineSync.question(chalk.bold("Please Enter Your Name: "));

console.log("\n\nWelcome", chalk.cyan.italic(userName), "to", chalk.bgBlue("DO YOU KNOW NAIRITYA\n"));

let score = 0;
let qna = [
    {
        question: "Who is my favourite Superhero? (Hint:I am vengeance)\n\n",
        options: `\ta: Batman
    b: Ironman
    c: Superman
    d: Spiderman
    
    ANSWER: `,
        answer: "a",
    },
    {
        question: "What is my favourite fruit? (Hint:King of fruits)\n\n",
        options: `\ta: Pineapple
    b: Orange
    c: Mango
    d: Guava
    
    ANSWER: `,
        answer: "c",
    },
    {
        question: "What is my favourite Color (Hint:Let's *SEE* if you can answer this. It's also an Amitabh Bachhan Movie)\n\n",
        options: `\ta: Red
    b: Pink
    c: Black
    d: Grey
    
    ANSWER: `,
        answer: "c",
    }
]

for (i = 0; i < qna.length; i++) {
    let userAnswer = readlineSync.question(qna[i].question + qna[i].options);

    if (userAnswer === qna[i].answer) {
        console.log(chalk.green.italic("\nYay you got it right!!\n"));
        console.log(chalk.inverse(`Your Score is ${++score}\n\n`));
    }
    else {
        console.log(chalk.red.italic("\nOops!! you are wrong!!\n"));
        if (score > 0) score--;
        console.log(chalk.inverse(`Your Score is ${score}\n\n`));
    }
}

console.log(chalk.bold.bgCyan(`\nYour Final Score is ${score}`));
console.log(chalk.bold.bgMagenta("Thanks for Playing :)"));