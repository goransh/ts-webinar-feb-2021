const myString: string = "Hello";

// type inference
let name = "Per";
name = "Pål";
// name = 1; error: name must be a string

// union types
let id: string | number = 1;
id = "1123976f-9c72-4ada-936b-e22d827c76cf";

// type alias

type MyString = string; // simple alias

type IdType = string | number; // alias for union types

// smart casting and type inference
function parseDate(input: Date | string | number) {
  // you can also use a type alias for the input types

  // input is of type Date | string | number
  if (input instanceof Date) {
    // input is smart cast to Date
    return input;
  }

  // input is inferred to be of type string | number
  return new Date(input);

  /*
   * the Date constructor accepts input of type string | number so this is fine, but if we wanted
   * to check whether it is a string we can use: if(typeof input === "string") or similar for number
   */

  // notice how the return type of the function is also inferred to be of type Date
}

interface Person {
  id: string;
  name: string;
  birthday?: Date; // birthday is optional
}

interface CoffeeConsumer {
  coffeeConsumption: number;
}

export interface Developer extends Person, CoffeeConsumer {
  linesOfCodePerDay: number;
}

const dev: Developer = {
  id: "57689aca-f8c1-406a-9540-958d589f8037",
  name: "Per",
  coffeeConsumption: 9001,
  linesOfCodePerDay: 2,
};

// structural types

interface Identifiable {
  id: string
}

const identify = ({ id }: Identifiable) => {
  console.log(`id=${id}`);
};

identify(dev);

interface Named {
  name: string;
}

const showName = ({ name }: Named) => {
  console.log(name);
};

showName(dev);

// intersection types

type CoffeePerson = Person & CoffeeConsumer;

const person: CoffeePerson = {
  id: "5c2359d6-c36b-43ea-af4f-a2de817c515e",
  name: "Pål",
  coffeeConsumption: 4311,
};

// literal types

type Color = "red" | "green" | "blue";

interface Button {
  text: string;
  color: Color;
}

const myButton: Button = {
  text: "Click Me",
  color: "red",
};

const colorToHex: Record<Color, string> = {
  red: "#e51800",
  green: "#00ff62",
  blue: "#0086e8",
};

// Record<Color, string> is an alias for:
type ColorMapping = {
  [key in Color]: string;
};

// typeof and keyof

/*
 * If you don't have an interface and don't want to or are unable to define one, you can use typeof
 */
const product = {
  productId: "49581",
  title: "TypeScript Skills",
  price: 199,
};

type Product = typeof product;
// BUT, prefer declaring interfaces when you can!

// we can create literal types from the keys of an object:

type ProductKeys = keyof Product; // identical to "productId" | "price" | "title"

// strictNullChecks

const arr: string[] = [];

const arr2 = [...arr];

function printDeveloper(developer: Developer | undefined) {
  if (!developer) return;
  console.log(
    `${developer.name} was born in ${developer.birthday?.getFullYear() ?? "????"} and ` +
    `transforms ${developer.coffeeConsumption} cups of coffee` +
    ` into ${developer.linesOfCodePerDay} lines of code every day.`
  );
}

const developerToPrint: Developer | undefined = undefined;
printDeveloper(developerToPrint);



// More examples (wasn't included in presentation)

// tuples

const [first, second] = ["first", 2]; // first type is string, second is number

const idsAndBirthdays = (developer: Developer): [string, Date | undefined] => [
  developer.id,
  developer.birthday,
];

// you can also label properties in the tuple (only used for documentation and readability, has no function)
const idsAndNames = ({ id, name }: Developer): [id: string, name: string] => [id, name];

const triple = [true, "test", 1];

const triple0 = triple[0]; // type inferred is boolean | string | number :(

// add as const at the end for better type inference (and making it readonly)
const betterTriple = [true, "test", 1] as const;

const betterTriple0 = betterTriple[0]; // type inferred is 'true'!

// classes

class MyClass implements Person {
  private _backingField: string;

  // class properties can be added in constructor by adding public/private keyword
  constructor(
    public id: string,
    public name: string,
    public readonly birthday: Date, // readonly, cannot be modified
    normalConstructorParameter: string
  ) {
    this._backingField = normalConstructorParameter.toLowerCase();
  }

  get age(): number {
    return Math.floor((new Date().valueOf() - this.birthday.valueOf()) / (1000 * 60 * 60 * 24 * 365));
  }

  get fancyField() {
    return this._backingField;
  }

  set fancyField(fancyField: string) {
    this._backingField = fancyField.toLowerCase();
  }

  sayName() {
    console.log(this.name);
  }
}

const object = new MyClass(
  "472df853-1bbf-4eb5-8230-bb03d6833d14",
  "Testleif",
  new Date(2000, 10, 3),
  "test"
);
console.log(object.name, object.fancyField);

object.fancyField = "TEST!!";
