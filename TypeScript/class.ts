interface Point {
    x: number,
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void{
        console.log(`taksi x: ${point.x} Y:${point.y} konumuna gidiyor.`);
    }
}

class Bus implements Vehicle {
    // ..
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Otobüs x: ${point.x} Y:${point.y} konumuna gidiyor.`);
    }
}