const expect = require('expect');
const request = require('supertest');


function getSum(total, num) {
  return total + num;
}

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

var mean = (x) => {
  return res = x.reduce(getSum)/x.length;

  //console.log(res);
};






describe('mean', () => {
  it('calculate the mean of an array of integers', (done) => {
    var nums = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    var res = mean(nums);
      expect(res).toBe(550.6);
      done();
    });
  });

  describe('mean', () => {
    it('calculate the mean of an array of integers', (done) => {
      var nums = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
      var res = round(mean(nums), 2);
        expect(res).toBe(60.32);
        done();
      });
    });
