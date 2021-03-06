var Expression = algebra.Expression;
var Equation = algebra.Equation;
var Fraction = algebra.Fraction;
var ifrj = {};

ifrj.mediaFinal = function(mv1, mv2) {
  return (mv1 + (2*mv2))/3;
};

ifrj.quantoFalta = function (mv1) {
  var expr = new Expression("x")
  .multiply(2)
  .add(mv1)
  .divide(3);
  var eq = new Equation(expr, 60);
  var x = eq.solveFor("x");
  return x;
};

ifrj.recuperacao = function(nota) {
  var expr = new Expression("x")
  .multiply(new Fraction(15, 10))
  .add(nota)
  .divide(new Fraction(25, 10));
  var eq = new Equation(expr, 60);
  var x = eq.solveFor("x");
  return x.numer/x.denom;
};
