class Parent {
  constructor(intValue) {
      this.intValue = intValue
  }
 
  value() {
      return this.intValue;
  }
}

class Child extends Parent { }


function solution(A) {
  // corner cases
  if (A.length === 0) return []

  let responseObjArray = []
  // move the values from A to the reponseArray
  for (let i = 0; i < A.length; i++) {
      let newObj = new Child(A[i])
      responseObjArray.push(newObj)
  }
  return responseObjArray
}

module.exports = {
  solution,
  Parent,
  Child
};
