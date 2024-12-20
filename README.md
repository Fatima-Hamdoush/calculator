Postfix Expression Evaluator
Overview

This project provides a simple Postfix Expression Evaluator (Reverse Polish Notation - RPN) in JavaScript. It can evaluate mathematical expressions written in postfix notation,<br>
which is a mathematical notation where operators follow their operands. It also includes error handling to ensure the expression is valid.
Features:
Supports basic mathematical operators: +, -, *, /, ^.
Handles errors gracefully by checking for invalid tokens, insufficient operands, and malformed expressions.
Returns NaN with an error message if the expression is invalid.
Examples of Prefix and Postfix Evaluation
Prefix Evaluation
Expression: + 9 * 2 3
Steps:
1. Start from the rightmost operand: 9 and * 2 3.
2. Evaluate * 2 3 → 2 * 3 = 6.
3. Add 9 + 6 = 15.
Result: 15

Postfix Evaluation
Expression: 9 2 3 * +
Steps:
1. Start with the first operator *: 2 * 3 = 6.
2. Add 9 + 6 = 15.
Result: 15

link: https://fatima-hamdoush.github.io/calculator/

