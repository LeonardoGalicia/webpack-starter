//import '../styles/index.scss';

//console.log('webpack starterkit');
//const carId=42; //constante solo lectura no pudes cambiar valor

//let y var.
//if(true){
    //let carId=100; //solo en el contexto.
  //  console.log('adentro: ',carId);
//}
//console.log('afuera:',carId);

//rest parameters 
/*function sendCars(...allCarIds) {
    allCarIds.forEach(id => console.log(id));
}
sendCars(100,200,300,500);*/

//descomponer arrays   
/*let carIds = [1 ,2 ,5];
let [car1, car2, car3] = carIds;//descompone el array en variables.
let [,...allcar]=carIds;//guarda todos en otro array ignora el primer valor
console.log(car1, car2, car3);*/

/*function starCars(car1, car2, car3) {
 console.log(car1, car2, car3);
}
let carIds = [100, 200, 300];
starCars(...carIds);*/

/*type of 
console.log(typeof(1));//que tipo es.
console.log(typeof(true));
console.log(typeof('Hello'));
console.log(typeof(function(){}));
console.log(typeof({}));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(NaN)); */

/*conversiones 
let foo=10;
console.log(foo.toString)
console.log(Number.parseInt('55'));//string a numero
console.log(Number.parseFloat(55.4));*/

/*loops
let i=0;
for (i=0; i< 12; i++) {
 if(i === 8) {
  continue;
 }
 console.log(i);
} */

//scope contexto cada funcion es uno,
/*function starCar(carId) {
 let message = 'Starting...';
 let startFn=function turnkey(){
    console.log(message);
 };
 startFn();
}
starCar(123);
console.log(message);*/

/*IIFE
(function(){
    console.log("hola");
})();*/

//closure
/*let app=(function(){
    console.log("hola");
    let carId=123; //haciendo analogia con java
                   // encapsula los datos con let por que solo vive dentro de ese contexto
    let getId=function(){
        return carId;
    }
    let getData=function(){
        return carId*2;
    }
    return {     //haciendo analogoa con java
                 //aqui son tus metodos get
                 //expones los metodos
        get:getId,
        data:getData

    }
})();
console.log(app.get(),app.data());*/

/* this
let fn = function() {
    console.log(this === window);
};
fn();*/

//call 
/*let o = {
    carId: 123,
     getId: function() {
     return this.carId;
    }
};
console.log(o.getId());
let newCar = {carId: 456};
console.log(o.getId.call(newCar)); //analogia con java
                                    estamos seteando.
                                    inyectar nuevo contexto 
*/

/*arrow fuction
let pp = () => console.log("hola");
pp();
//poner { } despues de => cuando es mas de una linea.
let app = (var1, var2) => {
    let init = 10;
    return var1 + 1 + 1 + init + var2;
    
};
console.log(app('INIT ', ' FIN')); */

/*valores por default 
let app = (var1, var2=2) => {
    let init = 10;
    init += var2;
    return var1 + 1 + 1 + init + var2;
};
console.log(app('ny'));*/


/*dia 2 */

   
import { sum, alerta, CustomError,Persona,Empleado } from '../modules/clases';

console.log(sum(1,3));
//alerta();

/** prototype
function Person(first, last, age) {
 this.name = {
  'first': first,
  'last' : last
 };
this.age = age;
this.bio = () => {
 var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
 alert(string);
};
this.greeting = () => {
  alert('Hi! I\'m ' + this.name.first + '.');
 };
};

var person1 = new Person('Eduardo', 'Pacreu', 24);
console.log('PROTOTYPE', person1.__proto__);//se accede.

Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
}; //se agrega una funcion llamada farewell.

Person.prototype.fullName = function() {
    return this.name.first + ' ' + this.name.last;
}; //se agrega una funcion llamada fullname. 
*/

/*expaning xprend
const array=['hola','mundo'];
console.log(sum(...array));*/

//arrays operaciones
let list = ['Orange', 'Apple'];
console.log(list);
console.log(list.length);
console.log(list[1]);

list.push('Avocado');
console.log(list);
list.pop();
console.log(list);
list.unshift('Avocado');//agregar a la perimera posicion
console.log(list);
list.shift(); //quitar la primera posicion
console.log(list);

//foreach
list.forEach(fruit => {
    console.log(fruit);
});
console.log(list);

//filter
let filterList = list.filter(element => { //filter almacena los elementos en una nueva lista si la condicion se cumple.
return element === 'Avocado' || element === 'Orange';
});
console.log(list);
console.log('Filter',filterList);

//Every.
console.log('Every', list.every(element => element.length < 8)); //es como filter pero solo regresa true y false. true si todos los elementos cumplen, false si alguno de sus elementos no cumple.

//map
let mapList = list.map(element => {
 if(element === 'Avocado') {
 return element = true;
} else {
    return element = false;
}
});
    
console.log(list);
console.log('Map', mapList);
    
mapList = list.map(element => element === 'Avocado');
console.log(mapList);

//reduce falata checar en la grabacion

console.log(list.reduce((previous, current) => previous + ' ' + current)); // manejas mas elementos, devuelve un valor despues de aplicar alguna operacion


//calses.
class Rectangulo { //nombre
 constructor (alto, ancho) { //constructor 
    this.alto = alto;
    this.ancho = ancho;
 }
 get area() {
    return this.calcArea();
 }
 calcArea () {
  return this.alto * this.ancho;
 }
}

const cuadrado = new Rectangulo(10, 10);

console.log('CLASS', cuadrado.area);

//herencia
/*
class Persona {
 constructor(first, last, age) {
    this.name = {
     'first': first,
     'last' : last
    };
    this.age = age;
 }
 bio() {
  var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  alert(string);
 };
 greeting() {
  alert('Hi! I\'m ' + this.name.first + '.');
 };
};
    
class Empleado extends Persona {
 constructor(first, last, age, puesto) {
  super(first, last, age);
  this.puesto = puesto;
 }
 greetingClient() {
  alert('Hi! I\'m ' + this.name.first + '. I work as a ' + this.puesto);
 };
};
*/
/*let persona1 = new Persona('Eduardo', 'Pacreu', 24);

console.log(persona1);
persona1.bio();

let Empleado1= new Empleado('Eduardo', 'Pacreu', 24,'desarrollador');
console.log(Empleado1);
Empleado1.bio();
Empleado1.greeting();

//manejo de errores checar explicacion en grabacion
 
try {
 throw new Error('¡Ups!');
} catch (e) {
 console.error('ERROR', e.name + ': ' + e.message);
} finally {
 console.log('ERROR END');
}

//error costumisados

try {
    throw new CustomError('baz', 'bazMessage');
    } catch(e) {
    console.error(e.name);
    console.error(e.foo);
    console.error(e.message);
    console.error(e.stack);
    } finally {
    console.log('CUSTOM ERROR END');
    }*/

//promesas -> procesos sincronos

function createPromise(count) {
    let promise = new Promise((resolve, reject) => {
    try {
    if (!count) {
    resolve('Exito');
    } else {
    throw new CustomError('baz', 'ocurrio algo');
    }
    } catch (error) {
    reject(error.message);
    }
    });
    return promise;
}

var count=true;
export function checkPromise() {
    count = !count;
    console.log(count);
    createPromise(count).then((successMessage) => {
    console.log('RESOLVE', successMessage);
    alert(successMessage);
    }).catch((errorMessage) => {
    console.log('REJECT', errorMessage);
    alert(errorMessage);
    }).finally(() => {
    console.log('PROMISE END');
    });
}

//ejercicio
var personas=[];
let persona1=new Persona('Leo','Galicia',23);
personas.push(persona1);

export function addInicio(){
   
    let nombre=document.getElementById("nombre").value;
    let app=document.getElementById("app").value;
    let edad=document.getElementById("edad").value
    if(nombre=="" || app=="" || edad==""){
        alert("Llena todos los datos")
    }else{
     let personaAdd=new Persona(nombre,app,edad);
     personas.unshift(personaAdd);
     crearTable();
     clearTextBox();
    }
    

    
}
export function addFin(){

    let nombre=document.getElementById("nombre").value;
    let app=document.getElementById("app").value;
    let edad=document.getElementById("edad").value;
    if(nombre=="" || app=="" || edad==""){
        alert("Llena todos los datos")
    }else{
        
    let personaAddF=new Persona(document.getElementById("nombre").value,
    document.getElementById("app").value,
    document.getElementById("edad").value);
    personas.push(personaAddF);
    crearTable();
    clearTextBox();  
   }
      
}

export function eliminarInicio(){
    personas.shift();
    crearTable();
}
export function eliminarFin(){
    personas.pop();
    crearTable();
}
export function filtrarEdad(){

    document.getElementById("tf").innerHTML="";
    let edadFiltrar=document.getElementById("edadF").value;
    let listFilter=personas.filter(element =>  {return element.age==edadFiltrar});
    console.log(listFilter);
    let registroFiltrado='';
    listFilter.forEach(function(pers, indice) {
        registroFiltrado+='<tr><td>'+pers.name.first
        +'</td><td>'+pers.name.last+'</td><td>'
        +pers.age+'</td><td><button onclick="app.funBio('+ indice +')">bio</button></td><td><button onclick="app.funGreeting('+ indice +')">Greeting</button></td></tr>';

    });
    document.getElementById("tf").innerHTML=registroFiltrado;
    document.getElementById("edadF").value=" ";
}
function clearTextBox(){
   document.getElementById("nombre").value="";
   document.getElementById("app").value="";
   document.getElementById("edad").value="";
}
export function funBio(i){
    personas[i].bio();
}

export function funGreeting(i){
    personas[i].greeting();
}

let crearTable=function iterarLista(){

    document.getElementById("tabla").innerHTML="";
    let registro='';
    personas.forEach(function(pers, indice){
        let i=0;
        registro+='<tr><td>'+pers.name.first
        +'</td><td>'+pers.name.last+'</td><td>'
        +pers.age+'</td><td><button onclick="app.funBio('+ indice +')">bio</button></td><td><button onclick="app.funGreeting('+ indice +')">Greeting</button></td></tr>';
        i+=1;
    });
    document.getElementById("tabla").innerHTML=registro;

}

crearTable();



