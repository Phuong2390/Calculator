const Operator = require('./Operator/index');
function calculator() {
    this.operator = {
        '+' : new Operator.Add,
        '-' : new Operator.Sub,
        '*' : new Operator.Mul,
        '/' : new Operator.Div
    };
    this.run = function (operaname, num1, num2) {
        return this.operator[operaname].run(num1, num2);

    };

}
module.exports = calculator;