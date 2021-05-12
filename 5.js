class Device{

constructor(type,brand){
this.type = type;
this.brand = brand;
}

isWire(){
if (this.turnOn === true){
    console.log(`Данный ${this.type} ${this.brand} подключается к сети`)
    }  else if (this.turnOn === false){
    console.log(`Данный ${this.type} ${this.brand} - беспроводной`) 
    } return this.turnOn
  }
  
isCharge(){
if (this.chargeOn === true){
    console.log(`Данный ${this.type} ${this.brand} работает от аккумулятора`)
    } else if (this.chargeOn === false){
    console.log(`Данный ${this.type} ${this.brand} работает от сети`)
    } return this.chargeOn
}

}

class TV extends Device{
constructor(brand,width,resolution){
super();
this.type = 'TV';
this.brand = brand;
this.width = width;
this.resolution = resolution;
this.turnOn = true;
this.chargeOn = false;
}

}

class Flashlight extends Device{
constructor(brand,brightness,material){
super();
this.type = 'Flashlight';
this.brand = brand;
this.brightness = brightness;
this.material = material;
this.turnOn = false;
this.chargeOn = true;
}
}

const Xiaomi4A = new TV('Xiaomi',32,'1366x768');
    console.log(Xiaomi4A);
  	Xiaomi4A.isWire();
    Xiaomi4A.isCharge();
    
const FenixPD35 = new Flashlight('Fenix',500,'aluminium');
console.log(FenixPD35);
FenixPD35.isWire();
FenixPD35.isCharge();