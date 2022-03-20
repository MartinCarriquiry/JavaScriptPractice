//encapsulamiento

function squarePerimeter(side) {
    return console.log(side * 4);
}

squarePerimeter(5);

function squareArea(side){
    return console.log(side * side);
}

squareArea(5);

function trianglePerimeter(side, side2, base){
    return console.log(side + side2 + base);
}

trianglePerimeter(5, 5, 3);

function triangleArea(base, height){
    return console.log(base * height)/2;
}

triangleArea(5, 4);

function circleDiameter(radius){
    return console.log(radius * 2);
}

circleDiameter(4);

function circlePerimeter(circleDiameter){
    return console.log(circleDiameter * Math.PI);
}

circlePerimeter(3);

function circleArea(radius){
    return console.log((radius * radius) * Math.PI);
}

circleArea(4);

// Aquí interactualmos con el HTML

function calculateSquarePerimeter(){
    const input = document.getElementById("squareInput");
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function calculateSquareArea(){
    const input = document.getElementById("squareInput");
    const value = input.value;

    const area = squareArea(value);
    alert(area);
}

function calculateTrianglePerimeter(){
    const input = document.getElementById("triangleInput");
    const value = input.value;
    const value1 = input.value1;
    const value2 = input.value2;

    const perimeter = trianglePerimeter(value, value1, value2);
    alert(perimeter);
}

function calculateTriangleArea(){
    const input = document.getElementById("triangleInput");
    const value = input.value;
    const radius = value / 2
    const value2 = input.value2;

    const area = triangleArea(radius, value2);
    alert(radius, value2);
}