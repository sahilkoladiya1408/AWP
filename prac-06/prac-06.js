function Car(carModel, carColor, carPrice, carSpeed){
    this.carModel = carModel;
    this.carColor = carColor;
    this.carPrice = carPrice;
    this.carSpeed = carSpeed;

    this.displaySpeed = () =>{
        console.log(`The current speed of the ${this.carModel} is ${this.carSpeed} km/h`);
    }

    this.increaseSpeed = (speed) => {
        this.carSpeed += speed;
        console.log(`The ${this.carModel} has increased its speed by ${speed} km/h to ${this.carSpeed} km/h`);
    }
    
    this.decreaseSpeed = (speed) =>{
        this.carSpeed -= speed;
        console.log(`The ${this.carModel} has decreased its speed by ${speed} km/h to ${this.carSpeed} km/h`);
    }
}

const myCar = new Car('Ford Mustang GTX', 'Dark Black', 15000000 , 315);

myCar.displaySpeed();
myCar.increaseSpeed(50);
myCar.decreaseSpeed(10);