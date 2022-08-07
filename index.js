function shout(string){
    return string.toUpperCase()
}

function whisper(string){
 return string.toLowerCase()
}

function logShout(string){
    console.log(shout(string))
}

function logWhisper(string){
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string){
    if(string === 'hello'){
        return "I can't hear you!"
    } else if(string === "HELLO"){
        return "YES INDEED!"
    } else if("Let\'s have dinner together!"){
        return "I would love to!";
    }
}