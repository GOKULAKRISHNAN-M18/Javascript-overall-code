//arry in forof loop
let arr = [10,20,30,"gokul",18,"Krish"]
for (let value of arr){
    console.log(value)
}

//string in forof loops

let str = "Gokul"
for(let value of str){
    console.log(value)
}

//function in forof loop

function* generatorfunction(){
    yield "Gokulakrishnan M"
    yield "Looking for job"
    yield "Im ready"
}
let output = generatorfunction()
for(let value of output){
    console.log(value)
}



       ////forin-loop (Object  ,  Array   ,   String)

let person1 = {
    name : "Gokulakrishnan M",
    age : 22,
    mark : 94,
    hobbies : ["cricket","Football","baseball"],
    familydetails : {
        totalmembers : [5],
        siblings : ['a'],
    },
    walk(){
        console.log("Im gonna walk .....")
    }
}
for(let key in person1){
    console.log(person1[key])
}


//Array in forin-loop

let array = [1,3,5,7,9,11]
for(let key in array){
    console.log(key)
}


//string in forin-loop

let string = "Gokulakrishnan M"
for(let key in string){
    console.log(string[key])
}





