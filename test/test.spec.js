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
    let testArray = [3, 2,78,1,9];
    let result = solution(testArray)
    expect(result[0].value === result[1].value).to.be.true
  })

  it('Should work with an empty array', () =>{

  })

  it('Should work with big numbers', () => {

  })

})