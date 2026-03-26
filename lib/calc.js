function add(num1, num2) {
    if (typeof num1 == "string") {

        throw new Error("parameter must be a number")
    }
    if (typeof num2 == "string") {
        throw new Error("parameter must be a number")
    }
    
    
    return num1 + num2
}

function divide(num1,num2){
    if(num1 === 0 || num2 === 0){
        throw new Error("parameter cannot contains zero")
    }
    return num1 / num2
}

module.exports = {
    add,
    divide
}