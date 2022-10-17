# Building an IPhone calculator clone with React!

### Calculator Workflow

#Variables:

- [displayValue, setDisplayValue] = useState(0);
- [previousValue, setPreviousValue] = useState(0);
- tempResult
- displayValue;
- updateDisplayValue
- (inputValue) => {
- updatedDisplayValue
- calculateResult


#### Goal: 4 + 3 = 7

###Step 1:
- input number
- displayValue is set to inputValue
###Step 2:
- hit function button
- before function is stored(i think we should put the math func in state) check to see:
- if there is an inputValue, if so set inputValue to previousValue
- if not setpreviousValue to 0.
- Once those are checked and after the function button is hit, if the next input is a math func update state to reflect current func
- if next input is a number inputValue is set to displayValue
- once we hit equals, run calculateResult and set tempResult to displayValue











#### Goal: 4 + 2 + 1 = 7
