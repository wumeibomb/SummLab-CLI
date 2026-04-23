// await select function here in a const
//question then they select and answer that when they submit it they get feedback
//game over = feedback
//time the game 
import { select } from "@inquirer/prompts"
//how can I push a file that has dependencies in a file that I don't wanna push...
export async function quiz() {
    const action = await select({
    message: "Questions",
    choices : [
        {name: "What does CLI stand for?", value: "Q1"},
        {name: "The cd command stand for what and does what?", value: "Q2"},
        {name: "What does the grep command do?", value: "Q3"},
        {name:"What command is used to insert text into a file?", value: "Q4" },
    {name: "Quit", value:"quit"}    
],    
});    
switch (action) {
    case "Q1":
        pickAnsq1();
        break;
    case "Q2":
        await pickAnsq2()
        break;
    case "Q3":
        await pickAnsq3()
        break;
    case "Q4":
        await pickAnsq4()
        break;
    case "quit":
        console.log("Why no play? (TT)")
        process.exit(0);
}
}
// q1 = "a" q2 = "c" q3 = "b" q4 = "a"
export async function pickAnsq1(){
    const q1Answer = await select ({message: "Pick an Answer", 
       choices: [
        {name: "Command Line Interface", value: "a"}, 
        {name: "Control Line Interface", value: "b"},
        {name: "Command Loop Interface", value: "c"}
    ]})
    // note to self, the param should not be the same as the og select choices (choice)
    // and the name and value should be the reference
       const correctq1 = "a"
    console.log(`You chose: ${q1Answer}`)
    if (q1Answer == "a") {
        console.log("You are correct, next:")
        quiz()
    }
    else {
    console.log("The correct answer is:",correctq1)
    quiz()
} 
}
export async function pickAnsq2(){
    const q2Answer = await select({
        message: "Pick an Answer",
        choices: [
            {name:"change direction, changes the directory", value:"a" },
            {name: "create directory, creates a directory", value: "b"},
            {name: "change directory, creates the directory", value: "c"}
        ]
    });
    const correctq2 =  "c"
    console.log(`You chose: ${q2Answer}`)
    if (q2Answer == "c") {
        console.log("You are correct, next:")
        quiz()
    }
    else {
    console.log("The correct answer is:",correctq2)
    quiz()
} 
}
export async function pickAnsq3(){
    const q3Answer = await select ({message: "Pick an Answer", 
       choices: [
        {name: "grep searches for specific keywords in the file", value: "a"}, 
        {name: "grep looks for bugs within the code and highlights them", value: "b"},
        {name: "grep is a frog", value: "c"}
    ]})
       const correctq3 = "a"
    console.log(`You chose: ${q3Answer}`)
    if (q3Answer == "a") {
        console.log("You are correct, next:")
        quiz()
    }
    else {
    console.log("The correct answer is:",correctq3)
    quiz()

} 
}
export async function pickAnsq4(){
    const q4Answer = await select ({message: "Pick an Answer", 
       choices: [
        {name: "cat", value: "a"}, 
        {name: "echo", value: "b"},
        {name: "nando", value: "c"}
    ]})

       const correctq4 = "b"
    console.log(`You chose: ${q4Answer}`)
    if (q4Answer == "b") {
        console.log("Correct, thank you for participating")
        finished()
    }
    else {
    console.log("The correct answer is:",correctq4)
    console.log("Thank you for partcipating")
    finished()
} 
}
export async function finished() {
    console.log("Finished the quiz!!!!!");
    process.exit(0)
}
