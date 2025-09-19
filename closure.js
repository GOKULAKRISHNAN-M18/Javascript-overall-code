function outerfunction(){
   let outervalue="hello"
     function innerfunction(){
        console.log(outervalue)
    }
    return outervalue
}
let output = outerfunction()
console.log(output)
