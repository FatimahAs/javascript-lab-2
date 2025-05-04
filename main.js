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