// To run this code, navigate to `programming-foundation/lesson1` in terminal
// and type `yarn start`!
console.log("Hello world!");

let arr1 = ["Rapunzel", "Merida", "Cinderella"];
function printArray(arr){
    for (let name of arr){
        console.log(`I am princess ${name}`)
}
}
printArray(arr1)
let arr2 = ["Ariel", "Mulan", "Aurora", "Pocahontas"];
printArray(arr2)