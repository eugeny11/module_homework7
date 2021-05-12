function getObjKey(obj){
if (typeof obj === 'object'){
		for (let key in obj){
    if (obj.hasOwnProperty(key)){
    console.log(key);
    console.log(obj[key]);
    }
    }
}
else {
console.log('Это не объект');
}
}

const user = {
city: "Moscow"
}

const developer = Object.create(user);
developer.ownCity = "Volgograd";

getObjKey(user);
getObjKey(developer);