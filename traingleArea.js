const traingleArea = (base, height, unit = "cm") =>
  isNaN(base) && isNaN(height)
    ? `Please Enter base and height in number`
    : isNaN(base) || isNaN(height)
    ? `Please Enter base and height in number`
    : `The area of triangle is ${(1 / 2) * base * height}${unit}`;
console.log(traingleArea(3, 4, "m"));
console.log(traingleArea(3, 40));
