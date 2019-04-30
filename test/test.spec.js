const { expect } = require('chai')
const { solution, Child } = require('../src/index')

describe('Test task 1', () => {

  it('should return an array of objects', () => {
    let testArray = [1, 3, 4, 6];
    let result = solution(testArray)
    expect(result).to.be.a('array')
    expect(result[0]).to.be.instanceOf(Child)
  })

  it('Should not have the property value', () => {
    let testArray = [3, 2];
    let result = solution(testArray)
    expect(result[0].hasOwnProperty('value')).to.be.false
  })

  it('Should have the same value() implementation', () => {
    let testArray = [3, 2];
    let result = solution(testArray)
    expect(result[0].value === result[1].value).to.be.true
  })

  it('Should match the value() with the initial array', () => {
    let testArray = [3, 2, 78, 1, 9];
    let result = solution(testArray)
    expect(result[0].value()).to.equal(3)
    expect(result[1].value()).to.equal(2)
    expect(result[2].value()).to.equal(78)
    expect(result[3].value()).to.equal(1)
    expect(result[4].value()).to.equal(9)
  })

  it('Should work with an empty array', () => {
    let testArray = [];
    let result = solution(testArray)
    expect(result).to.have.lengthOf(0)
  })

  it('Should work with big numbers', () => {
    let testArray = [1, 2, 99999, 1000000, 100001];
    let result = solution(testArray)
    expect(result).to.have.lengthOf(5)
    expect(result[4].value()).to.equal(100001)
  })

  it('Should work with a big input', () => {
    let testArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
      1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811,
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181,
      6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 0, 1, 1, 2, 3, 5, 8,
      13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711,
      28657, 46368, 75025, 121393, 196418, 317811, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,
      144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025,
      121393, 196418, 317811]
    let result = solution(testArray)
    expect(result).to.have.lengthOf(116)
    expect(result[33].value()).to.equal(3)
  })

})