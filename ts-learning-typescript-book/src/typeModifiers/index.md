## keyof typeof

typeof retrieves the type of a value, and keyof retrieves the allowed keys on a type.
TypeScript allows the two keywords to be chained together to succinctly retrieve
the allowed keys on a value’s type. Putting them together, the typeof type operator
becomes wonderfully useful for working with keyof type operations.
In this example, the logRating function is meant to take in one of the keys of
the ratings value. Instead of creating an interface, the code uses keyof typeof to
indicate key must be one of the keys on the type of the ratings value:

```TypeScript
const ratings = {
imdb: 8.4,
metacritic: 82,
};
function logRating(key: keyof typeof ratings) {
console.log(ratings[key]);
}
logRating("imdb"); // Ok
logRating("invalid");
//        ~~~~~~~~~
// Error: Argument of type '"missing"' is not assignable
// to parameter of type '"imdb" | "metacritic"'.
```

## Asserting Caught Error Types

If you are absolutely confident that an area of code will only throw an instance of the
Error class, you can use a type assertion to treat a caught assertion as an Error. This
snippet accesses the message property of a caught error that it assumes is an instance
of the Error class:

```TypeScript
try {
// (code that may throw an error)
} catch (error) {
console.warn("Oh no!", (error as Error).message);
}
```

It is generally safer to use a form of type narrowing such as an instanceof check to
ensure the thrown error is the expected error type. This snippet checks whether the
thrown error is an instance of the Error class to know whether to log that message or
the error itself:

```TypeScript
try {
// (code that may throw an error)
} catch (error) {
console.warn("Oh no!", error instanceof Error ? error.message : error);
}
```

## Non-Null Assertions

```TypeScript
// Inferred type: Date | undefined
let maybeDate = Math.random() > 0.5
? undefined
: new Date();
// Asserted type: Date
maybeDate as Date;
// Asserted type: Date
maybeDate!;
```
