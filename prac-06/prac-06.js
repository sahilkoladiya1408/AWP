let s = {
    modelName : "Ford Mustang Mach 1 Premium",
    speed : 270,
    color : "Matte Black",
    price : "1.5 cr"
    }

const displaySpeed = (s) => {
    console.log(s.speed + "km/h");
}

displaySpeed(s);

const IncrementSpeed = (s) => {
    console.log(s.speed + 100 + "km/h");
}

IncrementSpeed(s);

const decrementSpeed = (s) => {
    console.log(s.speed - 100 + "km/h");
}

decrementSpeed(s);