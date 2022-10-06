const rot13Dictionary = {
    "a": "n",
    "b": "o", 
    "c": "p", 
    "d": "q", 
    "e": "r", 
    "f": "s", 
    "g": "t",
    "h": "u",
    "i": "v", 
    "j": "w", 
    "k": "x", 
    "l": "y",
    "m": "z", 
    "n": "a",
    "o": "b", 
    "p": "c",
    "q": "d", 
    "r": "e", 
    "s": "f", 
    "t": "g", 
    "u": "h", 
    "v": "i", 
    "w": "j", 
    "x": "k", 
    "y": "l",
    "z": "m"
}

function convertToROT13(string){
    let rot13String = ''
    //Traverse the string. For each letter, check the ROT dictionary and replace the value 
    for (let i = 0; i < string.length; i++){
        // If the character is in the dictionary, convert it
        if(rot13Dictionary[string[i].toLowerCase()]){
            // If the character is already lowercased, just push its value into the rot13String
            if(string[i] === string[i].toLowerCase()){
                rot13String = rot13String + rot13Dictionary[string[i]]
            }
            // If the character is uppercased, convert the value to uppercase before pushing it to rot13String
            if(string[i] === string[i].toUpperCase()){
                rot13String = rot13String + rot13Dictionary[string[i].toLowerCase()].toUpperCase()
            }
        }else{
            rot13String = rot13String + string[i]
        } 
    }
    // This function will return the ROT13 version of the string.
    return rot13String
}


module.exports = {
    convertToROT13
}