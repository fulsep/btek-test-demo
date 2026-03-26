const {add, divide} = require('./calc')

test('10+5=15', function(){
    const num1 = 10
    const num2 = 5

    const result = add(num1, num2)

    expect(result).toBe(15)
})

test('string + number = error', function(){
    const num1 = 'hello'
    const num2 = 10

    function result(){
        add(num1, num2)
    }

    expect(result).toThrow();
})

test('10/2=5', function(){
    const num1 = 10
    const num2 = 2

    const result = divide(num1, num2)

    expect(result).toBe(5)
})

test('number / 0 = error', function(){
    const num1 = 10
    const num2 = 0

    function result(){
        divide(num1, num2)
    }

    expect(result).toThrow();
})