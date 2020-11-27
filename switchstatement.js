function timeAdder(value1, label1, value2, label2) {
    //validation of parameters
    if(typeof value1 != 'number' || typeof value2 != 'number') {
        return false
    }

    let sum
    switch(label1) {
        case 'second': case 'minute': case 'hour': case 'day':
            if(value1 != 1) {
                return false
            } else if(label1 === 'second') {
                sum = value1
            } 
            if(label1 === 'minute') {
                sum = value1*60
            }
            if(label1 === 'hour') {
                sum = value1*60*60
            }
            if(label1 === 'day') {
                sum = value1*24*60*60
            }
            break
        case 'seconds': case 'minutes': case 'hours': case 'days':
            if(value1 <= 1) {
                return false
            } else if(label1 === 'seconds') {
                sum = value1
            }
            if(label1 === 'minutes') {
                sum = value1*60
            }
            if(label1 === 'hours') {
                sum = value1*60*60
            }
            if(label1 === 'days') {
                sum = value1*24*60*60
            }
            break
        default:
            return false
    }

    switch(label2) {
        case 'second': case 'minute': case 'hour': case 'day':
            if(value2 != 1) {
                return false
            } else if(label2 === 'second') {
                sum += value2
            } 
            if(label2 === 'minute') {
                sum += value2*60
            }
            if(label2 === 'hour') {
                sum += value2*60*60
            }
            if(label2 === 'day') {
                sum += value2*24*60*60
            }
            break
        case 'seconds': case 'minutes': case 'hours': case 'days':
            if(value2 <= 1) {
                return false
            } else if(label2 === 'seconds') {
                sum += value2
            }
            if(label2 === 'minutes') {
                sum += value2*60
            }
            if(label2 === 'hours') {
                sum += value2*60*60
            }
            if(label2 === 'days') {
                sum += value2*24*60*60
            }
            break
        default:
            return false
    }

    if(sum % 86400 === 0) {
        return [sum/86400, 'days']
    } else if(sum % 3600 === 0) {
        return [sum/3600, 'hours']
    } else if(sum % 60 === 0) {
        return [sum/60, 'minutes']
    } else {
        return [sum, 'seconds']
    }   
}

console.log(timeAdder(2,'seconds',1, 'minute'))
console.log(timeAdder(2,'days',3, 'hours'))