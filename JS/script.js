// stampare in console numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    
    // selezionare il div contenitore in cui inserire i div box 
    let newDiv = document.querySelector(`#num-container`)
    
    // aggiungere ai div classi diverse per i tre casi specifici (divisibili per 3, divisibili pre 5 o entrambi)
    if(i % 3 === 0 && i % 5 === 0 ){
        newDiv.innerHTML +=  `<div class="box fizz-buzz">FizzBuzz</div>`    
    } else if(i % 3 === 0){
        newDiv.innerHTML +=  `<div class="box fizz">Fizz</div>`
    } else if(i % 5 === 0){
        newDiv.innerHTML +=  `<div class="box buzz">Buzz</div>`
    } else {
        newDiv.innerHTML +=  `<div class="box">${i}</div>`
    }
}
    

    