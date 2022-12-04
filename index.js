function findMatching(drivers, arg){
    let newArray = [];
    newArray = drivers.filter( function(person){
        if(person.toUpperCase() === arg.toUpperCase())
            return person;
    });
    return newArray;
}


function fuzzyMatch(drivers, string){
    let newArray = [];
    newArray = drivers.filter( function(iterator){ 
        if(iterator.substring(0,1) === string.substring(0,1)){
            return iterator;
        } 
    });
    return newArray;
}


function matchName(drivers, string){
    let newArray = [];
    newArray = drivers.filter( function(names){
        if(names.name === string){
            return names;
        }
    });
    return newArray;
} 