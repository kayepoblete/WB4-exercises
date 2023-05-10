// Exercise 4 page 38
"use strict";

let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7
    },
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
   ];

// Which vehicles are RED?
function findVehicleByColor(_vehicles, _color){
    let matching = [];
    for(let i = 0; i < _vehicles.length; i++){
        if(_vehicles[i].color == _color){
            matching.push(_vehicles[i]);
        }
    }
    return matching;
}
// console.log(findVehicleByColor(vehicles, "Red"));

// Which vehicles have registrations that are expired?
function vehicleExpiredRegistration(_vehicles){
    let matching = [];
    for(let i = 0; i < _vehicles.length; i++){
        if(_vehicles[i].registrationExpires < new Date()){
            matching.push(_vehicles[i]);
        }
    }
    return matching;
}
// console.log(vehicleExpiredRegistration(vehicles));

// Which vehicles that hold at least 6 people?
function vehicleCapacity(_vehicles, _capacity){
    let matching = [];
    for(let i = 0; i < _vehicles.length; i++){
        if(_vehicles[i].capacity >= _capacity){
            matching.push(_vehicles[i]);
        }
    }
    return matching;
}
// console.log(vehicleCapacity(vehicles, 6));

// Which vehicles have license plates that end with "222"?
function findVehicleByLicenseEnd(_vehicles, _end){
    let matching = [];
    for(let i = 0; i < _vehicles.length; i++){
        if(_vehicles[i].licenseNo.indexOf(_end) > -1){
            matching.push(_vehicles[i]);
        }
    }
    return matching;
}
console.log(findVehicleByLicenseEnd(vehicles, "222"));