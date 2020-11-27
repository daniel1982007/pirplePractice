function printMultiples() {
    let arr = []
    for(let i = 1; i <= 100; i++) {
        //prime number algorithm
        if(i >=2) {
            arr.push(i)
            for(let j=0; j<arr.length-1; j++) {
                if(i % arr[j] === 0) {
                    arr.pop()
                    break
                }
            }
        }

        //combination check
        if(i % 3 === 0 && arr.includes(i)) { console.log('Fizz and a prime number') } 
        else if(i % 5 === 0 && arr.includes(i)) { console.log('Buzz and a prime number') } 
        else if(arr.includes(i)){ console.log('A prime number') } 
        else if(i % 3 === 0 && i % 5 === 0) { console.log('FizzBuzz') } 
        else if(i % 3 === 0) { console.log('Fizz') } 
        else if(i % 5 === 0) { console.log('Buzz') } 
        else { console.log(i) }
    } 
}


printMultiples()