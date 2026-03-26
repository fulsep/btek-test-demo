function getRates(from, to){
    const data = {
        "Solo": {
            "Ngawi": 163500
        },
        "Ngawi": {
            "Kertosono": 102000
        },
        "Jakarta": {
            "Cikampek": 27000
        },
        "Bandung": {
            "Jakarta": 100000
        }
    }
    if (!data[from]){
        throw Error("location not found")
    }
    if (!data[from][to]){
        throw Error("location not found")
    }
    return data[from][to]
}

module.exports = {
    getRates
}