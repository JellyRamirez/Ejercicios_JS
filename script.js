const ejercicio1 = [
    3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
    19, 88, 456, 13, 23, 24,
  ];
  
  const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  //Ejercicio 1
  /*Dado un arreglo de números enteros, Imprimir solamente aquellos 
  que son denominados números primos, (usar arreglo denominado como "ejercicio1").*/
lista = [];
const num_primo = (lista) => { 
  lista.forEach((n) =>{
  for (let i = 2; i <= n ; i++){
    if (n % i == 0 && n != i){
      break;
    }
    else if (n % i == 0){
      console.log(`Este número es primo: ${n}`);
  }
}}
)};
console.log('Ejercicio 1: Encontrar número primos');
num_primo(ejercicio1);

//Ejercicio 2
/*Ramón quiere hacer una fiesta privada en donde solo entre un número exclusivo de 
personas, ayudale al portero a solo dejar pasar a aquellas personas mayores de edad que sean familiares de Ramón. (con imprimir los usuarios
que se admitirán basta, usar el arreglo denominado como "ejercicio2").*/

/*lista_2 = [];
let admitidos = (lista_2) => {
  lista_2.forEach((persona) => {
  if (persona.edad >= 18 && persona.esFamiliar == true){
    console.log(`${persona.nombre} 
    esta invitado a la fiesta. Dejale pasar.`)
  }else{
    console.log(`${persona.nombre} 
    no esta invitado a la fiesta. Pídele que se retire`)
  }
})}

admitidos(ejercicio2);*/

//Ejercicio 3
/*Con ayuda de ciclos imprime los primeros 50 números
 de la suceción de fibonacci, (1,1,2,3,5,8,13,21).*/

/*let fibonacci = (n) => {
let a = 0, b = 0, c = 1;
console.log(a)
console.log(c)
for (i=0; i <=50 ; i++){
  b = a + c;
  console.log(b);
  a = c;
  c = b;
}
}

fibonacci(50);*/
