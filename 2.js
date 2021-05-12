    function objStr(obj,str){
    if (obj.hasOwnProperty(str) && (typeof obj[str] === "string")){
    return true
    } else {
    return false;
    }
    }
    
    const user = {
    name: "Alexander",
    city: "Moscow",
    age: 32,
    status: true
    };
    
    console.log(objStr(user,'status'));
    console.log(objStr(user,'name'));
    console.log(objStr(user,'age'));