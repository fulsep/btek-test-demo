const {getRates} = require("./tollRates")

test("rates Solo-Ngawi is 163500", function(){
    const from = "Solo"
    const to = "Ngawi"
    const result = getRates(from, to)
    expect(result).toBe(163500)
})

test("rates Jakarta-Cikampek is 27000", function(){
    const from = "Jakarta"
    const to = "Cikampek"
    const result = getRates(from,to)
    expect(result).toBe(27000)
})

test("there is no routes Surga-Neraka", function(){
    const from = "Surga"
    const to = "Neraka"
    function result(){
        getRates(from,to)
    }
    expect(result).toThrow()
})

test("rates Bandung-Jakarta is 100000", function(){
    const from = "Bandung"
    const to = "Jakarta"
    const result = getRates(from, to)
    expect(result).toBe(100000)
})

