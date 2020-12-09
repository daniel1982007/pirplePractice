const root = document.getElementById('root')

const div = document.createElement('div')
root.appendChild(div)

const inputDiv1 = document.createElement('div')
const label1 = document.createElement('label')
label1.innerText = 'label 1'
label1.classList.add('block')
inputDiv1.appendChild(label1)
const input1 = document.createElement('input')
input1.id = '1'
input1.placeholder = 'placeholder1'
input1.addEventListener('keyup', handleInput)
input1.addEventListener('blur', blurer)
inputDiv1.appendChild(input1)

const inputDiv2 = document.createElement('div')
const label2 = document.createElement('label')
label2.innerText = 'label 2'
label2.classList.add('block')
inputDiv2.appendChild(label2)
const input2 = document.createElement('input')
input2.id = '2'
input2.placeholder = 'placeholder2'
input2.addEventListener('keyup', handleInput)
input2.addEventListener('blur', blurer)
inputDiv2.appendChild(input2)

div.appendChild(inputDiv1)
div.appendChild(inputDiv2)


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//if you very quickly strike a key from keyboard, keyup may not happed, because 
//key event happens in order of: keydown, keypress, keyup, keyup is the last action
//in order to handle it, you need use blur event.
let timer
let prevValue = ''
function handleInput(e) {
    // switch(e.keyCode) {
    //     case 9:
    //         break
    //     default:
    //         clearTimeout(timer)//clear timer action
    //         timer = setTimeout(() => console.log(e.keyCode), 1000)
    //         break
    // } 
    const value = e.target.value
    



    if(value && value !== prevValue) {
        prevValue = value
        clearTimeout(timer)
        timer = setTimeout(() => {
            switch(e.target.id) {
                case '1':
                    if(!/[0-9]/.test(value)) { //what does regex //g mean
                        label1.innerText = 'wrong'
                        label1.classList.value = 'block red'
                    } else {
                        label1.innerText = 'label 1'
                        label1.classList.value = 'block black'
                    }
                    break

                case '2':
                    if(!/[0-9]/.test(value)) { //what does regex //g mean
                        label2.innerText = 'wrong'
                        label2.classList.value = 'block red'
                    } else {
                        label2.innerText = 'label 2'
                        label2.classList.value = 'block black'
                    }
                    break
            }
        }, 1000)
    } 
    if(!value) {
        clearTimeout(timer)
        switch(e.target.id) {
            case '1':
                label1.innerText = 'label 1'
                label1.classList.value = 'block black'
                break
            case '2':
                label2.innerText = 'label 2'
                label2.classList.value = 'block black'
            break
        }
    }
}

function blurer(e) {
    const value = e.target.value
    prevValue = ''
        
    switch(e.target.id) {
        case '1':
            if(value && !/[0-9]/.test(value)) { //what does regex //g mean
                label1.innerText = 'wrong'
                label1.classList.value = 'block red'
            } else {
                label1.innerText = 'label 1'
                label1.classList.value = 'block black'
            }
            break

        case '2':
            if(value && !/[0-9]/.test(value)) { //what does regex //g mean
                label2.innerText = 'wrong'
                label2.classList.value = 'block red'
            } else {
                label2.innerText = 'label 2'
                label2.classList.value = 'block black'
            }
            break
    }
    
}