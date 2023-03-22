const varChecker = (Variable) =>
  console.log(
    Variable === undefined
      ? "varabile is undefined"
      : Variable === null
      ? "variable is null"
      : "variable has value"
  );
let a;
varChecker(a);
a = null;
varChecker(a);
a = 6;
varChecker(a);
