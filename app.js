// for each 
// for of
// for in
// for (i = 0 )


function one(){
    var name = "shilu"
    return function second(){
        console.log(name)
    }
}


console.log(one()())