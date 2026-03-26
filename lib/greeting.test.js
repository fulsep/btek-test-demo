const {greet} = require('./greeting.js')

test('shows random greetings with name', function(){
    const name = "BTEK"

    const result = greet(name)

    expect(result).toContain(name)
})

test("random greetings", function(){

    const result1 = greet()
    const result2 = greet()
    expect(result1).not.toBe(result2)
})