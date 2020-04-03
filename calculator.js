memorynum = 0
let calculator = {
    Addition: function(num1){
        memorynum = (memorynum + num1)
        return memorynum
    }
    Addition: function(num1, num2) {
        memorynum = (num1 + num2)
        return (num1 + num2)
    }
    Subtraction: function(num1){
        memorynum = (memorynum - num1)
        return memorynum

    }
    Subtraction: function(num1, num2) {
        memorynum = (num1 - num2)
        return (num1 - num2)
    }
    Multiplication: function(num1){
        memorynum = (memorynum * num1)
        return (memorynum)
    }
    Multiplication: function(num1, num2) {
        memorynum = (num1 * num2)
        return (num1 * num2)
    }
    Division: function(num1){
        memorynum = (memorynum/num1)
        return memorynum

    }
    Division: function(num1, num2) {
        memorynum = (num1/num2)
        return (num1/num2)
    }
    Exponents: function(num1){
        memorynum = (memorynum ** num1)
        return memorynum
    }
    Exponents: function(num1, num2,) {
        memorynum = (num1 ** num2)
        return (num1 ** num2)
    }
    clear: 
    }
}

function clear {(
    memorynum = 0
)}
