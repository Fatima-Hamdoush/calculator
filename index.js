
const lune = document.getElementById('lune')
 const calculator=document.getElementById('calculator')
const a =0;
 let stackprofix = []
 let stack = []
let counter=0

function handleError(message) {
  console.error(`Error: ${message}`)
  return NaN 
}

function prefixEval() {
    let val = document.getElementById('display').value
  let temp = val.split(' ')
  let expr = temp.reverse()

  for (let i = 0; i < expr.length; i++) {
    if (
      expr[i] === '+' ||
      expr[i] === '-' ||
      expr[i] === '/' ||
      expr[i] === '*'
    ) {
      let j = stack.pop()
      let k = stack.pop()
      let temp = checkOperator(parseFloat(j), parseFloat(k), expr[i])
      stack.push(temp)
    } else {
      stack.push(expr[i])
    }
  }

  document.getElementById('display').value = stack

}

function checkOperator(a, b, op) {
  switch (op) {
    case '+':
     
      return a + b
    case '-':
     
      return a - b
    case '/':
      
      return a / b
    case '*':
      
      return a * b
    default:
      return 'this is not correct'
  }
}

function Postfixeval() {
  
   val = document.getElementById('display').value

  // Scan all characters one by one
  for (let i = 0; i < val.length; i++) {
    let c = val[i]
     if (c === ' ') continue;//ignore space
    // If the scanned character is an operand (number here),
    // push it to the stack.
    if (!isNaN(parseInt(c))) stackprofix.push(c.charCodeAt(0) - '0'.charCodeAt(0))
    //  If the scanned character is an operator, pop two
    // elements from stack apply the operator
    else {
      let val1 = stackprofix.pop()
      let val2 = stackprofix.pop()
      switch (c) {
        case '+':
          stackprofix.push(val2 + val1)
          break
        case '-':
          stackprofix.push(val2 - val1)
          break
        case '/':
          stackprofix.push(val2 / val1)
          break
        case '*':
          stackprofix.push(val2 * val1)
          break
      }
    }
  }
  res = stackprofix.pop()
  console.log(res)
  document.getElementById('display').value = res
  

}

function darkmode()
{  
    
    if (counter%2===0) {
   calculator.style.backgroundColor ='rgb(200, 216, 230)'
     lune.style.backgroundColor = 'rgb(200, 216, 230)'
}
else{
    calculator.style.backgroundColor = 'rgb(58, 68, 82)'
    lune.style.backgroundColor = 'rgb(58, 68, 82)'

}
   counter++;  
}


