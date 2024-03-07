// stampare in console numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    console.log(i)
    
    // per ogni numero multiplo di 3 stampare fizz
    // per ogni numero multiplo di 5 stampa buzz
    // per ogni numero multiplo sia di 3 che di 5 Fizzbuzz
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log(i + `-` + ` FizzBuzz`)
    } else if(i % 3 === 0){
        console.log(i + `-` + ` Fizz`)
    } else if(i % 5 === 0){
        console.log(i + `-` + ` Buzz`)
    }
}
    

    