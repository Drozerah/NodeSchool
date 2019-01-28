// function repeat(operation = function(){}, num) {
//     for (let index = 0; index < 10; index++) {        
//         operation()      
//     }
// }

// function repeat(operation, num) {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
// }

const repeat = (operation, num) => {
 if (num<=0) return
 operation()
 return repeat(operation, --num)
}

module.exports = repeat