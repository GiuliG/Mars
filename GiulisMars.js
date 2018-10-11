var Rover = {
    x: 0,
    y: 0,
    direction: "N",
    }

function goForward(Rover) {
    switch (Rover.direction) {
        case "N":
        [Rover.x][Rover.y--];
        break;
        case "S":
        [Rover.x][Rover.y++];
        break;
        case "E":
        [Rover.x++][Rover.y];
        break;
        case "W":
        [Rover.x--][Rover.y];
        break;
    }
    

};


function goRight(Rover) {
    switch (Rover.direction) {
       case "N":
       Rover.direction = "E";
       break;
       case "S":
       Rover.direction = "W";
       break;
       case "W":
       Rover.direction = "N";
       break;
       case "E":
       Rover.direction = "S";

    }
    
};

function goLeft(Rover) {
    switch (Rover.direction) {
        case "N":
        Rover.direction = "W";
        break;
        case "S":
        Rover.direction = "E";
        break;
        case "W":
        Rover.direction = "S";
        break;
        case "E":
        Rover.direction = "N";
    }
};


function goBackwards(Rover) {
    switch (Rover.direction) {
        case "N":
        [Rover.x][Rover.y++];
        break;
        case "S":
        [Rover.x][Rover.y--];
        break;
        case "E":
        [Rover.x--][Rover.y];
        break;
        case "W":
        [Rover.x++][Rover.y];
        break;
    }
};

function receiveCommand(Rover){
    
}