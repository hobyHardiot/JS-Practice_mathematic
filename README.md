# JS-Practice_mathematic
Equation second degree, cramer , slideshow pane


# JS-Practice_mathematic

This project is a JavaScript practice with three main features:

1. Quadratic Equation Solver: This program solves quadratic equations using Cramer's method. It handles equations with two unknowns to provide the solutions.

2. System of Equations Solver: Using Cramer's method, this script solves systems of linear equations with two unknowns.

3. Advertising Panel Slideshow: The project also includes a feature to display a slideshow of multiple advertising panels. The images are shown in sequence, creating an advertising animation.

## How to Use the Project

1. Clone the repository to your local machine.
2. Open the index12.html file in your web browser to access the web page.
3. Follow the instructions on the page to use the different features of the project.

## Usage Examples

### Quadratic Equation Solver:

```javascript
const a = 1;
const b = -3;
const c = 2;

const solutions = solveQuadraticEquation(a, b, c);
console.log(solutions); // Displays the solutions of the equation
```


### System of Equations Solver:
```javascript
const matrixA = [
  [2, -1],
  [3, 4]
];

const vectorB = [5, 7];

const solutions = solveSystemOfEquations(matrixA, vectorB);
console.log(solutions); // Displays the values of the two unknowns in the system

```

### Advertising Panel Slideshow:

```html
<div class="slideshow-container">
  <div class="slide fade">
    <img src="advertisement1.jpg" alt="Advertisement 1">
  </div>
  <div class="slide fade">
    <img src="advertisement2.jpg" alt="Advertisement 2">
  </div>
  <!-- Add more advertising panels here -->
</div>
```

## Contributions
Contributions to this project are welcome. If you have ideas for improvements or bug fixes, feel free to open a pull request.


## Author
Github - [@hoby_hardiot](https://www.github.com/hobyhardiot)
