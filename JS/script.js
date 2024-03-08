// stampare in console numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    
   
    
    // creare delle variabili con ciò che va inserito nel div e con la classe da aggiungere
    let mesasge
    let cssClass
    if(i % 3 === 0 && i % 5 === 0 ){
        message = `FizzBuzz`
        cssClass = `fizz-buzz`   
    } else if(i % 3 === 0){
        message = `Fizz`
        cssClass = `fizz`
    } else if(i % 5 === 0){
        message = `Buzz`
        cssClass = `buzz`
    } else {
        message = i
        cssClass = ``
    }

     // stampare il div a schermo con classi e messaggi 
     let newDiv = document.querySelector(`#num-container`)
     newDiv.innerHTML +=  `<div class="box ${cssClass}">${message}</div>`

}   

    