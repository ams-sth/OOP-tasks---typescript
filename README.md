## What is TypeScript?
TypeScript is a programming language developed by Microsoft that builds upon JavaScript by adding static type definitions. It is:
- A superset of JavaScript (all valid JavaScript code is valid TypeScript code)
- Compiles down to plain JavaScript that can run in any environment
- Provides optional type checking during development
- Offers enhanced IDE support with better autocompletion and error detection

# Object-Oriented Programming in TypeScript

## Classes and Objects
Classes are blueprints for creating objects that encapsulate data and behavior. Objects are instances of classes that contain their own data members and methods. TypeScript supports modern class-based object-oriented programming with a full feature set.

## Access Modifiers
TypeScript provides three access modifiers to control the visibility and accessibility of class members:
- Private members are only accessible within their declaring class
- Protected members are accessible within the declaring class and its subclasses
- Public members are accessible from any location

## Inheritance
Inheritance enables a class to inherit properties and methods from another class. TypeScript supports single inheritance where a class can extend one base class. The derived class can add new members and override existing ones from the base class.

## Interfaces
Interfaces define contracts that classes must follow. They specify a set of properties and methods that implementing classes must provide. TypeScript interfaces support multiple implementations, allowing a class to implement multiple interfaces.

## Abstract Classes
Abstract classes serve as base classes that cannot be instantiated directly. They can contain a mixture of implemented methods and abstract methods that derived classes must implement. Abstract classes provide a way to share common functionality while enforcing certain structure on derived classes.

## Generics
Generics enable the creation of reusable components that can work with multiple types. They provide type safety while maintaining flexibility, allowing classes and methods to operate on different data types without sacrificing type checking.

## Method Overriding
Classes can override methods inherited from parent classes to provide specific implementations. Method overriding allows child classes to modify the behavior of inherited methods while maintaining the same method signature.

## Static Members
Static members belong to the class itself rather than instances of the class. They can be accessed without creating an instance of the class and are shared across all instances. Static members are useful for utility functions and shared data.

## Encapsulation
Encapsulation bundles related data and methods that operate on that data within a single unit. It includes the concept of data hiding, where internal representation of an object is hidden from the outside world. TypeScript supports encapsulation through access modifiers and property accessors.

## Class Properties
Properties can be declared with TypeScript's type system to ensure type safety. They can be marked as optional or readonly, and can have default values. Property accessors (getters and setters) provide controlled access to class members.

## Type Checking
TypeScript's type system ensures that objects conform to their class definitions and interface contracts at compile time, catching potential errors before runtime.
