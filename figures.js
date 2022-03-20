//Codigo del cuadrado
console.group("Cuadrados");
const squareSide = 5;
console.log("Los lados del cuadrado miden: " + squareSide + "cm");

const squarePerimeter = squareSide * 4;
console.log("El perímetro del cuadrado es " + squarePerimeter + "cm");

const squareArea = squareSide * squareSide;
console.log("El área del cuadrado es " + squareArea + "cm2");

console.groupEnd();
//Codigo del triangulo
console.group("Triangulos");
const triangleSide = 6;
const triangleSide2 = 6;
const triangleBase = 4;


console.log("Los lados del triangulo miden: " + triangleSide + "cm, " 
+ triangleSide2 + "cm, y su base es de:  " + triangleBase + "cm");

const triangleHeight = 5.5;
console.log("La altura del tríangulo es de: " + triangleHeight);

const trianglePerimeter = triangleSide + triangleSide2 + triangleBase;
console.log("El perimetro de mi triangulo es de:  " + trianglePerimeter);

const triangleArea = (triangleBase * triangleHeight)/2;
console.log("El area del triangulo es de: " + triangleArea + "cm2");


console.groupEnd();

//Codigo del circulo
console.group("Circulos");

//Radio
const circleRadius = 4;
console.log("El radio del circulo es de: " + circleRadius);

//Diametro
const circleDiameter = circleRadius * 2;
console.log("El diametro del circulo es de: " + circleDiameter);

//PI
const PI = Math.PI;
console.log("PI: " + PI);

//Circunferencia
const circlePerimeter = circleDiameter * PI;
console.log(" La circunferencia es de: " + circlePerimeter)

//Area
const circleArea = (circleRadius * circleRadius)* PI;
console.log(" El area del circulo es de: " + circleArea);


console.groupEnd();