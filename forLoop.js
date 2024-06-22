// function forLoop(num){
//     let x='';
//     for (let index = 0; index <num; index++) {
//         x+='*'
//     }
//     console.log(x);
// }
// }
// forLoop(5)


function forLoop(num) {
    const arr = [];
    for (let index = 0; index < num; index++) {
        arr.push('*');
    }
    console.log(arr.join(''));
}
forLoop(5)