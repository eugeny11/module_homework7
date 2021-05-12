    function Device(type,brand){
    this.type = type;
    this.brand = brand;
    this.turnOn = false;
    this.chargeOn = false;
    }
    
    Device.prototype.Wire = function(){
    if (this.turnOn === true){
    console.log(`Данный ${this.type} ${this.brand} подключается к сети`)
    }  else if (this.turnOn === false){
    console.log(`Данный ${this.type} ${this.brand} - беспроводной`) 
    } return this.turnOn
    }
    
    Device.prototype.Charge = function(){
    if (this.chargeOn === true){
    console.log(`Данный ${this.type} ${this.brand} работает от аккумулятора`)
    } else if (this.chargeOn === false){
    console.log(`Данный ${this.type} ${this.brand} работает от сети`)
    } return this.chargeOn
    }
    
    function TV(brand,width,resolution){
    this.type = 'TV';
    this.brand = brand;
    this.turnOn = true;
    this.chargeOn = false;
    this.width = width;
    this.resolution = resolution;
    }
    
    TV.prototype = new Device();
    
    const Xiaomi4A = new TV('Xiaomi',32,'1366x768');
    console.log(Xiaomi4A);
    console.log(Xiaomi4A.Wire());
    console.log(Xiaomi4A.Charge());
    
    function Flashlight(brand,brightness,material){
    this.type = 'flashlight';
    this.brand = brand;
    this.turnOn = false;
    this.chargeOn = true;
    this.brightness = brightness;
    this.material = material;
    }
    
    Flashlight.prototype = new Device();
    
    const FenixPD35 = new Flashlight('Fenix',500,'aluminium');
    console.log(FenixPD35);
    console.log(FenixPD35.Wire());
    console.log(FenixPD35.Charge());