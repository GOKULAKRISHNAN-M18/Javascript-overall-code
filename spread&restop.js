

//Spread & Rest operator
//spread ---> [...] {...}
//rest ---> (...)

let hobbies = ["Cricket", "kabbadi", "Vollyball"] 
let hobbies1 = ["Developer" , "Editor" , "digitalcreator"]

let newarr=[...hobbies , ...hobbies1]
console.log(newarr);

//object in spread & rest

let empid ={
    empid : 'Iq5464',
    name1 : 'Gokul',
    role : 'React developer'
}
let team2 ={...empid,emprole : 'Testing'}
console.log(team2)

//function in spread & rest operator

function operator(...a){
    console.log(...a)
}
operator(1,2,3,4)