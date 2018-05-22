import { Euler } from './../src/js/euler.js';


describe('Euler', function() {

  it('should test correctly sum of all numbers that are divisible', function(){
    var firstEuler = new Euler();
    expect(firstEuler.problem1(1000)).toEqual(233168);
  });

  it('should test the sum of multiples of 3 and 5 below 10', function() {
    var firstEuler = new Euler();
    expect(firstEuler.problem1(10)).toEqual(23);
  });

  it('should test a number and return all of the even valued numbers for the Fibonacci sequence to the inputted number', function(){
    var secondEuler = new Euler();
    expect(secondEuler.problem2(10)).toEqual(44);
  });

  it('should test a number and return all of the even valued numbers for the Fibonacci sequence to the inputted number', function(){
    var secondEuler = new Euler();
    expect(secondEuler.problem2(11)).toEqual(188);
  });
});
