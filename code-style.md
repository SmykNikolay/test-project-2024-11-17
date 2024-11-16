# Code Style Guide

## Design Patterns

We use the Gang of Four (GOF) design patterns in our codebase. These patterns help us create reusable and maintainable code. The GOF design patterns include:

- **Creational Patterns**: Singleton, Factory Method, Abstract Factory, Builder, Prototype
- **Structural Patterns**: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy
- **Behavioral Patterns**: Chain of Responsibility, Command, Interpreter, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor

## SOLID Principles

All code must adhere to the SOLID principles:

- **S**ingle Responsibility Principle
- **O**pen/Closed Principle
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle

## Use Atomic Design

We follow the **Atomic Design** methodology for building our user interface components. This approach divides the UI into five levels:

- **Atoms**: Basic building blocks such as buttons, inputs, and icons.
- **Molecules**: Groups of atoms working together, like a form input field with a label and button.
- **Organisms**: Complex components made up of molecules and atoms, like a header or card layout.
- **Templates**: Page-level structures that define layout but without final content.
- **Pages**: Complete interfaces where templates are populated with actual data.

This helps ensure that our UI is consistent, scalable, and easy to maintain by promoting reusability and modularity.

## Instructions for Copilot

- Always use GOF design patterns.
- Ensure that the code follows the SOLID principles.
- Follow the Atomic Design methodology for building UI components.
- Always suggest possible improvements.
- Provide clear and concise explanations for the code.
