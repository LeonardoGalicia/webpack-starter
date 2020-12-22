const sum = new Function('a', 'b', 'return a + b');
const alerta = new Function('alert("Hola Leo, Completado")');
class CustomError extends Error {
    constructor(foo = 'bar', ...params) {
    super(...params);
    if (Error.captureStackTrace) {
    Error.captureStackTrace(this, CustomError);
    }
    this.name = 'CustomError';
    this.foo = foo;
    this.date = new Date();
    }
}

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
export{sum,alerta,CustomError,Persona,Empleado};