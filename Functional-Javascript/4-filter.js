// function getShortMessages(messages) {

//     let result = []
//     messages.filter( elm => { if (elm.message.length < 50) result.push(elm.message) })
//     return result
// }

const getShortMessages = messages => messages.filter( elm => elm.message.length < 50).map( elm => elm.message)

module.exports = getShortMessages