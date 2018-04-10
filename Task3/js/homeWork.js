'use strict';

function Сar(parameters) {
    this._sizeParam = parameters.size;
    this._commonParam = parameters.common;
    this._characteristics = parameters.characteristics;
    this._speed = 0;
    this._fuel = 0;
    this._maxFuel = parameters.maxFuel;
    this._insuranceNumber = "";
    this._inspectionDate = "";
}


Сar.prototype.setSpeed = function (speedStep) {
    this._speed += speedStep;
    this._speed = this._speed < 0 ? 0 : this._speed;
    return this._speed >= this._commonParam.maxSpeed ? this._common.maxSpeed : this._speed;
}
Сar.prototype.setFuel = function (liters) {
    this._fuel += liters;
    this._fuel = this._fuel < 0 ? 0 : this._fuel;
    return this._fuel >= this._maxFuel ? this._maxFuel : this._fuel;
}
Сar.prototype.setInsuranceNumber = function (insuranceNumber) {
    this._insuranceNumber = insuranceNumber;
}
Сar.prototype.setInspectionDate = function (inspectionDate) {
    this._inspectionDate += inspectionDate;
}


Сar.prototype.getFuelLevel = function () {
    return this._fuel + "l";
}
Сar.prototype.getSpeed = function () {
    return this._speed + "km/h";
}
Сar.prototype.getInsuranceNumber = function () {
    return this._insuranceNumber;
}
Сar.prototype.getInspectionDate = function () {
    return this._inspectionDate;
}
Сar.prototype.getSize = function () {
    return "width:" + this._sizeParam.width + "mm, length:" + this._sizeParam.length + "mm, height:" + this._sizeParam.height + "mm";
}
Сar.prototype.getReleaseInfo = function () {
    return "brand:" + this._commonParam.brand + ", model:" + this._commonParam.model + ", year of release:" + this._commonParam.releaseYear + ", VIN:" + this._commonParam.VIN + ", colour:" + this._commonParam.colour;
}
Сar.prototype.getCharacteristics = function () {
    return "maxSpeed:" + this._characteristics.maxSpeed + " km/h, power:" + this._characteristics.power + " hp, gear:" + this._characteristics.gear + ", fuel:" + this._characteristics.fuel + ", class:" + this._characteristics.class;
}

function PassengerCar(parameters) {
    Сar.apply(this, arguments);
    this._bodyInfo = parameters.body;
}

PassengerCar.prototype = Object.create(Сar.prototype);

PassengerCar.prototype.getBodyInfo = function () {
    return "body type:" + this._bodyInfo.type + ", doors amount:" + this._bodyInfo.doors;
}

function TruckCar(parameters, reservation, trailer) {
    Сar.apply(this, arguments);
    this._truckInfo = parameters.truckInfo;
    this._reservation = reservation;
    this._trailer = trailer;
}

TruckCar.prototype = Object.create(Сar.prototype);

TruckCar.prototype.getTruckInfo = function () {
    return "truck carrying:" + this._truckInfo.carrying + "t";
}

TruckCar.prototype.getWorkingInfo = function () {
    return "reservation:" + this._reservation + ", has trailer:" + this._trailer;
}

TruckCar.prototype.setWorkingInfo = function (reservation, trailer) {
    this._reservation = reservation;
    this._trailer = trailer;
}

function Bus(parameters, maxSits) {
    Сar.apply(this, arguments);
    this._maxSits = maxSits;
}

Bus.prototype = Object.create(Сar.prototype);

Bus.prototype.getBusInfo = function () {
    return "max sits:" + this._maxSits;
}


function PersonalCar(parameters, owner, condition){
    PassengerCar.apply(this, arguments);
    this._owner = owner;
    this._condition = condition;
}
PersonalCar.prototype = Object.create(PassengerCar.prototype);

PersonalCar.prototype.changeOwner = function (owner) {
    this._owner = owner;
}

PersonalCar.prototype.getPersonalCarInfo = function () {
    return "owner:" + this._owner + ", it's condition:" + this._condition;
}




