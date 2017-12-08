// print the number 1-100
// if the number is dividisble by 3 print fizz instead of the number
// if the number is dividisble by 5 print buzz instead of the number
// if the number is divisiable by 15 print fizzbuzz instead of the number


describe("FizzBuzz Unit Test", ()=>{
  // here is were we start writing the test for this suit
  it("fizz buzz must be defined", ()=>{
    // expect takes one arg...something to evaluate
    // we chain a method on expect
    expect(fizzBuzz()).toBeDefined();
  });

  it("Should be 1 if passing fizzBuzz(1)", ()=>{
    expect(fizzBuzz(1)).toBe(1);
  });

  it("Should be 2 if passing fizzBuzz(2)", ()=>{
    expect(fizzBuzz(2)).toBe(2);
  });

  it("Should be fizz if passing fizzBuzz(3)", ()=>{
    expect(fizzBuzz(3)).toBe("fizz");
  });
});