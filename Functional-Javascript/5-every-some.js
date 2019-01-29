function checkUsersValid(goodUsers) {       
  return allUsersValid = submittedUsers => {        
    return submittedUsers.map( submittedUser => {
      return goodUsers.some( goodUser => {
        return goodUser.id === submittedUser.id
      })
    }).every(isValidObj => isValidObj === true)
  }
}

module.exports = checkUsersValid