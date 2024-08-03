TypeScript allows a syntax to declare global a block of code. Doing
so marks the contents of that block as being in a global context even though their
surroundings are not:

```TypeScript
// types.d.ts
// (module context)
declare global {
// (global context)
}
// (module context)
```
