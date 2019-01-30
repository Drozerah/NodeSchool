// my solution
const countWords = input => {
 
    let obj = {}
    let uniq = [...new Set(input)].forEach(elm =>
        input.reduce((acc, word) => {

            if (word == elm) acc++ 
            return obj[elm] = acc
            
        },0)
    )
    return obj

}

// official solution

// function countWords(arr) {
//     return arr.reduce(function(countMap, word) {
//       countMap[word] = ++countMap[word] || 1 // increment or initialize to 1        return countMap
//     }, {}) // second argument to reduce initialises countMap to {}    }

module.exports = countWords