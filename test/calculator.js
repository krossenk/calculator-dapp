var Calculator = artifacts.require("./Calculator.sol");

contract('Calculator', function(accounts) {
  var calculator;
  var initVal = 10;
  

  // Creates a new contract to rest states inside contract
  beforeEach(function() {
    return Calculator.new(initVal)
    .then(function(instance) {
      calculator = instance;
    });
  });

  // Expected behavior - result is initialized to 10
  // Test Case#1
  it("should assert true", function() {
    
    return Calculator.deployed().then(function(instance){
      //calculator = instance;
      return calculator.getResult.call();
    }).then(function (result) {
      assert.equal(result.valueOf(), initVal, "Contract initialized with value NOT equal to 10!!!");
    });
  });

  // Test Case#2 Addition
  it("should assert true", function(){
    return Calculator.deployed().then(function(instance){
      //calculator = instance;
      return calculator.addToNumber(20);
    }).then(function(){
      return calculator.getResult.call();
    }).then(function(result){
      assert.equal(result.toNumber(), 30, "Result after adding 20 should be 30 but was " + result.toNumber());
    });
  });

  // Test Case#3 Subtraction
  it("should assert true", function(){
    return Calculator.deployed().then(function(instance){
      //calculator = instance;
      return calculator.subtractFromNumber(5);
    }).then(function(){
      return calculator.getResult.call();
    }).then(function(result){
      assert.equal(result.toNumber(), 5, "Result after subtracting 5 should be 5 but was " + result.toNumber());
    });
  });

  // Test Case#4 Multiply
  it("should assert true", function(){
      return calculator.multiplyNumber(3)
    .then(function(){
      return calculator.getResult.call();
    }).then(function(result){
      assert.equal(result.toNumber(), 30, "Result after multiplying by 3 should be 30 but was " + result.toNumber());
    });
  });

  // Test Case#5 Divide
  it("should assert true", function(){
      return calculator.divideByNumber(2)
    .then(function(){
      return calculator.getResult.call();
    }).then(function(result){
      assert.equal(result.toNumber(), 5, "Result after dividing by 2 should be 5 but was " + result.toNumber());
    });
  });

  // Test Case#6 double
  it("should assert true", function(){
      return calculator.double()
    .then(function(){
      return calculator.getResult.call();
    }).then(function(result){
      assert.equal(result.toNumber(), 20, "Result after doubling should be 20 but was " + result.toNumber());
    });
  });

    // Test Case#7 half
  it("should assert true", function(){
      return calculator.half()
    .then(function(){
      return calculator.getResult.call();
    }).then(function(result){
      assert.equal(result.toNumber(), 5, "Result after halving should be 5 but was " + result.toNumber());
    });
  });
});
