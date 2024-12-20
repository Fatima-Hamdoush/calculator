
const val = document.getElementById('diaplay')
function prefixEval(expression) {
  let temp = expression.split(' ')
  let expr = temp.reverse()
  let stack = []

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
  return stack
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

function evaluatePostfix(exp) {
  //create a stack
  let stack = []

  // Scan all characters one by one
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i]
     if (c === ' ') continue;//ignore space

    // If the scanned character is an operand (number here),
    // push it to the stack.
    if (!isNaN(parseInt(c))) stack.push(c.charCodeAt(0) - '0'.charCodeAt(0))
    //  If the scanned character is an operator, pop two
    // elements from stack apply the operator
    else {
      let val1 = stack.pop()
      let val2 = stack.pop()

      switch (c) {
        case '+':
          stack.push(val2 + val1)
          break

        case '-':
          stack.push(val2 - val1)
          break

        case '/':
          stack.push(val2 / val1)
          break

        case '*':
          stack.push(val2 * val1)
          break
      }
    }
  }
  return stack.pop()
}

console.log(prefixEval('+ 9 * 2 3'))
console.log(prefixEval('+ 8 * 3 4'))
let exp = '9 2 3 * +'
console.log('postfix evaluation: ' + evaluatePostfix(exp))


