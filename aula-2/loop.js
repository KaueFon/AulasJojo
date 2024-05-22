const names = ["babu", 'eu', 'eu mesmo', 'irene'];
const ages = [18, 15, 19, 21];

for (let i = 0; i < names.length; i++){
    if (ages[i] < 18){
        console.log(`${names[i]} é chupeta de nenem`);
    } else if (ages[i] > 18){
        console.log(`bença ${names[i]}`);
    } else {
        console.log(`${names[i]}, você é lindo`);
    }
}