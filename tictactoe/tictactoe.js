const gameboard = document.querySelector('#main')
gameboard.classList.add('gameframe')

for(let i=0; i<6; i++) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.id = i+1
    
    for(let j=0; j<6; j++) {
        const single = document.createElement('div')
        single.classList.add('single')
        single.id = `${j+1}-innerId`
        single.addEventListener('click', handleClick)

        cell.appendChild(single)
    }
    gameboard.appendChild(cell)
}

const button = document.createElement('button')
button.innerText = 'restart'
button.classList.add('button')
button.addEventListener('click', clickButton)
//appendChild means add button tag to gameboard div in html file//gamboard is parent div, button is one child div
gameboard.appendChild(button)

////////////////////////////////////////////////////////////
const x_div = gameboard.querySelectorAll('.single')

// let itemsArr = Array(6)
// for(let i=0; i<itemsArr.length; i++) {
//     itemsArr[i] = Array(6)
// }//in an empty array, inner items are undefined
//let isWinner = false

function handleClick(e) {
    //insert X or O
    itemInsert(e)
    //create arr of items
    //updateItemsArr(e)
    //horizontal checker
    horizontalChecker(e)
    //vertical checker
    verticalChecker(e)
    //diagonal checker
    diagonalChecker(e)
    //cats game checker
    catsGameChecker()
}

function itemInsert(e) {
    const el = e.target
    let countX = 0//why out of function, every 2 items changes
    let countO = 0
    for(let x of x_div) {
        if(x.innerText === 'X') {
            countX++
        } else if(x.innerText === 'O') {
            countO++
        }
    }

    if(el.nodeName === 'DIV') {
        if(countX - countO === 1) {
            if(el.innerText === 'X') {
                el.innerText = 'X'
                el.classList.add('red')    
            } else {
                el.innerText = 'O'
                el.classList.add('black')
            } 
        } else if(countX - countO === 0) {
            if(el.innerText === '') {
                el.innerText = 'X' 
                el.classList.add('red')   
            } else if(el.innerText === 'O') {
                el.innerText = 'O'
                el.classList.add('black')
            } else {
                el.innerText = 'X'
                el.classList.add('red')  
            }  
        }
    } 
}

// function updateItemsArr(e) {
//     const itemSign = e.target.innerText
//     const firstIndex = parseInt(e.target.parentNode.id)   //need parseInt
//     const secondIndex = parseInt(e.target.id[0])
//     itemsArr[firstIndex-1][secondIndex-1] = itemSign//problem
//     console.log(itemsArr)
// }

function horizontalChecker(e) {
    //itemsArr[i][j] !== undefined && itemsArr[i][j] === itemsArr[i][j+1] && itemsArr[i][j+1] === itemsArr[i][j+2]
    const row = e.target.parentNode.childNodes   //row is not an array, but an object
    console.log(row)
    const arr = []
    row.forEach(item => arr.push(item.innerText))   //forEach can be applied to object
    const hasSame = arr.some((item, index) => item !== '' && item === arr[index-1] && item === arr[index+1])
    if(hasSame) {
        //isWinner = true
        alert(`${e.target.innerText} has won`)
        x_div.forEach(div => div.removeEventListener('click', handleClick))
        //no need to use return, if the last code row in a function has run off, it means function is over, programm continues to run outside of function.
    }
}

function verticalChecker(e) {
    const arr =[]
    const id = e.target.id
    for(let item of x_div) {
        if(item.id === id) {
            arr.push(item.innerText)
        }
    }
    
    const hasSame = arr.some((item, index) => item !== '' && item === arr[index-1] && item === arr[index+1])
    if(hasSame) {
        //isWinner = true
        alert(`${e.target.innerText} has won`)
        x_div.forEach(div => div.removeEventListener('click', handleClick))
    }
}

function diagonalChecker(e) {
    // //find all diagonal arrays, each time when you click a cell, the programm will check all the diagonal, it is a waste of efficiency.
    //event means when something happens, it will fire some action, right here when match, programm will not run check
    //return // when return, it means programm stops running for loop
    const row = parseInt(e.target.parentNode.id)-1
    const col = parseInt(e.target.id[0])-1
    //you don't need to use for loop to slow the programm
    const len = document.querySelectorAll('.cell').length
    //find starting point and end point
    const arr1 = []
    let i = row
    let j = col
    while(i>0 && j>0) {
        i--
        j--
    }
    let k = row
    let l = col
    while(k<len-1 && l<len-1) {
        k++
        l++
    }
    let n = 0
    for(let m=i; m<=k; m++) {
        const item = document.getElementById(`${m+1}`).childNodes[j+n]
        n++
        arr1.push(item.innerText)
    }
    const hasSame = arr1.some((item, index) => item !== '' && item === arr1[index-1] && item === arr1[index+1])
    if(hasSame) {
        //isWinner = true
        alert(`${e.target.innerText} has won`)
        x_div.forEach(div => div.removeEventListener('click', handleClick))
        return
    }

    //another diagonal
    const arr2 = []
    let a = row
    let b = col
    //find the starting point and ending point
    while(a>0 && b<len-1) {
        a--
        b++
    }
    let c = row
    let d = col
    while(c<len-1 && d>0) {
        c++
        d--
    }
    let f = 0
    for(let g=a; g<=c; g++) {
        const item1 = document.getElementById(`${g+1}`).childNodes[b-f]
        arr2.push(item1.innerText)
        f++
    }
    const hasSame1 = arr2.some((item, index) => item !== '' && item === arr2[index-1] && item === arr2[index+1])
    if(hasSame1) {
        //isWinner = true
        alert(`${e.target.innerText} has won`)
        x_div.forEach(div => div.removeEventListener('click', handleClick))
        return
    }
}

function catsGameChecker() {
    //x_div is an object, not an array
    let hasUndefined
    for(let div of x_div) {
        if(div.innerText === '') {
            hasUndefined = true
            break
        } else {
            hasUndefined = false
        }
    }
    if(!hasUndefined) {
        alert('cats game')
        x_div.forEach(div => div.removeEventListener('click', handleClick))
        return
    }
}

function clickButton() {
    //clear itemsArr...
    //itemsArr = itemsArr.map(item => item.map(one => undefined))
    x_div.forEach(div => div.classList.value = 'single')

    for(let el of x_div) {
        el.innerText = ''
        el.addEventListener('click', handleClick)    
    }  
}






