function calculadora(texto){
    /* función que dada una cadena de caracteres con operaciones, sea capaz de devolver el resultado */
    
    var total = 0

    for (let c in texto){
        c = parseInt(c)
        if (texto[c] == "+"){
            num1 = parseInt(texto[c-2])
            num2 = parseInt(texto[c+2])
            // console.log(typeof c)
    
            total = total + num1 + num2
        } 
    
        else if (texto[c] == "-"){
            num1 = parseInt(texto[c-2])
            num2 = parseInt(texto[c+2])
    
            total = total + num1 - num2
        }
            
        else if (texto[c] == "*"){
    
            num1 = parseInt(texto[c-2])
            num2 = parseInt(texto[c+2])
    
            total = total + num1 * num2
        }
    
        else if (texto[c] == "/"){
            num1 = parseInt(texto[c-2])
            num2 = parseInt(texto[c+2])
    
            total = total + num1 / num2
        }
    
        else if (texto[c] == "%"){
    
            num1 = parseInt(texto[c-2])
            num2 = parseInt(texto[c+2])
    
            total = total + num1 % num2
        }
    
    } 
    
    console.log(`calculadora 1: ${texto} => ${total}`) 

}


function calculadora2(texto){
    /* función que dada una cadena de caracteres con operaciones, sea capaz de devolver el resultado */
    
    var total = 0

    for (let c in texto){
        c = parseInt(c)
        
        if (c == '0'){
            total = parseInt(texto[c])
        }
        else if (texto[c] == "+"){
            num2 = parseInt(texto[c+2])    
            total = total + num2
        } 
    
        else if (texto[c] == "-"){
            num2 = parseInt(texto[c+2])
            total = total - num2
        }
            
        else if (texto[c] == "*"){
            num2 = parseInt(texto[c+2])
    
            total = total * num2
        }
    
        else if (texto[c] == "/"){
            num2 = parseInt(texto[c+2])
    
            total = total / num2
        }
    
        else if (texto[c] == "%"){
    
            num2 = parseInt(texto[c+2])
    
            total = total % num2
        }
    
    } 
    
    console.log(`calculadora 2: ${texto} => ${total}`) 
}

const foo = () => {

}

calculadora("5 + 5")
calculadora2("5 + 5")
calculadora2("5 + 2 / 3")
calculadora2("10 + 9 - 8 * 7 / 6 % 5")

