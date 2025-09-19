
// function string(str){

//     return str.split('').reverse('').join('')

// }
// console.log(string('hello'))

// function string(run) {
//     return run
//         // .toLowerCase()
//         .split(' ')
//         .map(word => word[0].toUpperCase() + word.slice(1))

//         .join(' ');

// }
// console.log(string('hello world'))


// function string(name1) {
//     return name1
//         .split(' ')
//         .map(words => words[0].toUpperCase() + words.slice(1))
//         .join('');

// }
// console.log(string('Gokula Krishnan M'))

//Array
// let number = ["hello", "GokulakrishnanM"]

// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }
let tasks = [];
    QQQQQQX
function addTask(task) {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}
AuthenticatorAssertionResponse
function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        let removed = tasks.splice(index, 1);
        console.log(`Removed: "${removed[0]}"`);
    } else {
        console.log("Invalid index.");
    }
}

function listTasks() {
    if (tasks.length === 0) {
        console.log("No tasks yet!");
    } else {
        console.log("To-Do List:");
        tasks.forEach((task, i) => {
            console.log(`${i + 1}. ${task}`);
        });
    }
}

// 🧪 Try the functions:
addTask("Learn JavaScript");
addTask("Build a To-Do App");
listTasks();

removeTask(0);
listTasks();

