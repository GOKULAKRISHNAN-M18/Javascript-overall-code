function* generatorfunction(){
    yield "Hello"
    yield "Gokul"
    yield "21"
    return "close"
}
let overall = generatorfunction()
console.log(overall.next())
console.log(overall.next())
console.log(overall.next())
console.log(overall.next())