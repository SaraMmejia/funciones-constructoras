/*Persona

1. Crea una función constructora llamada `Person` que reciba `name`, `weight` y `height` e inicializa esos atributos.
2. Agrega un método `bmi` que calcule el indice de masa corporal de la persona. El BMI se puede calcular con la siguiente formula:
`weight / height ^ 2`
3. Agrega otro método llamada `greet`  que recibe como argumento otra persona y retorna la cadena de texto `”Hi X, my name is Y”` donde `X` es el nombre de persona que recibimos como argumento y `Y` el atributo `name` de la persona.

```javascript
var p1 = new Person(“Pedro”, 72, 1.5);
p1.bmi(); // 32

var p2 = new Person(“Maria”, 54, 1.7);
p2.bmi(); // 24.45

p1.greet(p2); // “Hi Maria, my name is Pedro”
p2.greet(p1); // “Hi Pedro, my name is Maria” */ 

function Person(name, weight, height){
    this.name = name;
    this.weight = weight;
    this.height = height;
};

Person.prototype.bmi = function (){
    return this.weight /this.height **2;  
}; 

Person.prototype.greet = function (p){
    return "Hi " + p.name + ", my name is " + this.name; 
}; 

var p1 = new Person("Pedro", 72, 1.5);
console.log (p1.bmi());

var p2 = new Person("Maria", 54, 1.7);
console.log(p2.bmi());

console.log(p1.greet(p2));
console.log(p2.greet(p1));