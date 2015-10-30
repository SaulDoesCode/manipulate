## Manipulate
> Override functions in Javascript

## API

### Basic layout and usage
#### OverrideFunction(funcName, Func, ContextObject)

### OverrideFunction
```javascript
var Person = (function(){
  function greeting(){console.log("Hello!")}
  return {
    greeting: greeting
  }
})()

function rudeGreeting(){
  console.log("Sup, sucker!")
}

Person.greeting() // #=>  "Hello!"

OverrideFunction("Person.greeting", rudeGreeting, window)

Person.greeting() // #=>  "Sup, sucker!"
```

##### Also works with prototype functions:
```javascript
String.prototype.yell = function(){
  return this + "!"
}

function reallyYell(){
  return this + "!!!!!!!!"
}

"Hello".yell() // #=>  "Hello!"

OverrideFunction("String.prototype.yell", reallyYell, window)

"Hello".yell() // #=>  "Hello!!!!!!!!"
```
##### Basic Error checking when you use wrong type of parameters

```javascript
  OverrideFunction(123, SomeFunc , MyContextObject);
  // logs error : invalid funcName -> ensure it's a string
```

