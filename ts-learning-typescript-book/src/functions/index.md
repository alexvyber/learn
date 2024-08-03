TypeScript will typically give three levels of detail, with
increasing levels of specificity:

1. The first indentation level prints out the two function types.
2. The next indentation level specifies which part is mismatched.
3. The last indentation level is the precise assignability complaint of the mis‐
   matched part.

Note that although JavaScript functions all return undefined by default if no real
value is returned, void is not the same as undefined. void means the return type of
a function will be ignored, while undefined is a literal value to be returned.

```TypeScript
function returnsVoid() {
return;
}
let lazyValue: string | undefined;
lazyValue = returnsVoid();
// Error: Type 'void' is not assignable to type 'string | undefined'.
```
