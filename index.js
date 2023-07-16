const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



// a)  Las pizzas que tengan un id impar.

console.log(
  "\n\n\nListado de pizzas con un id impar\n _________________________________________"
);

const pizzasIdImpar = pizzas.filter((pizza) => pizza.id % 2 == 1);
for (let value of pizzasIdImpar) {
  console.log(value.nombre + "  id: [" + value.id + "]");
}

// b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log(
  "\n\n\nResponder: ¿Hay alguna pizza que valga menos de $600?\n _________________________________________"
);

const precioEco = 600;
const pizzasBaratas = pizzas.filter((pizza) => pizza.precio < precioEco);

if (pizzasBaratas.length != 0) {  //Me fijo si hay alguna pizza que cumpla la condicion 
  for (let pizzab of pizzasBaratas) {
    console.log("La " + pizzab.nombre + " tiene un precio de $" + pizzab.precio);
  }
} else { 
  console.log("No hay pizzas con un precio menor a $" + precioEco);  // y sino aviso que no lo hay
}

// c) El nombre de cada pizza con su respectivo precio.
console.log(
  "\n\n\nNOMBRE DE PIZZA\t\tPRECIO\n _________________________________________"
);

pizzas.forEach((value) => {
  console.log(value.nombre + "\t\t| $" + value.precio);
});

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).

console.log(
  "\n\n\nTodos los ingredientes de cada pizza\n _________________________________________"
);

pizzas.forEach( pizza => {
  console.log("| " + pizza.nombre + " |");
  // console.log("Ingredientes: ");
  pizza.ingredientes.forEach( ingrediente => {
    console.log(ingrediente);
  });
  console.log("==========================");
});