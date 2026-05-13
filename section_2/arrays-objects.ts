let hobbies = ["Sports", "Coocking"];
// hobbies.push(10) // erro pois ele admite que o tipo de dados do array é apenas string

let stringArray: string[];

let flexTypesArray: (string | number)[];
flexTypesArray = ["Marcos"];
flexTypesArray.push(43);

let anotherWayToCreate: Array<string | number>; //Generic Type

let possibleValues: [number, number]; //cria uma Tupla, que só vai aceitar dois valores (duas posições)
possibleValues = [1, -1];
//possibleValues = [10, 20, 30] // erro

///////////////////////////////////////////////////////////////////////////////////////////////////////

let user = { name: "Max", age: 38 };
let user2: {
  name: string;
  age: number;
  hobbies: string[];
  role: { description: string; id: number };
} = {
  name: "Max",
  age: 38,
  hobbies: ["Hiking", "Running"],
  role: { description: "IT Manager", id: 10 },
};
