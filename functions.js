function handleName(name) {
    const men = ['Washington', 'Lincoln', 'Socrates', 'Jones']
    const areMenMortal = true

    if(typeof name != 'string') {
        return 'input name is not valid'
    } else if(areMenMortal === true && men.includes(name, 0)) {
        return true
    }
    return 'This person is not mortal'
}

console.log(handleName('Jones'))