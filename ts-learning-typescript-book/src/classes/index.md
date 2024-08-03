myFunction() {}. The method approach assigns a function to the class
prototype, so all class instances use the same function definition. This WithMethod class declares a myMethod method that all instances are able to refer
to:

```JavaScript
class WithMethod {
myMethod() {}
}
new WithMethod().myMethod === new WithMethod().myMethod; // true
```

The other syntax is to declare a property whose value happens to be a function. This
creates a new function per instance of the class, which can be useful with () => arrow
functions whose this scope should always point to the class instance (at the time and
memory cost of creating a new function per class instance).
This WithProperty class contains a single property of name myProperty and type ()
=> void that will be re-created for each class instance:

```JavaScript
class WithProperty {
myProperty: () => {}
}

new WithMethod().myProperty === new WithMethod().myProperty; // false
```
