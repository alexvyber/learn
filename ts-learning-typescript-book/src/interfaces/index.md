### The key differences between interfaces and type aliases:

- As you’ll see later in this chapter, interfaces can “merge” together to be augmen‐
  ted—a feature particularly useful when working with third-party code such as
  built-in globals or npm packages.
- As you’ll see in the next chapter, Chapter 8, “Classes”, interfaces can be used to
  type check the structure of class declarations while type aliases cannot.
- Interfaces are generally speedier for the TypeScript type checker to work with:
  they declare a named type that can be cached more easily internally, rather than a
  dynamic copy-and-paste of a new object literal the way type aliases do.
- Because interfaces are considered named objects rather than an alias for an
  unnamed object literal, their error messages are more likely to be readable in
  hard edge cases.

### Readonly

Readonly modifiers exist only in the type system, and only apply to the
usage of that interface. It won’t apply to an object unless that object is used in a
location that declares it to be of that interface.

### Functions and Methods

- Use a method function if you know the underlying function may refer to this,
  most commonly for instances of classes.
- Use a property function otherwise.
