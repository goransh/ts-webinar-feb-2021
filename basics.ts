const myString: string = "Hello";

// type inference
let myName = "Gøran";
// name = 1; error: name must be a string
myName = "Gøran";

// union types
let id: string | number = 1;
id = "1123976f-9c72-4ada-936b-e22d827c76cf";

// type alias

type MyString = string; // simple alias

type Id = string | number; // alias for union types

interface Person {
  id: Id;
  name: string;
  birthday?: Date; // birthday is optional
}

interface CoffeeConsumer {
  coffeeConsumption: number;
}

interface Developer extends Person, CoffeeConsumer {
  linesOfCodePerDay: number;
}

const dev: Developer = {
  id: "57689aca-f8c1-406a-9540-958d589f8037",
  name: "Per",
  coffeeConsumption: 9001,
  linesOfCodePerDay: 200,
};

// structural types

interface Identifiable {
  id: Id
}

const identify = ({ id }: Identifiable) => {
  console.log(`id=${id}`);
};

identify(dev);

// strictNullChecks

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
