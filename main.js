var speed = 50;
var connectionType = "fiber";


if (speed < 0) {
    console.log("Invalid speed value");
} else if (connectionType === "fiber") {
    if (speed >= 500) {
        console.log("Excellent fiber connection");
    } else if (speed >= 200 && speed < 500) {
        console.log("Good fiber connection");
    } else {
        console.log("Weak fiber connection");
    }

} else if (connectionType === "dsl") {
    if (speed >= 50) {
        console.log("Acceptable DSL connection");
    } else {
        console.log("Poor DSL connection");
    }
} else {
    console.log("Unknown connection type");
}





var grade = 95;

if (grade >= 90 && grade <= 100) {
    console.log("A");
} else if (grade >= 80 && grade <= 89) {
    console.log("B");
} else if (grade >= 70 && grade <= 79) {
    console.log("C");
} else if (grade >= 60 && grade <= 69) {
    console.log("D");
} else if (grade < 60 && grade >= 0) {
    console.log("F");
} else {
    console.log("Invalid grade value");
}



var dish = "small";
var size = "pi";
var extraCheese = true;


if (dish !== "pizza") {
    console.log("Not a pizza");
} else if (size !== "large") {
    console.log("Custom pizza size selected");
} else if (!extraCheese) {
    console.log("Pizza without extra cheese");
} else {
    console.log("Large pizza with extra cheese is ready!");
}



var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? eatsAnimals ? "omnivore" : "herbivore" : eatsAnimals ? "carnivore" :
    undefined;

console.log(category);





var musicians = 0;

if (musicians <= 0) {
    console.log("not a group");
} else if (musicians == 1) {
    console.log("solo");
} else if (musicians == 2) {
    console.log("duet");
} else if (musicians == 3) {
    console.log("trio");
} else if (musicians == 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}




var room = "billiards room";
var suspect = "Mrs. Sparr";
var weapon = "";
var solved = false;


if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
}
if (solved) {
    console.log(`${suspect} did it in the ${room} with the ${weapon}!`);
}