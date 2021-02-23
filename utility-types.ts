import { Developer } from "./more-basics";

/**
 * Just like the Developer interface, but all properties are optional (?)
 */
type PartialDeveloper = Partial<Developer>;

/**
 * Opposite of Partial, makes all properties required
 */
type ConvolutedDeveloper = Required<Developer>;

/**
 * Create a new type with a subset of the properties
 */
type PickedDeveloper = Pick<Developer, "name" | "linesOfCodePerDay">;

/**
 * Create a new type but don't include some properties.
 */
type NoCoffeeDeveloper = Omit<Developer, "coffeeConsumption">;

// see https://www.typescriptlang.org/docs/handbook/utility-types.html for more
