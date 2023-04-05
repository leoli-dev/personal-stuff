# Go: The Complete Developer's Guide (Golang)

## Section 4: Organizing Data With Structs

### 45. Pointer Operations

```go
func (pointerToPerson *person) updateName(newFirstName string) {
    (*pointerToPerson).firstName = newFirstName
}
```

In the function above:
1. the `*person` in the receiver is a type description, it means we're working with a pointer to a person;
2. inside the function, `*pointerToPerson` is an operator, it means we manipulate the value of the pointer is referencing.

Remember: 

- Turn `address` into `value` with `*address`
- Turn `value` into `address` with `&value`

### 46. Pointer Shortcut

If the receiver of a function is being set to a type description, for passing the pointer of a variable to the function, we can use directly the variable instead of the pointer.

for example, the code below

```go
func (pointerToPerson *person) updateName(newFirstName string) {...}

jim := person{...}
jimPointer := &jim
jimPointer.updateName("Jimmy")
```

could simplify as:

```go
func (pointerToPerson *person) updateName(newFirstName string) {...}

jim := person{...}
jim.updateName("Jimmy")
```

### 48. Reference vs Value Types

Here are the types which will be passed by value (Value Types), use pointers to change these things in a function:
- `int`
- `float`
- `string`
- `bool`
- `structs`

Here are the types which will be passed by reference (Reference Types), don't worry about pointers with these:
- `slices`
- `maps`
- `channels`
- `pointers`
- `functions`
