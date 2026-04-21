const intro = ['Chef says:', 'Service alert:', 'Boss yells:'];
const person = ['the new guy', 'the waiter', 'the pizza chef'];
const action = ['needs more coffe', 'needs more beer', 'will burn the pan'];


function generateMessage() {
    let randomPickIntro = intro[Math.floor(Math.random() * intro.length)];
    let randomPickPerson = person[Math.floor(Math.random() * person.length)];
    let randomPickAction = action[Math.floor(Math.random() * action.length)];
    console.log(randomPickIntro, randomPickPerson,randomPickAction);
}